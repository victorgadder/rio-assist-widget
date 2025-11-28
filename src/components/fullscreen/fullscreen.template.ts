import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { RioAssistWidget } from '../rio-assist/rio-assist';
import { renderConversationsPanel } from '../conversations-panel/conversations-panel.template';
import { renderChatSurface } from '../mini-panel/mini-panel.template';

const homeIconUrl = new URL('../../assets/icons/homeIcon.png', import.meta.url).href;
const checkFrameIconUrl = new URL('../../assets/icons/checkFrame.png', import.meta.url).href;
const infoFrameIconUrl = new URL('../../assets/icons/infoFrame.png', import.meta.url).href;
const profileFrameIconUrl = new URL('../../assets/icons/profileFrame.png', import.meta.url).href;

export const renderFullscreen = (component: RioAssistWidget) => {
  const chatSurface = renderChatSurface(component);

  return html`
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
            <div class="fullscreen-header__brand-row">
              <span class="fullscreen-header__brand">RIO INSIGHT</span>
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
};
