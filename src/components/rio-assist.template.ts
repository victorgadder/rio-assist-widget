import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { RioAssistWidget } from './rio-assist';
import { renderConversationsPanel } from './conversations-panel.template';

const buttonIconUrl = new URL('../assets/icons/iaButtonIcon.png', import.meta.url).href;
const hamburgerIconUrl = new URL('../assets/icons/hamburgerMenuIcon.png', import.meta.url).href;
const expandIconUrl = new URL('../assets/icons/expandScreen.png', import.meta.url).href;
const iaCentralIconUrl = new URL('../assets/icons/iaCentralIcon.png', import.meta.url).href;
const plusFileSelectionUrl = new URL('../assets/icons/plusFileSelection.png', import.meta.url).href;
const checkFrameIconUrl = new URL('../assets/icons/checkFrame.png', import.meta.url).href;
const infoFrameIconUrl = new URL('../assets/icons/infoFrame.png', import.meta.url).href;
const profileFrameIconUrl = new URL('../assets/icons/profileFrame.png', import.meta.url).href;
const homeIconUrl = new URL('../assets/icons/homeIcon.png', import.meta.url).href;

export const renderRioAssist = (component: RioAssistWidget) => {
  const hasMessages = component.messages.length > 0;

  const heroCard = html`
    <div class="hero-card">
      <img src=${iaCentralIconUrl} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
    </div>
  `;

  const conversation = html`
    <div class="conversation">
      ${component.messages.map(
        (message) => html`
          <div
            class=${classMap({
              message: true,
              'message--user': message.role === 'user',
              'message--assistant': message.role === 'assistant',
            })}
          >
            <p>${message.text}</p>
            <time>
              ${new Date(message.timestamp).toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
          </div>
        `,
      )}
      ${component.isLoading
        ? html`
            <div class="message message--assistant typing">
              <span>IA está respondendo...</span>
            </div>
          `
        : null}
    </div>
  `;

  const chatSurface = html`
    <div class="panel-body">
      <div
        class=${classMap({
          'panel-content': true,
          'panel-content--empty': !hasMessages,
        })}
      >
        ${hasMessages ? conversation : heroCard}
      </div>

      ${component.errorMessage
        ? html`<p class="error-banner">${component.errorMessage}</p>`
        : null}

      <div class="panel-footer">
        ${component.suggestions.length > 0
          ? html`
              <div class="suggestions-wrapper">
                <p class="suggestions-label">Sugestoes de perguntas:</p>
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
        </form>

        <p class="footnote">
          IA pode cometer erros. Por isso lembre-se de conferir informacoes importantes.
        </p>
      </div>
    </div>
  `;

  const canvasClasses = classMap({
    canvas: true,
    'canvas--fullscreen': component.isFullscreen,
  });

  return html`
    <div class=${canvasClasses}>
      <button
        class="floating-button"
        style="background:${component.accentColor}"
        @click=${() => component.togglePanel()}
        aria-expanded=${component.open}
      >
        <img src=${buttonIconUrl} alt="" aria-hidden="true" />
        <span>${component.buttonLabel}</span>
      </button>

      <aside class=${classMap({ panel: true, open: component.open })} role="dialog">
        <header class="panel-header">
          <div class="panel-header__top">
            <span class="panel-title">${component.titleText}</span>
            <button
              class="close-button"
              @click=${() => component.handleCloseAction()}
              aria-label="Fechar RIO Assist"
            >
              ×
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
              ${component.showConversations
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

      ${component.isFullscreen ? renderFullscreen(component, chatSurface) : null}
    </div>
  `;
};

const renderFullscreen = (component: RioAssistWidget, chatSurface: ReturnType<typeof html>) => html`
  <section class="fullscreen-shell" role="dialog" aria-modal="true">
    <div class="fullscreen-shell__rail">
      <button type="button" class="rail-button" aria-label="Ir para home">
        <img src=${homeIconUrl} alt="" aria-hidden="true" />
      </button>
      <button
        type="button"
        class="rail-button rail-button--close"
        aria-label="Fechar tela cheia"
        @click=${() => component.exitFullscreen(true)}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M10.5 3l-5 5 5 5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="fullscreen-shell__content">
      <header class="fullscreen-header">
        <div class="fullscreen-header__title">
          <span class="fullscreen-header__brand">RIO ASSIST</span>
        </div>

        <div class="fullscreen-header__tabs">
          <span class="fullscreen-header__tab">CONVERSA</span>
        </div>

        <div class="fullscreen-header__actions">
          <button type="button" class="fullscreen-header__icon" aria-label="Status">
            <img src=${checkFrameIconUrl} alt="" aria-hidden="true" />
          </button>
          <button type="button" class="fullscreen-header__icon" aria-label="Informacoes">
            <img src=${infoFrameIconUrl} alt="" aria-hidden="true" />
          </button>
          <button type="button" class="fullscreen-header__icon" aria-label="Perfil de usuario">
            <img src=${profileFrameIconUrl} alt="" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div class="fullscreen-grid">
        ${renderConversationsPanel(component, { variant: 'sidebar' })}
        <div class="fullscreen-chat">
          ${chatSurface}
        </div>
      </div>
    </div>
  </section>
`;

