import { css } from "@emotion/react";

const itemCount = css`
  position: relative;
`;

const itemCountChildren = css`
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--foreground-active);
  color: var(--foreground-inverse);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  font-family: Seurat, sans-serif;
  border-radius: 999px;
`;

export { itemCount, itemCountChildren };
