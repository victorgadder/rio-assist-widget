import { css } from 'lit';

export const messageActionsStyles = css`
  .message__actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 32px;
  }

  .message__action-button {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: none;
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .message__action-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .message__action-button--liked {
    background: #1b8dd9;
    animation: action-pop 0.2s ease;
  }

  .message__action-button--unliked {
    background: #d64b4b;
    animation: action-pop 0.2s ease;
  }

  .message__action-button--copied {
    background: #1aa1a8;
    animation: action-pop 0.2s ease;
  }

  .message__action-button--liked img,
  .message__action-button--unliked img,
  .message__action-button--copied img {
    filter: brightness(0) invert(1);
  }

  .message__action-button img {
    width: 32px;
    height: 32px;
  }

  .message__copy-feedback {
    font-size: 12px;
    color: #1aa1a8;
    font-weight: 600;
    margin-left: 6px;
  }

  @keyframes action-pop {
    0% {
      transform: scale(0.92);
    }
    70% {
      transform: scale(1.06);
    }
    100% {
      transform: scale(1);
    }
  }
`;
