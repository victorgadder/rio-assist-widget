import { css } from 'lit';

export const miniPanelStyles = css`
  .canvas {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .panel {
    --header-height: 115px;
    pointer-events: auto;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(600px, 100vw);
    max-width: 90vw;
    background: #fff;
    box-shadow: -24px 0 48px rgba(0, 0, 0, 0.15);
    transform: translateX(100%);
    transition: transform 0.35s ease;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .panel.open {
    transform: translateX(0);
  }

  .panel-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px 8px 15px 28px;
    border-bottom: 1px solid #e4eaee;
  }

  .panel-header__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .panel-title {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    color: #1c2a33;
    padding-left: 0px;
  }

  .panel-header__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .conversations-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    padding-left: 0px;
    border: none;
    background: transparent;
    color: #008b9a;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  .conversations-button img {
    width: 24px;
    height: 24px;
  }

  .panel-header__icons {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    padding-right: 12px;
  }

  .panel-header__icon-button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: grid;
    place-items: center;
  }

  .conversations-plus-button {
    margin-right: 4px;
  }

  .panel-header__icon-button img {
    width: 28px;
    height: 28px;
  }

  .panel-body {
    flex: 1;
    padding: 48px 32px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
    min-height: 0;
    overflow: hidden;
  }

  .panel-content {
    flex: 1;
    width: 100%;
    overflow-y: auto;
  }

  .panel-content--empty {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-card {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    color: #25323d;
    text-align: center;
    width: 100%;
    max-width: 360px;
    min-height: 280px;
  }

  .hero-card__icon {
    width: 120px;
    height: 120px;
    display: block;
    margin-bottom: 8px;
  }

  .hero-card h3 {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1;
    white-space: nowrap;
    color: #2a3740;
    margin: 0;
  }

  .conversation {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .message {
    border-radius: 16px;
    border: 1px solid #e4eaee;
    padding: 10px 16px;
    max-width: 90%;
    background: #fff;
    color: #1f2f36;
    font-size: 15px;
  }

  .message__content {
    line-height: 1.35;
  }

  .message__content p,
  .message__content ul,
  .message__content ol {
    margin: 4px 0;
  }

  .message__content pre {
    background: #0d161b;
    color: #f3f7fb;
    border-radius: 8px;
    padding: 10px;
    overflow-x: auto;
    margin: 6px 0;
    font-size: 14px;
  }

  .message__content code {
    background: #f1f4f7;
    padding: 2px 6px;
    border-radius: 6px;
  }

  .message__content blockquote {
    border-left: 3px solid #cfd6dc;
    margin: 6px 0;
    padding-left: 10px;
    color: #4b5a65;
  }

  .message__content ul,
  .message__content ol {
    padding-left: 20px;
  }

  .message--user {
    align-self: flex-end;
    background: #e5ebf0;
    border-color: #cfd6dc;
    color: #1f2f36;
    padding: 8px 10px;
  }

  .message time {
    display: block;
    font-size: 11px;
    color: #8a98a4;
    text-align: right;
  }

  .typing {
    font-style: italic;
    opacity: 0.75;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .typing::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid var(--accent-color, #008B9A);
    border-radius: 50%;
    border-top-color: transparent;
    animation: typing-spin 0.8s linear infinite;
  }

  @keyframes typing-spin {
    to {
      transform: rotate(360deg);
    }
  }

  .typing__dots {
    display: inline-flex;
    gap: 2px;
    margin-left: 4px;
  }

  .typing__dots span {
    display: inline-block;
    animation: typing-bounce 1.2s infinite;
  }

  .typing__dots span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing__dots span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes typing-bounce {
    0%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 0.25;
    }
    40% {
      transform: translateY(-4px);
      opacity: 1;
    }
  }

  .message--user time {
    margin-top: 3px;
  }

  .panel-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-top: 8px;
    margin-top: auto;
  }

  .suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .suggestions-wrapper {
    width: 100%;
    text-align: center;
    margin-bottom: 6px;
  }

  .short-answer-toggle {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: none;
    background: transparent;
    color: #1f2f36;
    border-radius: 999px;
    padding: 8px 12px 8px 10px;
    font-weight: 600;
    box-shadow: none;
    transition: color 0.2s ease;
  }

  .short-answer-toggle:focus-visible {
    outline: 2px solid var(--accent-color, #008b9a);
    outline-offset: 2px;
  }

  .short-answer-toggle__track {
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background: #c7d0d9;
    position: relative;
    transition: background-color 0.2s ease;
  }

  .short-answer-toggle__track--on {
    background: #008b9a;
  }

  .short-answer-toggle__thumb {
    position: absolute;
    top: 3px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease;
  }

  .short-answer-toggle__track--on .short-answer-toggle__thumb {
    transform: translateX(18px);
  }

  .short-answer-toggle__label {
    font-size: 14px;
    white-space: nowrap;
  }

  .short-answer-toggle--header {
    padding: 6px 10px 6px 8px;
    font-size: 13px;
  }

  .suggestions-label {
    text-align: center;
    font-size: 14px;
    color: #a7afbb;
    margin-bottom: 12px;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0;
  }

  .suggestion {
    border-radius: 999px;
    border: 1px solid #d6e2e6;
    padding: 0 16px;
    background: #fff;
    font-size: 14px;
    line-height: 24px;
    min-height: 24px;
    color: #a7afbb;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    white-space: nowrap;
  }

  form {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #a4afbb;
    border-radius: 80px;
    padding: 8px 12px 8px 16px;
    background: #fff;
    width: 100%;
    max-width: 520px;
    margin-bottom: 0;
    height: 56px;
    box-sizing: border-box;
  }

  form input {
    border: none;
    flex: 1;
    font: inherit;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
  }

  form input::placeholder {
    font-style: italic;
    font-size: 16px;
    color: #a7afbb;
  }

  .input-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .input-button img {
    width: 40px;
    height: 40px;
  }

  .input-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .footnote {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 12px;
    color: #8a98a4;
    text-align: center;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  .error-banner {
    width: 100%;
    padding: 10px 14px;
    border-radius: 12px;
    background: #fff4f2;
    color: #a33c3c;
    font-size: 13px;
    text-align: center;
  }

  .close-button {
    background: transparent;
    border: none;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    padding: 0;
  }

  .close-button img {
    width: 16px;
    height: 16px;
  }
`;
