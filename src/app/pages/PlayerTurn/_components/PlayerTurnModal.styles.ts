import { css } from "@emotion/react";

const modalContent = css`
  padding: 3rem;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const modalInner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const avatar = css`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

const title = (color: string) => css`
  color: ${color};
  text-align: center;
`;

export { modalContent, modalInner, avatar, title };

