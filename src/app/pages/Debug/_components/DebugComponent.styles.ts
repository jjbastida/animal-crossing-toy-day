import { css } from "@emotion/react";

const container = css`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
`;

const searchInput = css`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const tabsContainer = css`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
  overflow-x: auto;
`;

const tab = css`
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    color: #4a90e2;
    background: #f5f5f5;
  }
`;

const tabActive = css`
  color: #4a90e2;
  border-bottom-color: #4a90e2;
  font-weight: 600;
`;

const tabDisabled = css`
  opacity: 0.4;
  cursor: not-allowed;
`;

const dataSection = css`
  margin-bottom: 3rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const sectionTitle = css`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.5rem;
  border-bottom: 2px solid #4a90e2;
  padding-bottom: 0.5rem;
`;

const dataGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const dataItem = css`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  background: #fafafa;
  transition: box-shadow 0.2s;
  display: flex;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

const copyButton = css`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #4a90e2;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: #357abd;
  }

  &:active {
    background: #2a5f8f;
  }
`;

const dataItemHeader = css`
  margin-bottom: 0.5rem;
`;

const dataItemContent = css`
  div {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: #4a90e2;
    word-break: break-all;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export {
  container,
  searchInput,
  tabsContainer,
  tab,
  tabActive,
  tabDisabled,
  dataSection,
  dataGrid,
  dataItem,
  dataItemHeader,
  dataItemContent,
  sectionTitle,
  copyButton,
};
