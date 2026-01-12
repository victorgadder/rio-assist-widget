import { css } from 'lit';

export const floatingButtonStyles = css`
  .floating-button {
    position: absolute;
    pointer-events: auto;
    right: 0;
    bottom: 32px;
    width: 64px;
    height: 64px;
    padding: 0;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0;
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
    overflow: hidden;
    transition: width 180ms ease, box-shadow 180ms ease;
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
    max-width: 0;
    display: block;
    object-fit: contain;
    opacity: 0;
    transform: translateX(-6px);
    transition: opacity 160ms ease, transform 160ms ease;
  }

  .floating-button:hover {
    width: 200px;
    padding: 0 26px 0 10px;
    justify-content: flex-start;
    gap: 8px;
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.3);
  }

  .floating-button:hover .floating-button__label-image {
    max-width: 200px;
    opacity: 1;
    transform: translateX(0);
  }

  .floating-button:active {
    cursor: grabbing;
  }

  .canvas--fullscreen .floating-button {
    opacity: 0;
    pointer-events: none;
  }
`;
