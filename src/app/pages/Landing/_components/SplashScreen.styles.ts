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
  position: relative;
`;

const toyDayLogo = css`
  margin-top: -30vh;
  margin-right: -5vw;
  width: clamp(300px, 800px, 40vw);
  animation: ${fadeIn} 1s ease-out 2.7s forwards 1;
  opacity: 0;

  @media (max-width: 768px) {
    margin-top: -20vh;
  }
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
  text-shadow: 0 0 22px #4d3c3ba0;

  @media (max-width: 768px) {
    display: none;
  }
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
  text-shadow: 0 0 10px #4d3c3ba0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const bgVideo = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const mobilePromp = css`
  position: absolute;
  bottom: 4rem;
  opacity: 0;
  color: white;
  text-align: center;
  opacity: 0;
  width: 100%;
  padding: 0 2rem;
  animation: ${fadeIn} 1s ease-out 4.8s forwards 1;
  display: none;
  text-shadow: 0 0 10px #4d3c3ba0;

  @media (max-width: 768px) {
    display: block;
  }
`;
export { splashContainer, toyDayLogo, prompt, madeWithLove, bgVideo, mobilePromp };
