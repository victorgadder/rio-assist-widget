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
    </div>
  `;
};
