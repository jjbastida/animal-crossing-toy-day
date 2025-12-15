import { css } from "@emotion/react";

const avatarItem = css`
  &[aria-disabled="true"] {
    filter: brightness(0) saturate(100%) invert(82%) sepia(22%) saturate(100%) hue-rotate(8deg)
    brightness(100%) contrast(88%);
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export { avatarItem };
