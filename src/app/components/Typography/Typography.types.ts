import { PolymorphicComponentProps } from '@/types/polymorphic';
import { SerializedStyles } from '@emotion/react';
import { ElementType, ReactNode } from 'react';

export type TypographyVariant = 'display' | 'body';
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

type TypographyOwnProps = {
  variant?: TypographyVariant;
  size?: TypographySize;
  children: ReactNode;
  css?: SerializedStyles | SerializedStyles[] | string | null | undefined | boolean;
}

export type TypographyProps<E extends ElementType = ElementType> = PolymorphicComponentProps<
  E,
  TypographyOwnProps
>;