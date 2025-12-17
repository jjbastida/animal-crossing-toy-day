import { css } from "@emotion/react";

const container = css`
  display: flex;
  gap: 3rem;
  padding: 4rem 0;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: center;
`;

const dragGhost = css`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const dragGhostImage = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 1;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export { container, dragGhost, dragGhostImage };
