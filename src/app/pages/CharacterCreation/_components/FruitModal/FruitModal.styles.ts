import { css } from "@emotion/react";

const fruitAbility = css`
  text-align: center;
  margin: 2rem auto 0.5rem auto;
  color: var(--foreground-primary);
`;

const fruitHelperText = css`
  text-align: center;
  color: var(--foreground-secondary);
  margin: 0 auto;
  max-width: none;
`;

const fruitItem = css`
  &[aria-disabled="true"] {
    filter: brightness(0) saturate(100%) invert(82%) sepia(22%) saturate(100%) hue-rotate(8deg)
      brightness(100%) contrast(88%);
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`;
export { fruitAbility, fruitHelperText, fruitItem };
