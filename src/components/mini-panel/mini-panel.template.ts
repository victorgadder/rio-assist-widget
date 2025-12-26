import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';
import type { RioAssistWidget } from '../rio-assist/rio-assist';
import { renderConversationsPanel } from '../conversations-panel/conversations-panel.template';
import { renderConsultantAgentHero } from '../../consultant-agent/consultant-agent.template';

const hamburgerIconUrl = new URL('../../assets/icons/hamburgerMenuIcon.png', import.meta.url).href;
const expandIconUrl = new URL('../../assets/icons/expandScreen.png', import.meta.url).href;
const iaCentralIconUrl = new URL('../../assets/icons/iaCentralIcon.png', import.meta.url).href;
const plusFileSelectionUrl = new URL('../../assets/icons/plusFileSelection.png', import.meta.url).href;
const closeIconUrl = new URL('../../assets/icons/closeIcon.png', import.meta.url).href;
const arrowButtonUrl = new URL('../../assets/icons/arrowButton.png', import.meta.url).href;

const renderConsultantFollowUp = (
  component: RioAssistWidget,
  payload: {
    id: string;
    topicLabel: string;
    questions: string[];
  },
) => {
  const buttonsVisible = component.activeConsultantFollowUpId === payload.id;

  return html`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">
        Certo! Reuni abaixo as principais dúvidas sobre ${payload.topicLabel}. Escolha uma delas ou
        faça sua pergunta.
      </p>
      ${buttonsVisible
        ? html`
            <div class="consultant-follow-up__options">
              ${payload.questions.map(
                (question) => html`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${() => component.handleConsultantFollowUpQuestion(question)}
                  >
                    ${question}
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
                : unsafeHTML(message.html ?? message.text)}
            </div>
            <time>
              ${new Date(message.timestamp).toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
              })}
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
        >
          <input
            type="text"
            placeholder=${component.placeholder}
            .value=${component.message}
            @input=${(event: InputEvent) => {
              component.message = (event.target as HTMLInputElement).value;
            }}
            ?disabled=${component.isLoading}
          />
          <button
            class="input-button submit-button"
            type="submit"
            aria-label="Enviar mensagem"
            ?disabled=${component.isLoading}
          >
            <img src=${arrowButtonUrl} alt="" aria-hidden="true" />
          </button>
        </form>

        <p class="footnote">
          IA pode cometer erros. Por isso lembre-se de conferir informacoes importantes.
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
            aria-label="Fechar Rio Insight"
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
