import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';
import type { RioAssistWidget } from '../rio-assist/rio-assist';
import { renderConversationsPanel } from '../conversations-panel/conversations-panel.template';
import { renderConsultantAgentHero } from '../../consultant-agent/consultant-agent.template';
import type {
  ConsultantAgentOption,
  ConsultantQuestion,
} from '../../consultant-agent/consultant-agent';

const hamburgerIconUrl = new URL('../../assets/icons/hamburgerMenuIcon.png', import.meta.url).href;
const expandIconUrl = new URL('../../assets/icons/expandScreen.png', import.meta.url).href;
const iaCentralIconUrl = new URL('../../assets/icons/iaCentralIcon.png', import.meta.url).href;
const plusFileSelectionUrl = new URL('../../assets/icons/plusFileSelection.png', import.meta.url).href;
const closeIconUrl = new URL('../../assets/icons/closeIcon.png', import.meta.url).href;
const closeFileCardIconUrl = new URL('../../assets/icons/closeFileCard.png', import.meta.url).href;
const arrowButtonUrl = new URL('../../assets/icons/arrowButton.png', import.meta.url).href;
const voiceRecoverIconUrl = new URL('../../assets/icons/voiceRecoverIcon.png', import.meta.url).href;
const cancelVoiceIconUrl = new URL('../../assets/icons/cancelVoice.png', import.meta.url).href;
const confirmVoiceIconUrl = new URL('../../assets/icons/confirmVoice.png', import.meta.url).href;
const fileTypeIconUrl = new URL('../../assets/svg/fileType.svg', import.meta.url).href;
const likeIconUrl = new URL('../../assets/icons/like.png', import.meta.url).href;
const unlikeIconUrl = new URL('../../assets/icons/unlike.png', import.meta.url).href;
const updateIconUrl = new URL('../../assets/icons/update.png', import.meta.url).href;
const shareIconUrl = new URL('../../assets/icons/share.png', import.meta.url).href;
const copyIconUrl = new URL('../../assets/icons/copyText.png', import.meta.url).href;
const lineThreeDotsIconUrl = new URL('../../assets/icons/lineThreeDots.png', import.meta.url).href;

const formatMessageTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const now = new Date();
  const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const nowStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayDiff = Math.floor((nowStart.getTime() - dateStart.getTime()) / 86400000);

  const timeLabel = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (dayDiff === 0) {
    return timeLabel;
  }

  let dateLabel = '';
  if (dayDiff === 1) {
    dateLabel = 'ontem';
  } else if (dayDiff >= 2 && dayDiff <= 5) {
    dateLabel = date.toLocaleDateString('pt-BR', { weekday: 'long' });
  } else {
    dateLabel = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  return `${dateLabel} ${timeLabel}`;
};

const renderConsultantFollowUp = (
  component: RioAssistWidget,
  payload: {
    id: string;
    topicLabel: string;
    questions?: ConsultantQuestion[];
  },
) => {
  const questions = payload.questions ?? [];
  const buttonsVisible =
    component.activeConsultantFollowUpId === payload.id && questions.length > 0;

  return html`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">
        Certo! Reuni abaixo as principais dúvidas sobre ${payload.topicLabel}. Escolha uma delas ou
        faça sua pergunta.
      </p>
      ${buttonsVisible
        ? html`
            <div class="consultant-follow-up__options">
              ${questions.map(
                (question) => html`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${() => component.handleConsultantFollowUpQuestion(question)}
                  >
                    ${question.prompt}
                  </button>
                `,
              )}
              <button
                class="consultant-agent__option"
                type="button"
                @click=${() => component.handleConsultantChooseAnotherSubject()}
              >
                Escolher outro assunto.
              </button>
            </div>
          `
        : null}
    </div>
  `;
};

