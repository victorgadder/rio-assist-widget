import { html } from 'lit';
import type { RioAssistWidget } from './rio-assist';
import { classMap } from 'lit/directives/class-map.js';

const threePointsIconUrl = new URL('../assets/icons/threePoints.png', import.meta.url).href;
const editIconUrl = new URL('../assets/icons/edit.png', import.meta.url).href;
const trashIconUrl = new URL('../assets/icons/trash.png', import.meta.url).href;
const searchIconUrl = new URL('../assets/icons/searchIcon.png', import.meta.url).href;

export const renderConversationsPanel = (component: RioAssistWidget) => html`
  <div
    class=${classMap({
      'conversations-panel': true,
      'conversations-panel--open': component.showConversations,
    })}
    aria-hidden=${!component.showConversations}
    @pointerdown=${(event: PointerEvent) =>
      component.handleConversationsPanelPointer(event)}
  >
    <div class="conversations-panel__surface">
      <div class="conversation-search">
        <img class="search-icon" src=${searchIconUrl} alt="" aria-hidden="true" />
        <input
          type="text"
          placeholder="Buscar nas conversas"
          .value=${component.conversationSearch}
          @input=${(event: InputEvent) => component.handleConversationSearch(event)}
        />
      </div>

      <div class="conversation-list">
        ${component.filteredConversations.map(
          (conversation) => {
            const menuOpen = component.conversationMenuId === conversation.id;

            return html`
            <div class="conversation-item">
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
                      <button
                        type="button"
                        @click=${() =>
                          component.handleConversationAction('rename', conversation.id)}
                      >
                        <img src=${editIconUrl} alt="" aria-hidden="true" />
                        Renomear
                      </button>
                      <button
                        type="button"
                        @click=${() =>
                          component.handleConversationAction('delete', conversation.id)}
                      >
                        <img src=${trashIconUrl} alt="" aria_hidden="true" />
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
    </div>
  </div>
`;
