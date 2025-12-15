import { css, SerializedStyles } from '@emotion/react';

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
`;

export const title = css`
  margin: 0;
  font-size: 1.5rem;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
`;

export const input = css`
  padding: 0.75rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffc107;
  }
`;

export const button = css`
  padding: 1rem 2rem;
  background: #ffc107;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e0a800;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const giftsList = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 300px;
`;

export const giftItem = css`
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
`;
