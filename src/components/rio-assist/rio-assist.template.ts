import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { RioAssistWidget } from './rio-assist';
import { renderFloatingButton } from '../floating-button/floating-button.template';
import { renderMiniPanel } from '../mini-panel/mini-panel.template';
import { renderFullscreen } from '../fullscreen/fullscreen.template';

export const renderRioAssist = (component: RioAssistWidget) => {
  const canvasClasses = classMap({
    canvas: true,
    'canvas--fullscreen': component.isFullscreen,
  });

  return html`
    <div class=${canvasClasses}>
      ${renderFloatingButton(component)}
      ${renderMiniPanel(component)}
      ${component.isFullscreen ? renderFullscreen(component) : null}
      ${component.renameConversationTarget
        ? html`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Digite o novo título para a conversa:</p>
                <input
                  class="dialog__input"
                  type="text"
                  .value=${component.renameConversationTarget.draft}
                  @input=${(event: InputEvent) => component.handleRenameDraft(event)}
                  aria-label="Novo titulo da conversa"
                />
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${() =>
                    component.cancelRenameConversation()}>
                    Cancelar
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${() => component.confirmRenameConversation()}
                  >
                    Renomear
                  </button>
                </div>
              </div>
            </div>
          `
        : null}
      ${component.deleteConversationTarget
        ? html`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Deseja realmente excluir essa conversa?</p>
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${() =>
                    component.cancelDeleteConversation()}>
                    Cancelar
                  </button>
                  <button type="button" class="dialog__button dialog__button--danger" @click=${() =>
                    component.confirmDeleteConversation()}>
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          `
        : null}
      ${component.conversationActionError
        ? html`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message dialog__message--title">
                  Erro ao
                  ${component.conversationActionError.action === 'delete'
                    ? 'excluir'
                    : 'renomear'}
                  conversa:
                </p>
                <p class="dialog__message">
                  O agente retornou o seguinte erro ao tentar
                  ${component.conversationActionError.action === 'delete' ? 'excluir' : 'renomear'}
                  a conversa:
                </p>
                <p class="dialog__message dialog__message--error">
                  ${component.conversationActionError.message}
                </p>
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${() =>
                    component.cancelConversationActionError()}>
                    Cancelar ação
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${() => component.retryConversationAction()}
                  >
                    Tentar novamente
                  </button>
                </div>
              </div>
            </div>
          `
        : null}
      ${component.newConversationConfirmOpen
        ? html`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message dialog__message--title">
                  DESEJA MESMO INICIAR UMA NOVA CONVERSA?
                </p>
                <p class="dialog__message">
                  Não se preocupe: a conversa atual continuará salva e você poderá acessá-la na
                  listagem de conversas recentes.
                </p>
                <div class="dialog__actions">
                  <button
                    type="button"
                    class="dialog__button dialog__button--ghost"
                    @click=${() => component.cancelCreateConversation()}
                  >
                    CONTINUAR CONVERSA ATUAL
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${() => component.confirmCreateConversation()}
                  >
                    INICIAR NOVA CONVERSA
                  </button>
                </div>
              </div>
            </div>
          `
        : null}
    </div>
  `;
};
