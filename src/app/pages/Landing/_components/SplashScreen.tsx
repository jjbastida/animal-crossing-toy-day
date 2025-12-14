import React, { useEffect, useRef, useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import * as styles from './SplashScreen.styles.ts';
import { ActionText, Typography } from '@components';
import { MusicContext } from '@context';
import songData from '@data/acnh_songs.json';

function SplashScreen({ mounted }: { mounted: boolean }): React.ReactNode {
  const { setGamePhase } = useContext(GameContext);
  const { playTrack } = useContext(MusicContext);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const animationPlayState = mounted ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}
  const clickSound = new Audio('/assets/sounds/click.mp3');
  clickSound.volume = 0.3;
  clickSoundRef.current = clickSound;

  function handleKeyPress(): void {
    if (clickSoundRef.current) {
      clickSoundRef.current.play().catch(() => {});
    }
    setGamePhase('characterCreation');
  }

  useEffect(() => {
    playTrack(songData['opening-theme'].audioUrl);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [mounted]);

  return (
    <div css={styles.splashContainer}>
      <img src='/assets/icons/toyDayLogo.svg' css={styles.toyDayLogo} style={animationPlayState} />
      <Typography variant="body" size="xl" css={styles.prompt} as={ActionText} style={animationPlayState}>Press any key to start!</Typography>
      <Typography variant="display" size="md" css={styles.madeWithLove} style={animationPlayState}>Made with love by JJ</Typography>
    </div>
  );
};

export default SplashScreen;
