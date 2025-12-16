import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const splashContainer = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #87ceeb 0%, #98d8c8 100%);
  position: relative;
`;

const toyDayLogo = css`
  margin-top: -30vh;
  margin-right: -5vw;
  width: clamp(100px, 800px, 40vw);
  animation: ${fadeIn} 1s ease-out 2.7s forwards 1;
  opacity: 0;
`;

const prompt = css`
  position: absolute;
  bottom: 6rem;
  opacity: 0;
  color: white;
  animation: ${fadeIn} 1s ease-out 3.3s forwards 1;
  text-align: center;
  left: 50%;
  translate: -50% 0;
`;

const madeWithLove = css`
  position: absolute;
  bottom: 3rem;
  opacity: 0;
  color: white;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 4.8s forwards 1;
  left: 50%;
  translate: -50% 0;
`;

export { splashContainer, toyDayLogo, prompt, madeWithLove };
