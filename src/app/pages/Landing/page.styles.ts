import { css, keyframes } from '@emotion/react';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const landingWrapper = css`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const splashLayer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const getPresentContainer = (revealed: boolean) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: var(--background-primary);
  clip-path: ${revealed ? 'circle(0px at 50% 50%)' : 'circle(200vmax at 50% 50%)'};
  transition: clip-path 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${revealed && 'pointer-events: none;'}
`;

const presentIcon = css`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const presentPulse = css`
  width: 100px;
  height: 100px;
  animation: ${pulse} 2s ease-in-out infinite;
  display: block;
`;

const textContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  color: var(--foreground-primary);
`;

const textSubtitle = css`
  margin-top: 0.5rem;
  text-align: center;
  color: var(--foreground-secondary);
`;  

export { landingWrapper, splashLayer, getPresentContainer, presentIcon, presentPulse, textContainer, textSubtitle };