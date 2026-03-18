import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { RioAssistWidget, ChatMessage } from '../rio-assist/rio-assist';

const updateIconUrl = new URL('../../assets/icons/update.png', import.meta.url).href;
const copyIconUrl = new URL('../../assets/icons/copyText.png', import.meta.url).href;

// Keep only frontend-ready actions visible until backend actions are available.
const MESSAGE_ACTIONS_VISIBLE = true;

export const renderMessageActions = (
  component: RioAssistWidget,
  message: ChatMessage,
) => {
  if (message.role !== 'assistant' || !MESSAGE_ACTIONS_VISIBLE) {
    return null;
  }

  const latestVisibleAssistantMessageId = [...component.messages]
    .reverse()
    .find((entry) => entry.role === 'assistant' && !entry.hidden)?.id;
  const canUpdateMessage = latestVisibleAssistantMessageId === message.id;

  return html`
    <div class="message__actions" aria-label="Ações da resposta">
      ${canUpdateMessage
        ? html`
            <button
              class="message__action-button"
              type="button"
              aria-label="Atualizar"
              title="Atualizar resposta"
              ?disabled=${component.isLoading || !message.responseTo}
              @click=${() => component.handleUpdateResponse(message)}
            >
              <img src=${updateIconUrl} alt="" aria-hidden="true" />
            </button>
          `
        : null}
      <button
        class=${classMap({
          'message__action-button': true,
          'message__action-button--copied': component.copiedMessageId === message.id,
        })}
        type="button"
        aria-label="Copiar"
        title="Copiar mensagem"
        @click=${() => component.handleCopyMessage(message)}
      >
        <img src=${copyIconUrl} alt="" aria-hidden="true" />
      </button>
      ${component.copiedMessageId === message.id
        ? html`<span class="message__copy-feedback" role="status">Copiado!</span>`
        : null}
    </div>
  `;
};
