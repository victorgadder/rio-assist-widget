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

  .panel-content--consultant {
    display: block;
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

  .consultant-agent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
  }

  .consultant-agent__button,
  .consultant-agent__option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 8px 16px;
    min-height: 34px;
    border: 1px solid #30b4c0;
    border-radius: 4px;
    background: transparent;
    color: #30b4c0;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    white-space: normal;
    text-align: left;
    word-break: break-word;
    max-width: 100%;
    box-sizing: border-box;
  }

  .consultant-agent__button:focus-visible,
  .consultant-agent__option:focus-visible {
    outline: 2px solid #30b4c0;
    outline-offset: 2px;
  }

  .consultant-agent__intro {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #2a3740;
    text-align: center;
    margin-top: 4px;
  }

  .consultant-agent__options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: flex-start;
  }

  .consultant-prompt {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: flex-start;
  }

  .consultant-prompt__text {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #2a3740;
    text-align: left;
  }

  .consultant-prompt__options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: flex-start;
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

  .consultant-follow-up {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .consultant-follow-up__text {
    margin: 0;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #1f2f36;
  }

  .consultant-follow-up__options {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    width: 100%;
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

  .message__content pre code {
    background: transparent;
    color: inherit;
    padding: 0;
    border-radius: 0;
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

  .attachments {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-start;
    padding: 0px 6px 2px;
    box-sizing: border-box;
    overflow: visible;
  }

  .attachment-card {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border: 1px solid #d6e2e6;
    border-radius: 12px;
    background: #fff;
    max-width: 100%;
    flex: 0 0 auto;
    position: relative;
  }

  .attachment-card__icon {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: inline-block;
    background-color: #1b8dd9;
    background-image: var(--file-icon);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex-shrink: 0;
  }

  .attachment-card--text .attachment-card__icon {
    background-color: #1b8dd9;
  }

  .attachment-card--sheet .attachment-card__icon {
    background-color: #2e9d63;
  }

  .attachment-card--pdf .attachment-card__icon {
    background-color: #d64b4b;
  }

  .attachment-card--audio .attachment-card__icon {
    background-color: #1aa1a8;
  }

  .attachment-card__meta {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 2px;
  }

  .attachment-card__meta strong {
    font-size: 13px;
    font-weight: 700;
    color: #1f2f36;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .attachment-card__meta span {
    font-size: 11px;
    color: #7b8b97;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .attachment-card__remove {
    width: 19.2px;
    height: 19.2px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    flex-shrink: 0;
    position: absolute;
    top: 2px;
    right: 2px;
  }

  .attachment-card__remove img {
    width: 19.2px;
    height: 19.2px;
  }

  .attachment-thumb {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    flex: 0 0 auto;
    border: 1px solid #d6e2e6;
    background: #fff;
  }

  .attachment-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .attachment-thumb__remove {
    width: 19.2px;
    height: 19.2px;
    border: none;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 2px;
    right: 2px;
  }

  .attachment-thumb__remove img {
    width: 19.2px;
    height: 19.2px;
  }

  .attachment-error {
    margin: 0;
    font-size: 12px;
    color: #d64b4b;
    align-self: flex-start;
  }

  .input-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    width: 100%;
  }

  .voice-recording-label {
    flex: 1;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 18px;
    color: #1f2f36;
  }

  .voice-recording-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  form {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #a4afbb;
    border-radius: 28px;
    padding: 8px 8px 8px 16px;
    background: #fff;
    width: 100%;
    max-width: 520px;
    margin-bottom: 0;
    min-height: 56px;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
  }

  .input-shell--has-attachments {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    height: auto;
    border-radius: 28px;
    padding: 12px;
  }

  .input-shell--has-attachments .input-row {
    padding: 0 4px 2px;
  }

  .file-input {
    display: none;
  }

  form input,
  form textarea {
    border: none;
    flex: 1;
    font: inherit;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
  }

  form textarea {
    resize: none;
    background: transparent;
    line-height: 1.35;
    overflow-y: hidden;
    min-height: 22px;
    max-height: 280px;
    padding: 0px 0;
  }

  form input::placeholder,
  form textarea::placeholder {
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

  .input-button--file img {
    width: 32px;
    height: 32px;
  }

  .input-button--voice img {
    width: 32px;
    height: 32px;
  }

  .input-button--voice-action img {
    width: 32px;
    height: 32px;
  }

  .input-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .voice-transcript {
    margin: 0;
    padding: 0 6px;
    font-size: 14px;
    color: #1f2f36;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
  }

  .voice-transcript--unavailable {
    color: #8a98a4;
    font-style: italic;
  }

  .voice-input-locked {
    flex: 1;
    min-height: 22px;
    font-size: 14px;
    color: #1f2f36;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-style: italic;
    padding: 2px 0;
  }

  .voice-input-locked--error {
    color: #d64b4b;
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
