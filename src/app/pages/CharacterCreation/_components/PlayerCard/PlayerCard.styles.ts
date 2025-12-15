import { css } from "@emotion/react";

const playerCard = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  min-height: 40vh;
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

export { playerCard, asset, assetPlaceholder };
