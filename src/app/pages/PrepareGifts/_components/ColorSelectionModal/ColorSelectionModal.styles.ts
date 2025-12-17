import { css } from "@emotion/react";
import { Color } from "@/types/general";

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

const colorGrid = css`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const colorCircle = (color: Color) => css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition:
    transform 0.2s,
    border-color 0.2s;
  background-color: ${getColorValue(color)};

  &:hover {
    transform: scale(1.1);
  }
`;

function getColorValue(color: Color): string {
  const colorMap: Record<Color, string> = {
    red: "#FF6B6B",
    green: "#51CF66",
    blue: "#339AF0",
  };
  return colorMap[color];
}

export { modalContent, modalText, colorGrid, colorCircle };
