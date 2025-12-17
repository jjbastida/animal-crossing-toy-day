import { HTMLAttributes, ReactNode } from "react";

export type ActionTextProps = {
  children: ReactNode;
  speed?: number;
  delay?: number;
} & HTMLAttributes<HTMLSpanElement>;
