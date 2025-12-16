import { ElementType } from "react";
import { ButtonProps } from "./Button.types";
import * as styles from "./Button.styles.ts";
import { Typography } from "@components";
import { MusicContext } from "@context";
import { useContext } from "react";
import soundEffects from "@data/sound_effects.json";

function Button<E extends ElementType = "button">({
  variant = "primary",
  as: asProp,
  children,
  ...props
}: ButtonProps<E>): React.ReactNode {
  const Component = (asProp || "button") as ElementType;
  const { playSoundEffect } = useContext(MusicContext);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    playSoundEffect(soundEffects["UI_Cmn_Open_Short"].audioUrl);
    props.onClick?.(e);
  }

  return (
    <Component
      css={[styles.coreButton, styles.buttonVariants[variant]]}
      {...props}
      onClick={handleClick}
    >
      <Typography variant="body" size="md">
        {children}
      </Typography>
    </Component>
  );
}

export default Button;
