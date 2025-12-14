import { HTMLAttributes, ReactNode } from 'react';

export type ActionTextProps = {
  children: ReactNode;
  speed?: number;
} & HTMLAttributes<HTMLSpanElement>;