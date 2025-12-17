import { PolymorphicComponentProps } from "@/types/polymorphic";
import { ElementType, ReactNode } from "react";
import soundEffects from "@data/sound_effects.json";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  disabled?: boolean;
  soundEffect?: keyof typeof soundEffects;
};

export type ButtonProps<E extends ElementType = "button"> = PolymorphicComponentProps<
  E,
  ButtonOwnProps
>;
