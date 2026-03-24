import { css } from 'lit';

export const fullscreenStyles = css`
  .fullscreen-shell {
    position: fixed;
    inset: 0;
    background: #f5f7fa;
    display: flex;
    flex-direction: row;
    pointer-events: auto;
    z-index: 3;
    height: 100vh;
  }

  .fullscreen-shell__rail {
    width: 50px;
    background: #0d1117;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0 12px;
  }

  .fullscreen-shell__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  .rail-button {
    width: 38px;
    height: 38px;
    border: none;
    background: transparent;
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #fff;
    padding: 0;
  }

  .rail-button img {
    width: 22px;
    height: 22px;
  }

  .rail-button svg {
    width: 18px;
    height: 18px;
  }

  .fullscreen-header {
    padding: 0 12px 0 4px;
    display: grid;
    grid-template-columns: 300px 1fr 138px;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #e0e6eb;
    min-height: 64px;
    column-gap: 8px;
  }

  .fullscreen-header__title {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 16px;
    align-self: stretch;
    justify-content: center;
  }

  .fullscreen-header__tabs {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    padding-left: 8px;
  }

  .fullscreen-header__conversation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    min-width: 0;
  }

  .fullscreen-header__brand {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0;
  }

  .fullscreen-header__brand-row {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    justify-content: space-between;
  }

  .fullscreen-header__brand-toggle {
    border: none;
    background: transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #1f2f36;
    transition: transform 0.2s ease, background-color 0.2s ease;
    margin-left: auto;
  }

  .fullscreen-header__brand-toggle--open {
    transform: rotate(180deg);
  }

  .fullscreen-header__brand-toggle svg {
    width: 18px;
    height: 18px;
  }

  .fullscreen-header__tab {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #1f2f36;
    text-transform: uppercase;
    border-bottom: 3px solid #000;
    padding: 0 0 0px;
    display: inline-flex;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    line-height: 1;
    width: fit-content;
  }

  .fullscreen-header__conversation-time {
    display: block;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-size: 11px;
    line-height: 1.2;
    color: #8a98a4;
  }

  .fullscreen-header__actions {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    justify-self: end;
    height: 100%;
    justify-content: flex-end;
    padding-right: 4px;
  }

  .fullscreen-header__icon {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .fullscreen-header__icon img {
    width: 24px;
    height: 24px;
  }

  .fullscreen-exit-inline {
    position: absolute;
    top: 64px;
    right: 14px;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    padding: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    z-index: 1;
  }

  .fullscreen-exit-inline img {
    width: 28px;
    height: 28px;
  }

  .fullscreen-grid {
    flex: 1;
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    min-height: 0;
    background: linear-gradient(180deg, #eef3f6 0%, #fff 100%);
  }

  .fullscreen-utility-bar {
    position: absolute;
    top: 60px;
    right: 52px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    z-index: 2;
  }

  .fullscreen-chat {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px clamp(24px, 4vw, 56px) 18px;
    width: 100%;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    max-width: none;
    margin: 0;
    box-sizing: border-box;
  }

  .fullscreen-chat .panel-body {
    max-width: none;
    width: 100%;
    padding: 12px clamp(20px, 3vw, 44px) 12px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .fullscreen-chat .panel-footer {
    max-width: none;
    width: 100%;
    padding: 0 clamp(16px, 3vw, 32px);
    box-sizing: border-box;
  }

  .fullscreen-chat form {
    max-width: none;
  }

  .fullscreen-chat .panel-content {
    padding-right: clamp(12px, 2vw, 24px);
    box-sizing: border-box;
  }
`;
