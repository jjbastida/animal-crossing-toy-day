import React, { useState, ChangeEvent, useContext } from 'react';
import { Avatar, Fruit, FruitType } from '@/types/general';
import villagerIcons from '@data/villager_icons.json';
import * as styles from './CharacterCustomization.styles';
import fruitIcons from '@data/fruit_icons.json';
import soundEffects from '@data/sound_effects.json';
import { GameContext, MusicContext } from '@/context';
import PlayerCard from './PlayerCard/PlayerCard';
import AvatarModal from './AvatarModal/AvatarModal';
import FruitModal from './FruitModal/FruitModal';

const allVillagers = Object.values(villagerIcons);
const shuffled = [...allVillagers].sort(() => Math.random() - 0.5);
const randomPlaceholderAvatars = shuffled.slice(0, 4).map(v => v.imageUrl);

interface CharacterCustomizationProps {
  modifyPlayer: (playerId: number, key: string, value: any) => void;
}

function CharacterCustomization({ modifyPlayer }: CharacterCustomizationProps): React.ReactNode {
  const { players, setPlayers } = useContext(GameContext);
  const { playSoundEffect } = useContext(MusicContext);
  const [avatarModalOpen, setAvatarModalOpen] = useState<number | null>(null);
  const [fruitModalOpen, setFruitModalOpen] = useState<number | null>(null);

  function ensurePlayerExists(playerId: number) {
    const existingPlayer = players.find(p => p.id === playerId);
    if (!existingPlayer) {
      setPlayers(prev => [...prev, { id: playerId }]);
    }
  }

  function handleAvatarSelect(playerId: number, villagerKey: string, villagerData: { name: string; imageUrl: string }) {
    const avatar: Avatar = {
      id: villagerKey,
      name: villagerData.name,
      imageURL: villagerData.imageUrl
    };
    
    playSoundEffect(soundEffects['UI_Cmn_Open'].audioUrl);
    modifyPlayer(playerId, 'avatar', avatar);
    setAvatarModalOpen(null);
  }

  function handleFruitSelect(playerId: number, fruitType: FruitType) {
    const fruitData = fruitIcons[fruitType as keyof typeof fruitIcons];
    const fruit: Fruit = {
      id: fruitType,
      name: fruitData.name,
      imageURL: fruitData.imageUrl
    };
    
    playSoundEffect(soundEffects['UI_Cmn_Open'].audioUrl);
    modifyPlayer(playerId, 'fruit', fruit);
    setFruitModalOpen(null);
  }

  function handleNameChange(playerId: number, value: string) {
    modifyPlayer(playerId, 'name', value);
  }

  const defaultPlayers = [1, 2, 3, 4].map(id => {
    const existingPlayer = players.find(p => p.id === id);
    return existingPlayer || { id };
  });

  return (
    <div css={styles.cardContainer}>
      {defaultPlayers.map(player => (
        <div key={player.id} css={styles.playerContainer}>
          <PlayerCard
            avatar={player.avatar}
            fruit={player.fruit}
            placeholderAvatarUrl={randomPlaceholderAvatars[player.id - 1]}
            onAvatarClick={() => {
              ensurePlayerExists(player.id);
              setAvatarModalOpen(player.id);
            }}
            onFruitClick={() => {
              ensurePlayerExists(player.id);
              setFruitModalOpen(player.id);
            }}
          />
          <div css={styles.inputContainer}>
            <input
              css={styles.nameInput}
              type="text"
              placeholder="Enter your name..."
              value={player.name || ''}
              aria-label="Name"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                ensurePlayerExists(player.id);
                handleNameChange(player.id, e.target.value);
              }}
            />
          </div>
          <AvatarModal
            isOpen={avatarModalOpen === player.id}
            onClose={() => setAvatarModalOpen(null)}
            onSelect={(villagerKey, villagerData) => handleAvatarSelect(player.id, villagerKey, villagerData)}
          />
          <FruitModal
            isOpen={fruitModalOpen === player.id}
            onClose={() => setFruitModalOpen(null)}
            onSelect={(fruitType) => handleFruitSelect(player.id, fruitType)}
          />
        </div>
      ))}
    </div>
  );
}

export default CharacterCustomization;
