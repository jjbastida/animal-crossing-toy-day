import { css, keyframes } from "@emotion/react";

const squishBounce = keyframes`
  0%, 20%, 100%  {
    transform: scale(1, 1) translateY(0);
  }
  25% {
    transform: scale(1, 0.8) translateY(0);
  }
  30% {
    transform: scale(1, 1) translateY(-0.3em);
  }
  35% {
    transform: scale(1, 1) translateY(0);
  }
`;

const createCharStyle = (index: number, speed: number) => css`
  display: inline-block;
  font-size: 1em;
  animation: ${squishBounce} ${2 / (speed * 0.35)}s ease-in-out infinite;
  animation-delay: ${(index * 0.08) / (speed * 0.8)}s;
  transform-origin: bottom;
`;

export { createCharStyle };
