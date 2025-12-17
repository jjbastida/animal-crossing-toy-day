import React, { ChangeEvent, useContext, useState } from "react";
import { AvatarType, FruitType } from "@/types/general";
import villagerIcons from "@data/villager_icons.json";
import * as styles from "./CharacterCustomization.styles";
import soundEffects from "@data/sound_effects.json";
import { GameContext, MusicContext } from "@/context";
import PlayerCard from "./PlayerCard/PlayerCard";
import AvatarModal from "./AvatarModal/AvatarModal";
import FruitModal from "./FruitModal/FruitModal";
import Typography from "@/components/Typography/Typography";
import { CharacterCustomizationProps } from "./CharacterCustomization.types";

const allVillagers = Object.keys(villagerIcons) as AvatarType[];
const shuffled = [...allVillagers].sort(() => Math.random() - 0.5);
const randomPlaceholderAvatars = shuffled.slice(0, 4);

function CharacterCustomization({
  modifyPlayer,
  modalOpen,
  setModalOpen,
}: CharacterCustomizationProps): React.ReactNode {
  const { players, setPlayers } = useContext(GameContext);
  const { playSoundEffect } = useContext(MusicContext);
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);

  function ensurePlayerExists(playerId: number) {
    const existingPlayer = players.find((p) => p.id === playerId);
    if (!existingPlayer) {
      setPlayers((prev) => [...prev, { id: playerId }]);
    }
  }

  function handleAvatarSelect(
    villagerKey: string,
    _villagerData: { name: string; imageUrl: string },
  ) {
    if (selectedPlayerId === null) return;
    playSoundEffect(soundEffects["UI_Cmn_Open"].audioUrl);
    modifyPlayer(selectedPlayerId, "avatar", villagerKey);
    setTimeout(() => {
      setModalOpen(null);
      setSelectedPlayerId(null);
    }, 300);
  }

  function handleFruitSelect(fruitType: FruitType) {
    if (selectedPlayerId === null) return;
    playSoundEffect(soundEffects["UI_Cmn_Open"].audioUrl);
    modifyPlayer(selectedPlayerId, "fruit", fruitType);
    setTimeout(() => {
      setModalOpen(null);
      setSelectedPlayerId(null);
    }, 300);
  }

  function handleNameChange(playerId: number, value: string) {
    modifyPlayer(playerId, "name", value);
  }

  function handleClearPlayer(playerId: number) {
    setPlayers((prev) => prev.filter((p) => p.id !== playerId));
  }

  function handleClose() {
    setTimeout(() => {
      setModalOpen(null);
      setSelectedPlayerId(null);
    }, 300);
  }

  const defaultPlayers = [1, 2, 3, 4].map((id) => {
    const existingPlayer = players.find((p) => p.id === id);
    return existingPlayer || { id };
  });

  return (
    <div css={styles.cardContainer}>
      {defaultPlayers.map((player, index) => (
        <div key={player.id} css={styles.playerContainer}>
          <Typography
            variant="body"
            size="lg"
            css={styles.playerNumber(index, !!player.avatar && !!player.fruit && !!player.name)}
          >
            Player {index + 1}
          </Typography>
          <PlayerCard
            avatar={player.avatar}
            fruit={player.fruit}
            index={index}
            placeholderAvatarUrl={randomPlaceholderAvatars[player.id - 1]}
            onAvatarClick={() => {
              ensurePlayerExists(player.id);
              setSelectedPlayerId(player.id);
              setModalOpen("avatar");
            }}
            onFruitClick={() => {
              ensurePlayerExists(player.id);
              setSelectedPlayerId(player.id);
              setModalOpen("fruit");
            }}
            onClear={
              player.avatar || player.fruit || player.name
                ? () => handleClearPlayer(player.id)
                : undefined
            }
          />
          <div css={styles.inputContainer(index)}>
            <input
              css={styles.nameInput}
              type="text"
              placeholder="Enter your name..."
              value={player.name || ""}
              aria-label="Name"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                ensurePlayerExists(player.id);
                handleNameChange(player.id, e.target.value);
              }}
            />
          </div>
        </div>
      ))}
      <AvatarModal
        isOpen={modalOpen === "avatar"}
        onClose={handleClose}
        onSelect={handleAvatarSelect}
      />
      <FruitModal
        isOpen={modalOpen === "fruit"}
        onClose={handleClose}
        onSelect={handleFruitSelect}
      />
    </div>
  );
}

export default CharacterCustomization;
