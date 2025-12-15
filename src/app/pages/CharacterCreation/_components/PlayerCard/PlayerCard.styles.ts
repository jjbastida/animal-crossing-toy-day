import { css } from "@emotion/react";

const playerCard = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  min-height: 50vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const asset = css`
  width: 90%;
  object-fit: contain;
`;

const assetPlaceholder = css`
  filter: brightness(0) saturate(100%) invert(82%) sepia(22%) saturate(100%) hue-rotate(8deg)
  brightness(100%) contrast(88%);
  opacity: 0.5;
`;

const clearButton = css`
  position: absolute;
  top: 1rem;
  right: 1rem;

  & > button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > button:hover,
  & > button:active {
    color: var(--foreground-active);
  }
`;

export { playerCard, asset, assetPlaceholder, clearButton };
