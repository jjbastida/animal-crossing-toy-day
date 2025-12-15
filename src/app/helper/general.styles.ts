import { css } from '@emotion/react';

const icon = css`
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
  display: inline;
  vertical-align: bottom;
`;

const highlighted = css`
  color: var(--foreground-active);
`;

export { icon, highlighted };