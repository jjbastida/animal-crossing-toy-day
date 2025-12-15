import { Button, Typography } from '@/components';
import CharacterCustomization from './_components/CharacterCustomization';
import { container } from './_components/CharacterCustomization.styles';
import { useContext } from 'react';
import { GameContext } from '@/context';
import * as styles from './page.styles.ts';

function CharacterCreationPage(): React.ReactNode {
  const { setPlayers } = useContext(GameContext);

  function modifyPlayer(playerId: number, key: string, value: any) {
    setPlayers(prev => prev.map(p => p.id === playerId ? { ...p, [key]: value } : p));
  }

  return (
    <div css={container}>
      <Typography variant="display" size="3xl" css={styles.title}>Build your villager!</Typography>
      <CharacterCustomization modifyPlayer={modifyPlayer} />
      <Button>Let's go!</Button>
    </div>
  );
}

export default CharacterCreationPage;
