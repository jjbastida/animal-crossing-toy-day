import { ComponentPropsWithRef, ElementType, PropsWithChildren } from "react";
import { Interpolation, Theme } from "@emotion/react";

export type EmotionProps = {
  css?: Interpolation<Theme>;
};

type AsProp<E extends ElementType> = {
  as?: E;
};

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P & EmotionProps);

export type PolymorphicProps<E extends ElementType, P = {}> = PropsWithChildren<P & EmotionProps> &
  Omit<ComponentPropsWithRef<E>, PropsToOmit<E, P>> &
  AsProp<E>;

export type PolymorphicComponentProps<E extends ElementType, P = {}> = PolymorphicProps<E, P> & {
  as?: E;
};