import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import type { RioAssistWidget } from '../rio-assist/rio-assist';

const buttonIconUrl = new URL('../../assets/icons/iaButtonIcon.png', import.meta.url).href;
const buttonLabelUrl = new URL('../../assets/icons/buttonLabel.png', import.meta.url).href;
const boxBackgroundUrl = new URL('../../assets/icons/boxBackground.png', import.meta.url).href;

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
    <img
      class="floating-button__box-bg"
      src=${boxBackgroundUrl}
      alt=""
      aria-hidden="true"
    />
    <span class="floating-button__content">
      <img class="floating-button__icon" src=${buttonIconUrl} alt="" aria-hidden="true" />
      <img
        class="floating-button__label-image"
        src=${buttonLabelUrl}
        alt=${component.buttonLabel}
      />
    </span>
  </button>
`;
