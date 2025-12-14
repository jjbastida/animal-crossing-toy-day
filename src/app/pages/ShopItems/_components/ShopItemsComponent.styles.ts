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

export const resourceCount: SerializedStyles = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

export const itemsGrid: SerializedStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 500px;
`;

export const itemCard: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: white;
  border-radius: 4px;
  border: 2px solid #ddd;
`;

export const itemName: SerializedStyles = css`
  font-weight: 600;
`;

export const itemCost: SerializedStyles = css`
  color: #666;
  font-size: 0.9rem;
`;

export const getButtonStyle = (disabled: boolean): SerializedStyles => css`
  padding: 0.75rem 1.5rem;
  background: ${disabled ? '#ccc' : '#dc3545'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.2s;

  &:hover {
    background: ${disabled ? '#ccc' : '#c82333'};
  }

  &:active {
    transform: ${disabled ? 'none' : 'scale(0.98)'};
  }
`;

export const titleSmall: SerializedStyles = css`
  margin: 0;
  font-size: 1.25rem;
  margin-top: 1rem;
`;

export const itemsList: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 300px;
`;

export const item: SerializedStyles = css`
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
`;