const renderConsultantPrompt = (
  component: RioAssistWidget,
  payload: {
    id: string;
    text: string;
    options: ConsultantAgentOption[];
  },
) => {
  const buttonsVisible = component.activeConsultantPromptId === payload.id;

  return html`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">${payload.text}</p>
      ${buttonsVisible
        ? html`
            <div class="consultant-follow-up__options">
              ${payload.options.map(
                (option) => html`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${() => component.handleConsultantAgentOption(option)}
                  >
                    ${option.label}
                  </button>
                `,
              )}
            </div>
          `
        : null}
    </div>
  `;
};

export const renderChatSurface = (component: RioAssistWidget) => {
  const hasMessages = component.messages.length > 0;
  const showConsultantPrompt =
    component.consultantAgentVisible &&
    component.consultantAgentOptions.length > 0 &&
    !hasMessages;

  const heroCard = html`
    <div class="hero-card">
      <img src=${iaCentralIconUrl} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
      ${renderConsultantAgentHero(component)}
    </div>
  `;

  const consultantPrompt = html`
    <div class="consultant-prompt">
      <div class="consultant-prompt__text">
        ${component.consultantAgentIntro}
      </div>
      <div class="consultant-prompt__options">
        ${component.consultantAgentOptions.map(
          (option) => html`
            <button
              class="consultant-agent__option"
              type="button"
              @click=${() => component.handleConsultantAgentOption(option)}
            >
              ${option.label}
            </button>
          `,
        )}
      </div>
    </div>
  `;

  const conversation = html`
    <div class="conversation">
      ${component.messages.map((message) => {
        const hasFollowUp = Boolean((message as any).consultantFollowUp);

        return html`
          <div
            class=${classMap({
              message: true,
              'message--user': message.role === 'user',
              'message--assistant': message.role === 'assistant',
            })}
          >
            <div class="message__content">
              ${hasFollowUp
                ? renderConsultantFollowUp(component, (message as any).consultantFollowUp)
                : (message as any).consultantPrompt
                  ? renderConsultantPrompt(component, (message as any).consultantPrompt)
                  : unsafeHTML(message.html ?? message.text)}
            </div>
            ${message.role === 'assistant'
              ? html`
                  <div class="message__actions" aria-label="Ações da resposta">
                    <button class="message__action-button" type="button" aria-label="Curtir">
                      <img src=${likeIconUrl} alt="" aria-hidden="true" />
                    </button>
                    <button class="message__action-button" type="button" aria-label="Não curtir">
                      <img src=${unlikeIconUrl} alt="" aria-hidden="true" />
                    </button>
                    <button class="message__action-button" type="button" aria-label="Atualizar">
                      <img src=${updateIconUrl} alt="" aria-hidden="true" />
                    </button>
                    <button class="message__action-button" type="button" aria-label="Compartilhar">
                      <img src=${shareIconUrl} alt="" aria-hidden="true" />
                    </button>
                    <button class="message__action-button" type="button" aria-label="Copiar">
                      <img src=${copyIconUrl} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="message__action-button"
                      type="button"
                      aria-label="Mais opções"
                    >
                      <img src=${lineThreeDotsIconUrl} alt="" aria-hidden="true" />
                    </button>
                  </div>
                `
              : null}
            <time>
              ${formatMessageTimestamp(message.timestamp)}
            </time>
          </div>
        `;
      })}
      ${component.isLoading
        ? html`
            <div class="message message--assistant typing">
              <span>${component.loadingLabel}</span>
              <span class="typing__dots" aria-hidden="true">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
          `
        : null}
    </div>
  `;

  return html`
    <div class="panel-body">
      <div
      class=${classMap({
        'panel-content': true,
        'panel-content--empty': !hasMessages && !showConsultantPrompt,
        'panel-content--consultant': showConsultantPrompt,
      })}
      >
        ${hasMessages ? conversation : showConsultantPrompt ? consultantPrompt : heroCard}
      </div>

      ${component.errorMessage
        ? html`<p class="error-banner">${component.errorMessage}</p>`
        : null}

      <div class="panel-footer">
        ${component.showSuggestions && component.suggestions.length > 0
          ? html`
              <div class="suggestions-wrapper">
                <p class="suggestions-label">Sugestões de Perguntas</p>
                <div class="suggestions">
                  ${component.suggestions.map(
                    (suggestion) => html`
                      <button
                        class="suggestion"
                        type="button"
                        @click=${() => component.onSuggestionClick(suggestion)}
                      >
                        ${suggestion}
                      </button>
                    `,
                  )}
                </div>
              </div>
            `
          : null}

        <form
          @submit=${(event: SubmitEvent) => component.handleSubmit(event)}
          aria-busy=${component.isLoading}
          class=${classMap({
            'input-shell': true,
            'input-shell--has-attachments': component.selectedFiles.length > 0,
            'input-shell--recording': component.isRecording,
          })}
        >
          ${component.selectedFiles.length > 0
            ? html`
                <div class="attachments">
                  ${component.selectedFiles.map((attachment) =>
                    attachment.kind === 'image'
                      ? html`
                          <div class="attachment-thumb">
                            <img
                              src=${attachment.previewUrl ?? ''}
                              alt=${attachment.name}
                              loading="lazy"
                            />
                            <button
                              class="attachment-thumb__remove"
                              type="button"
                              aria-label=${`Remover ${attachment.name}`}
                              @click=${() => component.handleAttachmentRemove(attachment.id)}
                            >
                              <img src=${closeFileCardIconUrl} alt="" aria-hidden="true" />
                            </button>
                          </div>
                        `
                      : html`
                          <div class="attachment-card attachment-card--${attachment.kind}">
                            <span
                              class="attachment-card__icon"
                              style=${`--file-icon: url(${
                                attachment.kind === 'audio'
                                  ? voiceRecoverIconUrl
                                  : fileTypeIconUrl
                              });`}
                              aria-hidden="true"
                            ></span>
                            <div class="attachment-card__meta">
                              <strong>${attachment.name}</strong>
                              <span>${attachment.typeLabel}</span>
                            </div>
                            <button
                              class="attachment-card__remove"
                              type="button"
                              aria-label=${`Remover ${attachment.name}`}
                              @click=${() =>
                                attachment.kind === 'audio'
                                  ? component.handleVoiceAttachmentRemove(attachment.id)
                                  : component.handleAttachmentRemove(attachment.id)}
                            >
                              <img src=${closeFileCardIconUrl} alt="" aria-hidden="true" />
                            </button>
                          </div>
                        `,
                  )}
                </div>
              `
            : null}
          ${component.hasVoiceAttachment && !component.speechRecognitionAvailable
            ? html`
                <p class="voice-transcript voice-transcript--unavailable">
                  A transcrição não foi possível pois a ferramenta não está disponível no seu navegador
                </p>
              `
            : null}
          ${component.attachmentError
            ? html`<p class="attachment-error">${component.attachmentError}</p>`
            : null}
          <input
            class="file-input"
            type="file"
            accept=${component.filePickerAccept}
            multiple
            ?disabled=${component.isFilePickerDisabled}
            @change=${(event: Event) => component.handleFileInputChange(event)}
          />
          <div class="input-row">
            <button
              class="input-button input-button--file"
              type="button"
              aria-label="Anexar arquivos"
              @click=${() => component.handleFilePickerClick()}
              ?disabled=${component.isFilePickerDisabled}
            >
              <img src=${plusFileSelectionUrl} alt="" aria-hidden="true" />
            </button>
            ${component.isRecording
              ? html`<span class="voice-recording-label">Ouvindo...</span>`
              : component.hasVoiceAttachment
                ? html`
                    <div
                      class=${classMap({
                        'voice-input-locked': true,
                        'voice-input-locked--error': !component.voiceTranscript,
                      })}
                      aria-live="polite"
                    >
                      ${component.voiceTranscript
                        ? html`${component.voiceTranscript}`
                        : component.speechRecognitionAvailable
                          ? html`Não foi possível gerar a transcrição desta mensagem.`
                          : html`
                              A transcrição não foi possível pois a ferramenta não está disponível no seu navegador
                            `}
                    </div>
                  `
                : html`
                    <input
                      type="text"
                      placeholder=${component.placeholder}
                      .value=${component.message}
                      @input=${(event: InputEvent) => {
                        component.message = (event.target as HTMLInputElement).value;
                      }}
                      ?disabled=${component.isTextInputDisabled}
                    />
                  `}
            ${component.isRecording
              ? html`
                  <div class="voice-recording-actions">
                    <button
                      class="input-button input-button--voice-action"
                      type="button"
                      aria-label="Cancelar gravação"
                      @click=${() => component.handleVoiceCancelClick()}
                    >
                      <img src=${cancelVoiceIconUrl} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="input-button input-button--voice-action"
                      type="button"
                      aria-label="Confirmar gravação"
                      @click=${() => component.handleVoiceConfirmClick()}
                    >
                      <img src=${confirmVoiceIconUrl} alt="" aria-hidden="true" />
                    </button>
                  </div>
                `
              : null}
            <button
              class="input-button input-button--voice"
              type="button"
              aria-label="Gravar mensagem de voz"
              @click=${() => component.handleVoiceButtonClick()}
              ?disabled=${component.isVoiceButtonDisabled}
            >
              <img src=${voiceRecoverIconUrl} alt="" aria-hidden="true" />
            </button>
            <button
              class="input-button submit-button"
              type="submit"
              aria-label="Enviar mensagem"
              ?disabled=${component.isLoading || component.isRecording}
            >
              <img src=${arrowButtonUrl} alt="" aria-hidden="true" />
            </button>
          </div>
        </form>

        <p class="footnote">
          IA pode cometer erros. Por isso lembre-se de conferir informações importantes.
        </p>
      </div>
    </div>
  `;
};

