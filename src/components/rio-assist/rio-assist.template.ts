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
    </div>
  `;
};
