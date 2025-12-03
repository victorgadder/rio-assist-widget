import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import type { RioAssistWidget } from '../rio-assist/rio-assist';

const threePointsIconUrl = new URL('../../assets/icons/threePoints.png', import.meta.url).href;
const editIconUrl = new URL('../../assets/icons/edit.png', import.meta.url).href;
const trashIconUrl = new URL('../../assets/icons/trash.png', import.meta.url).href;
const searchIconUrl = new URL('../../assets/icons/searchIcon.png', import.meta.url).href;
const plusFileSelectionUrl = new URL('../../assets/icons/plusFileSelection.png', import.meta.url)
  .href;
const hamburgerBlack = new URL('../../assets/icons/hamburgerBlack.png', import.meta.url).href;

type ConversationsPanelVariant = 'drawer' | 'sidebar';

export const renderConversationsPanel = (
  component: RioAssistWidget,
  options: { variant?: ConversationsPanelVariant } = {},
) => {
  const variant = options.variant ?? 'drawer';
  const isSidebar = variant === 'sidebar';
  const isOpen = isSidebar || component.showConversations;

  return html`
    <div
      class=${classMap({
        'conversations-panel': true,
        'conversations-panel--open': isOpen,
        'conversations-panel--sidebar': isSidebar,
      })}
      aria-hidden=${!isOpen}
      @pointerdown=${(event: PointerEvent) =>
        component.handleConversationsPanelPointer(event)}
    >
      <div
        class=${classMap({
          'conversations-panel__surface': true,
          'conversations-panel__surface--sidebar': isSidebar,
        })}
      >
        ${renderConversationSurface(component, variant)}
      </div>
    </div>
  `;
};

const renderConversationSurface = (
  component: RioAssistWidget,
  variant: ConversationsPanelVariant,
) => {
  const isSidebar = variant === 'sidebar';

  const newConversationCta = isSidebar
    ? html`
        <div
          class=${classMap({
            'new-conversation-cta': true,
            open: component.showNewConversationShortcut,
          })}
        >
          <button
            type="button"
            class="new-conversation-cta__button"
            ?disabled=${!component.hasActiveConversation}
            aria-disabled=${!component.hasActiveConversation}
            @click=${() => component.handleCreateConversation()}
          >
            <img src=${plusFileSelectionUrl} alt="" aria-hidden="true" />
            <span>Iniciar nova conversa</span>
          </button>
        </div>
      `
    : null;

  const list = html`
    <div
      class=${classMap({
        'conversation-list': true,
        'conversation-list--sidebar': isSidebar,
      })}
      @scroll=${isSidebar ? (event: Event) => component.handleConversationListScroll(event) : null}
    >
      ${component.filteredConversations.map(
        (conversation) => {
          const menuOpen = component.conversationMenuId === conversation.id;

          return html`
            <div
              class="conversation-item"
              role="button"
              tabindex="0"
              title=${`Recuperar ${conversation.title}`}
              @click=${() => component.handleConversationSelect(conversation.id)}
              @keydown=${(event: KeyboardEvent) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  component.handleConversationSelect(conversation.id);
                }
              }}
            >
              <div class="conversation-item__text">
                ${conversation.title}
              </div>
              <button
                class="conversation-menu-button"
                type="button"
                @click=${(event: Event) =>
                  component.handleConversationMenuToggle(event, conversation.id)}
              >
                <img src=${threePointsIconUrl} alt="" aria-hidden="true" />
              </button>
              ${menuOpen
                ? html`
                    <div
                      class=${classMap({
                        'conversation-menu': true,
                        'conversation-menu--above':
                          component.conversationMenuPlacement === 'above',
                      })}
                      @click=${(event: Event) => event.stopPropagation()}
                    >
                      ${/* Renomear ocultado enquanto backend nao suporta */ false
                        ? html`
                            <button
                              type="button"
                              @click=${() =>
                                component.handleConversationAction('rename', conversation.id)}
                            >
                              <img src=${editIconUrl} alt="" aria-hidden="true" />
                              Renomear
                            </button>
                          `
                        : null}
                      <button
                        type="button"
                        @click=${() =>
                          component.handleConversationAction('delete', conversation.id)}
                      >
                        <img src=${trashIconUrl} alt="" aria-hidden="true" />
                        Excluir
                      </button>
                    </div>
                  `
                : null}
            </div>
          `;
        },
      )}
    </div>
  `;

  return html`
    ${newConversationCta}

    ${isSidebar
      ? html`
          <button class="recent-conversations-button" type="button" aria-label="Conversas recentes">
            <img src=${hamburgerBlack} alt="" aria-hidden="true" />
            <span>Conversas recentes</span>
          </button>
        `
      : null}

    <div class="conversation-search">
      <img class="search-icon" src=${searchIconUrl} alt="" aria-hidden="true" />
      <input
        type="text"
        placeholder="Buscar nas conversas"
        .value=${component.conversationSearch}
        @input=${(event: InputEvent) => component.handleConversationSearch(event)}
      />
    </div>

    <div
      class=${classMap({
        'conversation-list-wrapper': true,
        'conversation-list-wrapper--sidebar': isSidebar,
      })}
    >
      ${component.conversationHistoryLoading
        ? html`<div class="conversation-loading">Carregando conversas...</div>`
        : null}
      ${component.conversationHistoryError
        ? html`<div class="conversation-error">${component.conversationHistoryError}</div>`
        : null}
      ${list}
      ${isSidebar
        ? html`
            <div
              class=${classMap({
                'conversation-scrollbar': true,
                'conversation-scrollbar--visible':
                  component.conversationScrollbar.visible,
              })}
              @pointerdown=${(event: PointerEvent) =>
                component.handleConversationScrollbarPointerDown(event)}
              @pointermove=${(event: PointerEvent) =>
                component.handleConversationScrollbarPointerMove(event)}
              @pointerup=${(event: PointerEvent) =>
                component.handleConversationScrollbarPointerUp(event)}
              @pointercancel=${(event: PointerEvent) =>
                component.handleConversationScrollbarPointerUp(event)}
            >
              <span
                class="conversation-scrollbar__thumb"
                style=${styleMap({
                  height: `${component.conversationScrollbar.height}%`,
                  top: `${component.conversationScrollbar.top}%`,
                })}
              ></span>
            </div>
          `
        : null}
    </div>
  `;
};
