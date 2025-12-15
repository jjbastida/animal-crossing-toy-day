import { PolymorphicComponentProps } from '@/types/polymorphic';
import { ElementType, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonOwnProps = {
  variant?: ButtonVariant;
  children: ReactNode;
}

export type ButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<
  E,
  ButtonOwnProps
>;
