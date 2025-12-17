import { ElementType } from "react";
import { ButtonProps } from "./Button.types";
import * as styles from "./Button.styles.ts";
import { Typography } from "@components";
import { MusicContext } from "@context";
import { useContext } from "react";
import soundEffects from "@data/sound_effects.json";

function Button<E extends ElementType = "button">({
  variant = "primary",
  disabled,
  as: asProp,
  children,
  soundEffect = "UI_Cmn_Open_Short",
  ...props
}: ButtonProps<E>): React.ReactNode {
  const Component = (asProp || "button") as ElementType;
  const { playSoundEffect } = useContext(MusicContext);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    playSoundEffect(soundEffects[soundEffect].audioUrl);
    props.onClick?.(e);
  }

  return (
    <Component
      css={[styles.coreButton, styles.buttonVariants[variant]]}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
      onClick={handleClick}
    >
      <Typography variant="body" size="md" as="span" css={styles.buttonText}>
        {children}
      </Typography>
    </Component>
  );
}

export default Button;
