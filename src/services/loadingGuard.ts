export const DEFAULT_LOADING_LABEL = 'UptAIme Assist está respondendo...';

type LoadingGuardControllerOptions = {
  onLabelChange: (label: string) => void;
  onRequestUpdate?: () => void;
};

export class LoadingGuardController {
  private timerSlow: number | null = null;
  private timerLong: number | null = null;
  private timerVeryLong: number | null = null;
  private readonly onLabelChange: (label: string) => void;
  private readonly onRequestUpdate?: () => void;

  constructor(options: LoadingGuardControllerOptions) {
    this.onLabelChange = options.onLabelChange;
    this.onRequestUpdate = options.onRequestUpdate;
  }

  start() {
    this.clear();
    this.onLabelChange('UptAIme Assist está respondendo');

    this.timerSlow = window.setTimeout(() => {
      this.onLabelChange('UptAIme Assist continua respondendo');
      this.onRequestUpdate?.();
    }, 20000);

    this.timerLong = window.setTimeout(() => {
      this.onLabelChange(
        'UptAIme Assist ainda está processando sua resposta. Peço que aguarde um pouco mais',
      );
      this.onRequestUpdate?.();
    }, 60000);

    this.timerVeryLong = window.setTimeout(() => {
      this.onLabelChange(
        'Essa solicitação está demorando um pouco mais que o esperado. Pode favor, aguarde mais um pouco',
      );
      this.onRequestUpdate?.();
    }, 120000);
  }

  clear() {
    if (this.timerSlow !== null) {
      window.clearTimeout(this.timerSlow);
      this.timerSlow = null;
    }

    if (this.timerLong !== null) {
      window.clearTimeout(this.timerLong);
      this.timerLong = null;
    }

    if (this.timerVeryLong !== null) {
      window.clearTimeout(this.timerVeryLong);
      this.timerVeryLong = null;
    }
  }
}
