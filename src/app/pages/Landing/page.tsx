import { useContext, useState } from "react";
import SplashScreen from "./_components/SplashScreen";
import itemIcons from "@data/item_icons.json";
import * as styles from "./page.styles.ts";
import { ActionText, Typography } from "@components";
import soundEffects from "@data/sound_effects.json";
import { MusicContext } from "@/context/MusicContext.tsx";

function LandingPage(): React.ReactNode {
  const [showSplash, setShowSplash] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const { playSoundEffect } = useContext(MusicContext);

  function onPresentClick(): void {
    if (!soundPlayed && !showSplash) {
      playSoundEffect(soundEffects["Pl_PresentOpen_00"].audioUrl);
      setSoundPlayed(true);
    }
    setShowSplash(true);
  }

  return (
    <div css={styles.landingWrapper}>
      <div css={styles.splashLayer}>
        <SplashScreen mounted={showSplash} />
      </div>
      <div css={styles.getPresentContainer(showSplash)}>
        <button css={styles.presentIcon} onClick={onPresentClick} aria-label="Open gift">
          <img src={itemIcons["present"].imageUrl} css={styles.presentPulse} />
        </button>
        <div css={styles.textContainer}>
          <Typography variant="display" size="lg" css={styles.textTitle}>
            Happy Toy Day Olga!
          </Typography>
          <Typography variant="body" size="sm" css={styles.textSubtitle} as={ActionText}>
            Click your gift to open it...
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
