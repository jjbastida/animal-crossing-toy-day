import { css, SerializedStyles } from '@emotion/react';

export const container: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

export const title: SerializedStyles = css`
  font-size: 2rem;
  margin: 0;
`;

export const form: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const formGroup: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const label: SerializedStyles = css`
  font-weight: 600;
`;

export const input: SerializedStyles = css`
  padding: 0.75rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const select: SerializedStyles = css`
  padding: 0.75rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background: white;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const button: SerializedStyles = css`
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;
