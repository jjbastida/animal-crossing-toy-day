import { css, SerializedStyles } from '@emotion/react';

export const pageContainer = css`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const contentCard = css`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const statRow = css`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
`;

export const statLabel = css`
  color: #666;
`;

export const statValue = css`
  font-weight: 600;
  color: #333;
`;
