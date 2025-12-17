import { css } from "@emotion/react";
import { Color } from "@/types/general";

const presentColors = {
  red: "brightness(1.2) ",
  green: "brightness(1.2) hue-rotate(120deg)",
  blue: "brightness(1.2) hue-rotate(220deg)",
};

const modalContent = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 1rem 0;
`;

const modalText = css`
  color: var(--foreground-secondary);
  text-align: center;
`;

const modalActions = css`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`;

const modalImage = css`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const modalImageWithColor = (color: Color) => css`
  width: 100px;
  height: 100px;
  object-fit: contain;
  filter: ${presentColors[color]};
`;

export { modalContent, modalText, modalActions, modalImage, modalImageWithColor };
