import { css, SerializedStyles } from '@emotion/react';

export const pageContainer: SerializedStyles = css`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const roundIndicator: SerializedStyles = css`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
`;

export const actionsRemainingIndicator: SerializedStyles = css`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 1.1rem;
`;

export const actionsGrid: SerializedStyles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-top: 4rem;
`;

export const actionCard: SerializedStyles = css`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const actionTitle: SerializedStyles = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #333;
`;

export const actionDescription: SerializedStyles = css`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin: 0;
  line-height: 1.5;
`;

export const actionButton: SerializedStyles = css`
  padding: 0.75rem 2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: auto;

  &:hover {
    background: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;
