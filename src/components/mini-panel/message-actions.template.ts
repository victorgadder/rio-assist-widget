import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { RioAssistWidget, ChatMessage } from '../rio-assist/rio-assist';

const likeIconUrl = new URL('../../assets/icons/like.png', import.meta.url).href;
const unlikeIconUrl = new URL('../../assets/icons/unlike.png', import.meta.url).href;
const updateIconUrl = new URL('../../assets/icons/update.png', import.meta.url).href;
const shareIconUrl = new URL('../../assets/icons/share.png', import.meta.url).href;
const copyIconUrl = new URL('../../assets/icons/copyText.png', import.meta.url).href;
const lineThreeDotsIconUrl = new URL('../../assets/icons/lineThreeDots.png', import.meta.url).href;

// Temporary feature toggle: keep actions implemented but hidden until backend is ready.
const MESSAGE_ACTIONS_VISIBLE = false;

export const renderMessageActions = (
  component: RioAssistWidget,
  message: ChatMessage,
) => {
  if (message.role !== 'assistant' || !MESSAGE_ACTIONS_VISIBLE) {
    return null;
  }

  return html`
    <div class="message__actions" aria-label="Ações da resposta">
      <button
        class=${classMap({
          'message__action-button': true,
          'message__action-button--liked': component.messageReactions[message.id] === 'like',
        })}
        type="button"
        aria-label="Curtir"
        aria-pressed=${component.messageReactions[message.id] === 'like'}
        @click=${() => component.handleToggleReaction('like', message)}
      >
        <img src=${likeIconUrl} alt="" aria-hidden="true" />
      </button>
      <button
        class=${classMap({
          'message__action-button': true,
          'message__action-button--unliked': component.messageReactions[message.id] === 'unlike',
        })}
        type="button"
        aria-label="Não curtir"
        aria-pressed=${component.messageReactions[message.id] === 'unlike'}
        @click=${() => component.handleToggleReaction('unlike', message)}
      >
        <img src=${unlikeIconUrl} alt="" aria-hidden="true" />
      </button>
      <button
        class="message__action-button"
        type="button"
        aria-label="Atualizar"
        ?disabled=${component.isLoading || !message.responseTo}
        @click=${() => component.handleUpdateResponse(message)}
      >
        <img src=${updateIconUrl} alt="" aria-hidden="true" />
      </button>
      <button
        class="message__action-button"
        type="button"
        aria-label="Compartilhar"
        @click=${() => component.handleMessageAction('share', message)}
      >
        <img src=${shareIconUrl} alt="" aria-hidden="true" />
      </button>
      <button
        class=${classMap({
          'message__action-button': true,
          'message__action-button--copied': component.copiedMessageId === message.id,
        })}
        type="button"
        aria-label="Copiar"
        @click=${() => component.handleCopyMessage(message)}
      >
        <img src=${copyIconUrl} alt="" aria-hidden="true" />
      </button>
      <button
        class="message__action-button"
        type="button"
        aria-label="Mais opções"
        @click=${() => component.handleMessageAction('more', message)}
      >
        <img src=${lineThreeDotsIconUrl} alt="" aria-hidden="true" />
      </button>
      ${component.copiedMessageId === message.id
        ? html`<span class="message__copy-feedback" role="status">Copiado!</span>`
        : null}
    </div>
  `;
};
