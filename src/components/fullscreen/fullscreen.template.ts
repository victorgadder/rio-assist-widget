import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { HeaderActionConfig, RioAssistWidget } from '../rio-assist/rio-assist';
import { renderConversationsPanel } from '../conversations-panel/conversations-panel.template';
import { renderChatSurface } from '../mini-panel/mini-panel.template';

const homeIconUrl = new URL('../../assets/icons/homeIcon.png', import.meta.url).href;
const checkFrameIconUrl = new URL('../../assets/icons/checkFrame.png', import.meta.url).href;
const infoFrameIconUrl = new URL('../../assets/icons/infoFrame.png', import.meta.url).href;
const profileFrameIconUrl = new URL('../../assets/icons/profileFrame.png', import.meta.url).href;
const plusFileSelectionUrl = new URL('../../assets/icons/plusFileSelection.png', import.meta.url).href;
const resizeScreenIconUrl = new URL('../../assets/icons/resizeScreen.png', import.meta.url).href;

const defaultHeaderActions: HeaderActionConfig[] = [
  { id: 'status', iconUrl: checkFrameIconUrl, ariaLabel: 'Status' },
  { id: 'info', iconUrl: infoFrameIconUrl, ariaLabel: 'Informacoes' },
  { id: 'profile', iconUrl: profileFrameIconUrl, ariaLabel: 'Perfil de usuario' },
];

export const renderFullscreen = (component: RioAssistWidget) => {
  const chatSurface = renderChatSurface(component);
  const headerActions = (component.headerActions?.length
    ? component.headerActions
    : defaultHeaderActions) as HeaderActionConfig[];

  return html`
    <section class="fullscreen-shell" role="dialog" aria-modal="true">
      <div class="fullscreen-shell__rail">
        <button
          type="button"
          class="rail-button"
          aria-label="Ir para home"
          @click=${() => component.handleHomeNavigation()}
        >
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
            <div class="fullscreen-header__brand-row">
              <span class="fullscreen-header__brand">${component.titleText}</span>
              <button
                type="button"
                class=${classMap({
                  'fullscreen-header__brand-toggle': true,
                  'fullscreen-header__brand-toggle--open':
                    component.showNewConversationShortcut,
                })}
                aria-label="Alternar ações de conversa"
                @click=${() => component.toggleNewConversationShortcut()}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="fullscreen-header__tabs">
            ${component.activeConversationTitle
              ? html`<span class="fullscreen-header__tab">${component.activeConversationTitle}</span>`
              : null}
          </div>

          <div class="fullscreen-header__actions">
            ${headerActions.map(
              (action, index) => html`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label=${action.ariaLabel ?? 'Acao do cabecalho'}
                  @click=${() => component.handleHeaderActionClick(action, index)}
                >
                  <img src=${action.iconUrl} alt="" aria-hidden="true" />
                </button>
              `,
            )}
          </div>
        </header>

        <button
          type="button"
          class="fullscreen-exit-inline"
          aria-label="Retornar para painel compacto"
          @click=${() => component.exitFullscreen(true)}
        >
          <img src=${resizeScreenIconUrl} alt="" aria-hidden="true" />
        </button>

        <div class="fullscreen-utility-bar">
          <button
            type="button"
            class="short-answer-toggle short-answer-toggle--header"
            role="switch"
            aria-checked=${component.quickResponse}
            @click=${() => component.toggleQuickResponse()}
          >
            <span
              class=${classMap({
                'short-answer-toggle__track': true,
                'short-answer-toggle__track--on': component.quickResponse,
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
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label="Iniciar nova conversa"
                  @click=${() => component.handleCreateConversation()}
                >
                  <img src=${plusFileSelectionUrl} alt="" aria-hidden="true" />
                </button>
              `
            : null}
        </div>

        <div class="fullscreen-grid">
          ${renderConversationsPanel(component, { variant: 'sidebar' })}
          <div class="fullscreen-chat">
            ${chatSurface}
          </div>
        </div>
      </div>
    </section>
  `;
};
