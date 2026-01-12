import { css } from 'lit';

export const floatingButtonStyles = css`
  .floating-button {
    position: absolute;
    pointer-events: auto;
    right: 0;
    bottom: 32px;
    width: 200px;
    height: 64px;
    padding: 0 26px 0 10px;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.2px;
    border-radius: 32px 0 0 32px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    cursor: grab;
    user-select: none;
    touch-action: none;
  }

  .floating-button img {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: block;
  }

  .floating-button .floating-button__label-image {
    height: 36px;
    width: auto;
    display: block;
    object-fit: contain;
  }

  .floating-button:hover {
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.3);
  }

  .floating-button:active {
    cursor: grabbing;
  }

  .canvas--fullscreen .floating-button {
    opacity: 0;
    pointer-events: none;
  }
`;
