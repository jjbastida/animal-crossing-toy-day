import { useContext, useState, useMemo } from "react";
import { GameContext } from "../../context/GameContext";
import itemIcons from "@data/item_icons.json";
import * as styles from "./PlayerTurn.styles.ts";
import { Button, Card, Typography } from "@/components/index.ts";
import InventoryModal from "@/components/InventoryModal/InventoryModal";
import { SquaresFour } from "phosphor-react";
import usePlayerColor from "@/hooks/usePlayerColor";
import canWrapItem from "../PrepareGifts/_components/utils/canWrapItem";

function PlayerTurnPage(): React.ReactNode {
  const { setAction, currentPlayer, actionsRemaining, currentRound, totalRounds } = useContext(GameContext);
  const { playerColor } = usePlayerColor(currentPlayer);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  const hasWrappableItems = useMemo(() => {
    const inventory = currentPlayer?.inventory || [];
    return inventory.some((item) => canWrapItem(item));
  }, [currentPlayer?.inventory]);

  const actions = [
    {
      id: "gatherResource" as const,
      title: "Gather Resource",
      description: "Collect resources to use for shopping",
      image: itemIcons[`${currentPlayer?.fruit}-tree` as keyof typeof itemIcons].imageUrl,
    },
    {
      id: "prepareGifts" as const,
      title: "Prepare Presents",
      description: "Create presents from your items",
      image: itemIcons["present"].imageUrl,
    },
    {
      id: "shopItems" as const,
      title: "Nook's Shop",
      description: "Buy or sell items using bells",
      image: itemIcons["furniture"].imageUrl,
    },
  ];

  function handleActionClick(actionId: "gatherResource" | "prepareGifts" | "shopItems"): void {
    setAction(actionId);
  }

  return (
    <div css={styles.pageContainer}>
      <Typography
        variant="body"
        size="md"
        css={styles.pillContainer(playerColor)}
        style={{ top: "2rem", left: "2rem" }}
      >
        Round {currentRound} / {totalRounds}
      </Typography>
      <Typography
        variant="body"
        size="md"
        css={styles.pillContainer(playerColor)}
        style={{ bottom: "2rem", left: "50%", transform: "translateX(-50%)", top: "auto" }}
      >
        {actionsRemaining} Actions Left
      </Typography>
      <div css={styles.contentContainer}>
        <Typography variant="display" size="3xl" css={styles.title(playerColor)}>
          {currentPlayer?.name}'s Turn
        </Typography>
        <Typography variant="body" size="md" css={styles.description}>
          You may pick any {actionsRemaining > 1 ? `${actionsRemaining} actions` : "action"} to
          continue your turn.
        </Typography>
      </div>
      <div css={styles.actionsGrid}>
        {actions.map((action) => {
          const isDisabled = action.id === "prepareGifts" && !hasWrappableItems;
          return (
            <Card key={action.id} css={[styles.actionCard, isDisabled && styles.actionCardDisabled]}>
              <img src={action.image} alt={action.title} css={[styles.actionImage, isDisabled && styles.actionImageDisabled]} />
              <div css={styles.actionContent}>
                <Typography variant="display" size="xl" css={styles.actionTitle}>
                  {action.title}
                </Typography>
                <Typography variant="body" size="sm" css={styles.actionDescription}>
                  {action.description}
                </Typography>
              </div>
              <Button
                variant="primary"
                disabled={isDisabled}
                onClick={() => !isDisabled && handleActionClick(action.id)}
              >
                Select Action
              </Button>
            </Card>
          );
        })}
      </div>
      <Button
        variant="primary"
        css={styles.inventoryButton}
        onClick={() => setIsInventoryOpen(true)}
      >
        <SquaresFour weight="fill" /> Inventory
      </Button>
      <InventoryModal isOpen={isInventoryOpen} onClose={() => setIsInventoryOpen(false)} />
    </div>
  );
}

export default PlayerTurnPage;
