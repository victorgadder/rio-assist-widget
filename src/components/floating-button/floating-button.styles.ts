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
    visibility: visible;
    transition: width 180ms ease, box-shadow 180ms ease, opacity 0ms linear 350ms,
      visibility 0ms linear 350ms;
  }

  .floating-button__content {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0;
  }

  .floating-button__icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: block;
  }

  .floating-button__box-bg {
    position: absolute;
    top: 50%;
    left: 57px;
    width: 76px;
    height: 76px;
    object-fit: contain;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-50%) translateX(-6px);
    transition: opacity 160ms ease, transform 160ms ease;
    z-index: 1;
  }

  .floating-button .floating-button__label-image {
    height: 28px;
    width: auto;
    max-width: 0;
    display: block;
    object-fit: contain;
    pointer-events: none;
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

  .floating-button:hover .floating-button__content {
    gap: 8px;
  }

  .floating-button:hover .floating-button__box-bg {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
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

  .canvas--open .floating-button {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transition-delay: 0s;
  }
`;