export const renderMiniPanel = (component: RioAssistWidget) => {
  const chatSurface = renderChatSurface(component);

  return html`
    <aside class=${classMap({ panel: true, open: component.open })} role="dialog">
      <header class="panel-header">
        <div class="panel-header__top">
          <span class="panel-title">${component.titleText}</span>
          <button
            class="close-button"
            @click=${() => component.handleCloseAction()}
            aria-label="Fechar UptAIme Assist"
          >
            <img src=${closeIconUrl} alt="" aria-hidden="true" />
          </button>
        </div>
        <div class="panel-header__actions">
          <button
            class="conversations-button"
            type="button"
            @click=${() => component.toggleConversationsPanel()}
          >
            <img src=${hamburgerIconUrl} alt="" aria-hidden="true" />
            Minhas Conversas
          </button>
          <div class="panel-header__icons">
            <button
              type="button"
              class="short-answer-toggle short-answer-toggle--header"
              role="switch"
              aria-checked=${component.shortAnswerEnabled}
              @click=${() => component.toggleShortAnswers()}
            >
              <span
                class=${classMap({
                  'short-answer-toggle__track': true,
                  'short-answer-toggle__track--on': component.shortAnswerEnabled,
                })}
                aria-hidden="true"
              >
                <span class="short-answer-toggle__thumb"></span>
              </span>
              <span class="short-answer-toggle__label">Respostas rápidas</span>
            </button>

            ${component.hasActiveConversation
              ? html`
                  <button
                    class="panel-header__icon-button conversations-plus-button"
                    type="button"
                    aria-label="Nova conversa"
                    @click=${() => component.handleCreateConversation()}
                  >
                    <img src=${plusFileSelectionUrl} alt="" aria-hidden="true" />
                  </button>
                `
              : null}
            <button
              class="panel-header__icon-button"
              type="button"
              aria-label="Expandir painel"
              @click=${() => component.enterFullscreen()}
            >
              <img src=${expandIconUrl} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      ${chatSurface}

      ${renderConversationsPanel(component, { variant: 'drawer' })}
    </aside>
  `;
};

