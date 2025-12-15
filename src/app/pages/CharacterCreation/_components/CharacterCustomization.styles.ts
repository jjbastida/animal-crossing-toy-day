import { css } from "@emotion/react";

const playerColors: Record<number, string> = {
  0: '#FF6C00',
  1: '#829FF6',
  2: '#4CB89C',
  3: '#C27BF6',
};

const underlineSvg = (color: string) =>
  encodeURIComponent(`<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="${color}" stroke-width="4" stroke-dasharray="7, 15" stroke-linecap="round" />
  </svg>`);

const container = css`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 3rem;
  gap: 3rem;
  background: var(--background-secondary);
`;

const cardContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const playerContainer = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  margin: 0 auto;
  width: 100%;
`;


const inputContainer = (index: number) => css`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -50%;
    left: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml,${underlineSvg("#EFEADD")}");
  }

  &:hover {
    &::after {
      background-image: url("data:image/svg+xml,${underlineSvg("#B9B3A0")}");
    }
  }

  &:focus-within {
    &::after {
      background-image: url("data:image/svg+xml,${underlineSvg(playerColors[index])}");
    }
  }
`;

const nameInput = css`
  width: 100%;
  padding: 0.5rem 0;
  appearance: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  font-size: 1rem;
  text-align: center;
  outline: none;
  font-family: Seurat, sans-serif;
  letter-spacing: 0.03em;
  color: var(--foreground-primary);

  &::placeholder {
    color: var(--foreground-secondary);
  }
`;

const playerNumber = (index: number, active: boolean) => css`
  text-align: center;
  color: ${active ? playerColors[index] : 'var(--foreground-secondary)'};
`;


export {
  container,
  playerContainer,
  cardContainer,
  inputContainer,
  nameInput,
  playerNumber,
  playerColors,
};
