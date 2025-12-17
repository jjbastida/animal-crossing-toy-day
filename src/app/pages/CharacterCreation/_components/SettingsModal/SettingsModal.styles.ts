import { css } from "@emotion/react";

const modal = css`
  min-width: 40vw;
`;

const settingsContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const settingsLabel = css`
  color: var(--foreground-primary);
`;

export { modal, settingsContent, settingsLabel };

