import { css, SerializedStyles } from '@emotion/react';

export const container: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
`;

export const title: SerializedStyles = css`
  margin: 0;
  font-size: 1.5rem;
`;

export const button: SerializedStyles = css`
  padding: 1rem 2rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #218838;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const resourceCount: SerializedStyles = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;
