import { html } from 'lit';
import type { RioAssistWidget } from '../components/rio-assist/rio-assist';

export const renderConsultantAgentHero = (component: RioAssistWidget) => {
  const { consultantAgentVisible, consultantAgentIntro, consultantAgentOptions } = component;

  return html`
    <div class="consultant-agent">
      <button
        class="consultant-agent__button"
        type="button"
        @click=${() => component.handleConsultantAgentOpen()}
      >
        Fale com um consultor
      </button>

      ${consultantAgentVisible
        ? html`
            <div class="consultant-agent__intro">${consultantAgentIntro}</div>
            <div class="consultant-agent__options">
              ${consultantAgentOptions.map(
                (option) => html`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${() => component.handleConsultantAgentOption(option)}
                  >
                    ${option.label}
                  </button>
                `,
              )}
            </div>
          `
        : null}
    </div>
  `;
};
