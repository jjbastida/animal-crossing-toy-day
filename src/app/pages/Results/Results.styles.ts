import { css } from "@emotion/react";

const pageContainer = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 3rem;
  gap: 3rem;
  background: var(--background-secondary);
`;

const title = css`
  color: var(--black);
  text-align: center;
`;

const playersGrid = css`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export { pageContainer, title, playersGrid };
