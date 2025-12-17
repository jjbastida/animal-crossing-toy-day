import { Button, Typography } from "@/components";
import CharacterCustomization from "./_components/CharacterCustomization";
import { container } from "./_components/CharacterCustomization.styles";
import { useContext, useMemo, useState } from "react";
import { GameContext } from "@/context";
import * as styles from "./page.styles.ts";
import { AvatarType, FruitType, Item, Player } from "@/types/general.ts";
import itemIcons from "@data/item_icons.json";
import Tooltip from "@/components/Tooltip/Tooltip.tsx";
import { Gear } from "phosphor-react";
import SettingsModal from "./_components/SettingsModal/SettingsModal";

function handleFruitAbilities(players: Player[]): Player[] {
  return players.map((player) => {
    const updatedPlayer = { ...player, fruitValue: 100, bells: 500, inventory: [] as Item[] };

    switch (player.fruit) {
      case "apple":
        updatedPlayer.bells = 5000;
        break;
      case "cherry": {
        updatedPlayer.inventory = [
          ...updatedPlayer.inventory,
          {
            name: itemIcons["fishing-rod"].name,
            description: "A tool for catching fish.",
            imageURL: itemIcons["fishing-rod"].imageUrl,
          },
        ];
        break;
      }
      case "orange": {
        updatedPlayer.inventory = [
          ...updatedPlayer.inventory,
          {
            name: "Bug Net",
            description: "A tool for catching bugs.",
            imageURL: itemIcons["net"].imageUrl,
          },
        ];
        break;
      }
      case "pear": {
        updatedPlayer.inventory = [
          ...updatedPlayer.inventory,
          {
            name: itemIcons["shovel"].name,
            description: "A tool for digging up fossils.",
            imageURL: itemIcons["shovel"].imageUrl,
          },
        ];
        break;
      }
      case "coconut": {
        updatedPlayer.inventory = [
          ...updatedPlayer.inventory,
          {
            name: "Shop Coupon",
            description: "A coupon to get a free item from the shop.",
            imageURL: itemIcons["nook-miles-ticket"].imageUrl,
          },
        ];
        break;
      }
      case "peach":
        updatedPlayer.fruitValue = 500;
        break;
    }

    return updatedPlayer;
  });
}

function CharacterCreationPage(): React.ReactNode {
  const { setPlayers, setGamePhase, setCurrentPlayer, players, totalRounds, setTotalRounds } =
    useContext(GameContext);
  const [modalOpen, setModalOpen] = useState<("avatar" | "fruit") | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const isStartButtonDisabled = useMemo(
    () =>
      players.length === 0 ||
      !players.every((player) => player.avatar && player.fruit && player.name),
    [players],
  );

  function modifyPlayer(
    playerId: number,
    key: string,
    value: string | number | FruitType | AvatarType,
  ) {
    setPlayers((prev) => prev.map((p) => (p.id === playerId ? { ...p, [key]: value } : p)));
  }

  function handleStartGame(): void {
    setPlayers((prev) => {
      const finalizedPlayers = handleFruitAbilities(prev as Player[]);
      const shuffled = finalizedPlayers.sort(() => Math.random() - 0.5);
      const updatedPlayers = shuffled.map((player, index) => ({
        ...player,
        order: index + 1,
      }));

      const firstPlayer = updatedPlayers.find((p) => p.order === 1);
      if (firstPlayer) {
        setCurrentPlayer(firstPlayer);
      }

      return updatedPlayers;
    });
    setGamePhase("playerTurn");
  }

  return (
    <div css={container}>
      <Button variant="primary" css={styles.settingsButton} onClick={() => setIsSettingsOpen(true)}>
        <Gear weight="fill" /> Settings
      </Button>
      <Typography
        variant="display"
        size="3xl"
        css={styles.title}
        style={modalOpen || isSettingsOpen ? { opacity: "0.5" } : {}}
      >
        Build your villager!
      </Typography>
      <CharacterCustomization
        modifyPlayer={modifyPlayer}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <Tooltip label="Pick an avatar, fruit and name to start." disabled={!isStartButtonDisabled}>
        <Button variant="primary" onClick={handleStartGame} disabled={isStartButtonDisabled}>
          Let's go!
        </Button>
      </Tooltip>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        totalRounds={totalRounds}
        onRoundsChange={setTotalRounds}
      />
    </div>
  );
}

export default CharacterCreationPage;
