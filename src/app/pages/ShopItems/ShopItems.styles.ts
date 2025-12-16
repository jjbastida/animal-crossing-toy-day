import { css } from "@emotion/react";

const pageContainer = css`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const completeButton = css`
  position: absolute;
  bottom: 2rem;
  padding: 0.75rem 2rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #218838;
  }
`;

export { pageContainer, completeButton };
