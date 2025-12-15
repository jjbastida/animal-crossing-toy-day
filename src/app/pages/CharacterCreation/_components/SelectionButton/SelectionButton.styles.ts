import { css } from "@emotion/react";

const containerSvg = (color: string, radius: string) => encodeURIComponent(
  `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' stroke='${color}' stroke-width='9' stroke-dasharray='7, 15' stroke-dashoffset='0' stroke-linecap='square' rx='${radius}' ry='${radius}' /></svg>`,
);

const selectionButton = (selected: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${selected ? 'var(--shadow)' : `url("data:image/svg+xml,${containerSvg("#EFEADD", "999px")}")`};
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${selected ? 'var(--shadow)' : `url("data:image/svg+xml,${containerSvg("#63BEAD", "999px")}")`};
    transform: scale(1.05);
  }
`;

const sizeSmall = css`
  width: 80px;
  height: 80px;
`;

const sizeLarge = css`
  width: 120px;
  height: 120px;
`;

const sizeVariants = {
  small: sizeSmall,
  large: sizeLarge,
};

export { selectionButton, sizeVariants };
