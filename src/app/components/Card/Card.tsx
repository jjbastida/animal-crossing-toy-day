import React from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { card } from './Card.styles.ts';

type CardProps = {
  children: React.ReactNode;
  css?: Interpolation<Theme>
} & React.HTMLAttributes<HTMLDivElement>;

function Card({ children, css, ...rest }: CardProps): React.ReactNode {
  return (
    <div css={[card, css]} {...rest}>
      {children}
    </div>
  );
}

export default Card;
