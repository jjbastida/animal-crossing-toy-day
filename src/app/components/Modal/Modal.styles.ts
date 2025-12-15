import { css } from "@emotion/react";
import { modalOverlaySvg } from "./modalOverlay.ts";

const polkaDotSvg = (dotColor: string, size: number) =>
  encodeURIComponent(modalOverlaySvg(dotColor, size));

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,${polkaDotSvg("#FAF6EB", 10)}"), var(--overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.2s ease-out, display 0.2s ease-out allow-discrete;

  &[data-open="false"] {
    display: none;
    opacity: 0;
  }

  @starting-style {
    opacity: 0;
  }
`;

const modalContent = css`
  background: var(--background-primary);
  border-radius: 80px;
  padding: 2.5rem 2rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  opacity: 1;
  transform: scale(1) translateY(0);
  transition: opacity 0.2s ease-out, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  [data-open="false"] & {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }

  @starting-style {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
`;

const modalGrid = css`
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
`;

const modalItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;

  &:hover {
      transform: scale(1.1);
  }

  img {
    width: 100%;
    max-width: 100px;
    max-height: 100px;
    height: auto;
  }
`;

const modalTitle = css`
  margin: 1rem 0;
  text-align: center;
  color: var(--black);
`;

export { modalOverlay, modalContent, modalGrid, modalItem, modalTitle };
