import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import type { RioAssistWidget } from '../rio-assist/rio-assist';

const buttonIconUrl = new URL('../../assets/icons/iaButtonIcon.png', import.meta.url).href;

export const renderFloatingButton = (component: RioAssistWidget) => html`
  <button
    class="floating-button"
    style=${styleMap({
      background: component.accentColor,
      bottom: `${component.floatingButtonOffset}px`,
    })}
    @click=${(event: Event) => component.handleFloatingButtonClick(event)}
    @pointerdown=${(event: PointerEvent) => component.handleFloatingButtonPointerDown(event)}
    @pointermove=${(event: PointerEvent) => component.handleFloatingButtonPointerMove(event)}
    @pointerup=${(event: PointerEvent) => component.handleFloatingButtonPointerUp(event)}
    @pointercancel=${(event: PointerEvent) => component.handleFloatingButtonPointerCancel(event)}
    aria-expanded=${component.open}
  >
    <img src=${buttonIconUrl} alt="" aria-hidden="true" />
    <span>${component.buttonLabel}</span>
  </button>
`;
