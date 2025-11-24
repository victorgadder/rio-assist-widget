import { css } from 'lit';
import { floatingButtonStyles } from '../floating-button/floating-button.styles';
import { miniPanelStyles } from '../mini-panel/mini-panel.styles';
import { fullscreenStyles } from '../fullscreen/fullscreen.styles';
import { conversationsPanelStyles } from '../conversations-panel/conversations-panel.styles';

const baseStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');

  :host {
    position: fixed;
    inset: 0;
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: #1c2a33;
    z-index: 2147483000;
  }

  button {
    font: inherit;
    border: none;
    cursor: pointer;
    border-radius: 999px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
`;

export const widgetStyles = [
  baseStyles,
  floatingButtonStyles,
  miniPanelStyles,
  fullscreenStyles,
  conversationsPanelStyles,
];
