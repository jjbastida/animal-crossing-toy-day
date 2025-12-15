import React from 'react';
import { Interpolation, Theme } from '@emotion/react';
import * as styles from './SelectionButton.styles';

type SelectionButtonSize = 'small' | 'large';

interface SelectionButtonProps {
  selected: boolean;
  size?: SelectionButtonSize;
  onClick: () => void;
  children: React.ReactNode;
  css?: Interpolation<Theme>;
  'aria-label'?: string;
}

function SelectionButton({
  selected,
  size = 'small',
  onClick,
  children,
  css,
  'aria-label': ariaLabel,
}: SelectionButtonProps): React.ReactNode {
  return (
    <button
      css={[styles.selectionButton(selected), styles.sizeVariants[size], css]}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default SelectionButton;
