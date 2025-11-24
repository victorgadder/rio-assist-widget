import { html } from 'lit';
import type { RioAssistWidget } from '../rio-assist/rio-assist';

const buttonIconUrl = new URL('../../assets/icons/iaButtonIcon.png', import.meta.url).href;

export const renderFloatingButton = (component: RioAssistWidget) => html`
  <button
    class="floating-button"
    style="background:${component.accentColor}"
    @click=${() => component.togglePanel()}
    aria-expanded=${component.open}
  >
    <img src=${buttonIconUrl} alt="" aria-hidden="true" />
    <span>${component.buttonLabel}</span>
  </button>
`;
