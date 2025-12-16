import React, { useEffect, useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import * as styles from "./SplashScreen.styles.ts";
import { ActionText, Typography } from "@components";
import { MusicContext } from "@context";
import songData from "@data/acnh_songs.json";
import soundEffects from "@data/sound_effects.json";
import { SplashScreenProps } from "./SplashScreen.types";

function SplashScreen({ mounted }: SplashScreenProps): React.ReactNode {
  const { setGamePhase } = useContext(GameContext);
  const { playTrack, playSoundEffect } = useContext(MusicContext);
  const animationPlayState = mounted
    ? { animationPlayState: "running" }
    : { animationPlayState: "paused" };

  function handleKeyPress(): void {
    playSoundEffect(soundEffects["UI_Decide_Title"].audioUrl);
    setTimeout(() => {
      setGamePhase("characterCreation");
    }, 1000);
  }

  useEffect(() => {
    playTrack(songData["opening-theme"].audioUrl);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [mounted]);

  return (
    <div css={styles.splashContainer}>
      <img src="/assets/icons/toyDayLogo.svg" css={styles.toyDayLogo} style={animationPlayState} />
      <Typography
        variant="body"
        size="xl"
        css={styles.prompt}
        as={ActionText}
        style={animationPlayState}
      >
        Press any key to start!
      </Typography>
      <Typography variant="display" size="md" css={styles.madeWithLove} style={animationPlayState}>
        Made with love by JJ
      </Typography>
    </div>
  );
}

export default SplashScreen;
