type LoggerLike = {
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

type StartOptions = {
  onTranscriptPreview: (preview: string, segments: string[]) => void;
  onSpeechRecognitionAvailabilityChange: (available: boolean) => void;
  onError: (message: string) => void;
  isRecordingActive: () => boolean;
  isRecordingPaused: () => boolean;
};

export class VoiceCaptureController {
  private recorder: MediaRecorder | null = null;
  private stream: MediaStream | null = null;
  private recordingChunks: BlobPart[] = [];
  private speechRecognizer: any | null = null;
  private transcriptSegments: string[] = [];
  private transcriptPreview = '';

  constructor(private readonly logger: LoggerLike) {}

  async start(options: StartOptions): Promise<boolean> {
    const stream = await this.requestMicrophoneStream(options.onError);
    if (!stream) {
      options.onSpeechRecognitionAvailabilityChange(false);
      return false;
    }

    this.stream = stream;
    this.recordingChunks = [];
    this.transcriptSegments = [];
    this.transcriptPreview = '';

    const recorder = this.createVoiceRecorder(stream);
    this.recorder = recorder;
    recorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.recordingChunks.push(event.data);
      }
    };
    recorder.onstop = () => {
      this.cleanupVoiceStream();
    };

    recorder.start();
    this.startSpeechRecognition(options);
    return true;
  }

  pause() {
    if (!this.recorder || this.recorder.state !== 'recording') {
      return;
    }

    this.recorder.pause();
    this.stopSpeechRecognition();
  }

  resume(options: StartOptions) {
    if (!this.recorder || this.recorder.state !== 'paused') {
      return;
    }

    this.recorder.resume();
    this.startSpeechRecognition(options);
  }

  async stop(): Promise<{ blob: Blob | null; transcript: string }> {
    this.stopSpeechRecognition();
    const blob = await this.stopRecorder();
    this.cleanupVoiceStream();
    const transcript = this.transcriptSegments.join(' ').trim() || this.transcriptPreview.trim();
    this.clearRecorder();
    return { blob, transcript };
  }

  async discard() {
    this.stopSpeechRecognition();
    await this.stopRecorder();
    this.cleanupVoiceStream();
    this.clearRecorder();
  }

  teardown() {
    if (this.recorder && this.recorder.state !== 'inactive') {
      this.recorder.stop();
    }
    this.stopSpeechRecognition();
    this.cleanupVoiceStream();
    this.clearRecorder();
  }

  private async requestMicrophoneStream(
    onError: (message: string) => void,
  ): Promise<MediaStream | null> {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      onError('Seu navegador nao suporta gravacao de audio.');
      return null;
    }

    try {
      return await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
      this.logger.error('[RioAssist][voice] erro ao acessar microfone', error);
      onError('Nao foi possivel acessar o microfone.');
      return null;
    }
  }

  private createVoiceRecorder(stream: MediaStream) {
    const candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/ogg',
      'audio/mp4',
    ];
    const supported = candidates.find((type) =>
      typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type),
    );

    return supported ? new MediaRecorder(stream, { mimeType: supported }) : new MediaRecorder(stream);
  }

  private startSpeechRecognition(options: StartOptions) {
    const SpeechRecognitionCtor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) {
      options.onSpeechRecognitionAvailabilityChange(false);
      return;
    }

    this.stopSpeechRecognition();
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = 'pt-BR';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (event: any) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i];
        const transcript = result[0]?.transcript ?? '';
        if (result.isFinal) {
          this.transcriptSegments.push(transcript.trim());
        } else {
          interim += transcript;
        }
      }

      this.transcriptPreview = [...this.transcriptSegments, interim.trim()]
        .filter(Boolean)
        .join(' ')
        .trim();

      if (this.transcriptPreview) {
        this.logger.info('[RioAssist][voice] transcricao parcial', this.transcriptPreview);
      }
      options.onTranscriptPreview(this.transcriptPreview, [...this.transcriptSegments]);
    };
    recognition.onstart = () => {
      this.logger.info('[RioAssist][voice] reconhecimento iniciado');
    };
    recognition.onaudiostart = () => {
      this.logger.info('[RioAssist][voice] audio captado (inicio)');
    };
    recognition.onaudioend = () => {
      this.logger.info('[RioAssist][voice] audio captado (fim)');
    };
    recognition.onsoundstart = () => {
      this.logger.info('[RioAssist][voice] som detectado');
    };
    recognition.onsoundend = () => {
      this.logger.info('[RioAssist][voice] som terminou');
    };
    recognition.onspeechstart = () => {
      this.logger.info('[RioAssist][voice] fala detectada');
    };
    recognition.onspeechend = () => {
      this.logger.info('[RioAssist][voice] fala terminou');
    };
    recognition.onnomatch = (event: any) => {
      this.logger.warn('[RioAssist][voice] fala nao reconhecida', event);
    };
    recognition.onend = () => {
      this.logger.info('[RioAssist][voice] reconhecimento encerrado', {
        isRecording: options.isRecordingActive(),
        isRecordingPaused: options.isRecordingPaused(),
      });
      if (options.isRecordingActive() && !options.isRecordingPaused()) {
        try {
          recognition.start();
        } catch (error) {
          this.logger.warn('[RioAssist][voice] falha ao reiniciar reconhecimento', error);
        }
      }
    };
    recognition.onerror = (event: any) => {
      const error = (event && event.error) || '';
      this.logger.error('[RioAssist][voice] erro no reconhecimento de voz', {
        error,
        message: event?.message ?? null,
        event,
      });

      if (
        error === 'not-allowed' ||
        error === 'service-not-allowed' ||
        error === 'not-supported'
      ) {
        options.onSpeechRecognitionAvailabilityChange(false);
      }
    };

    try {
      recognition.start();
      this.speechRecognizer = recognition;
      options.onSpeechRecognitionAvailabilityChange(true);
    } catch (error) {
      this.logger.warn('[RioAssist][voice] nao foi possivel iniciar reconhecimento', error);
      this.speechRecognizer = null;
      options.onSpeechRecognitionAvailabilityChange(false);
    }
  }

  private stopSpeechRecognition() {
    if (!this.speechRecognizer) {
      return;
    }

    try {
      this.speechRecognizer.onresult = null;
      this.speechRecognizer.onerror = null;
      this.speechRecognizer.onend = null;
      this.speechRecognizer.stop();
    } catch (error) {
      this.logger.warn('[RioAssist][voice] erro ao interromper reconhecimento', error);
    }
    this.speechRecognizer = null;
  }

  private stopRecorder() {
    return new Promise<Blob | null>((resolve) => {
      const recorder = this.recorder;
      if (!recorder) {
        resolve(null);
        return;
      }

      const finalize = () => {
        recorder.removeEventListener('stop', finalize);
        const mimeType = recorder.mimeType || 'audio/webm';
        const blob =
          this.recordingChunks.length > 0
            ? new Blob(this.recordingChunks, { type: mimeType })
            : null;
        resolve(blob);
      };

      recorder.addEventListener('stop', finalize);
      if (recorder.state !== 'inactive') {
        recorder.stop();
      } else {
        finalize();
      }
    });
  }

  private cleanupVoiceStream() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
  }

  private clearRecorder() {
    this.recordingChunks = [];
    this.transcriptSegments = [];
    this.transcriptPreview = '';

    if (this.recorder) {
      this.recorder.ondataavailable = null;
      this.recorder.onstop = null;
      this.recorder = null;
    }
  }
}
