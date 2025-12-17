import { useContext, useState, useMemo, useEffect, useRef } from "react";
import { GameContext } from "../../context/GameContext";
import itemIcons from "@data/item_icons.json";
import * as styles from "./PlayerTurn.styles.ts";
import { Button, Card, Typography } from "@/components/index.ts";
import InventoryModal from "@/components/InventoryModal/InventoryModal";
import { SquaresFour } from "phosphor-react";
import usePlayerColor from "@/hooks/usePlayerColor";
import canWrapItem from "../PrepareGifts/_components/utils/canWrapItem";
import PlayerTurnModal from "./_components/PlayerTurnModal";
import { DEFAULT_ACTIONS_PER_TURN } from "../../context/GameContext.constants";
import pluralize from "pluralize";

const ACTIONS = [
  {
    id: "gatherResource" as const,
    title: "Gather Resource",
    description: "Collect resources to use for shopping",
    imageKey: "gatherResource",
  },
  {
    id: "prepareGifts" as const,
    title: "Prepare Presents",
    description: "Create presents from your items",
    imageKey: "present",
  },
  {
    id: "shopItems" as const,
    title: "Nook's Shop",
    description: "Buy or sell items using bells",
    imageKey: "furniture",
  },
] as const;

function PlayerTurnPage(): React.ReactNode {
  const { setAction, currentPlayer, actionsRemaining, currentRound, totalRounds } =
    useContext(GameContext);
  const { playerColor } = usePlayerColor(currentPlayer || { id: 0 });
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [showTurnModal, setShowTurnModal] = useState(false);
  const shownModalKeyRef = useRef<string | null>(null);

  useEffect(() => {
    if (!currentPlayer) return;

    const modalKey = `${currentPlayer.id}-${actionsRemaining}`;
    const hasTwoActions = actionsRemaining === DEFAULT_ACTIONS_PER_TURN;

    if (hasTwoActions && shownModalKeyRef.current !== modalKey) {
      setShowTurnModal(true);
      shownModalKeyRef.current = modalKey;
    }
  }, [currentPlayer?.id, actionsRemaining]);

  const hasWrappableItems = useMemo(() => {
    return currentPlayer?.inventory?.some((item) => canWrapItem(item)) ?? false;
  }, [currentPlayer?.inventory]);

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
        {actionsRemaining} {pluralize("Action", actionsRemaining)} Left
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
        {ACTIONS.map((action) => {
          const isDisabled = action.id === "prepareGifts" && !hasWrappableItems;
          const imageUrl =
            action.id === "gatherResource" && currentPlayer?.fruit
              ? itemIcons[`${currentPlayer.fruit}-tree` as keyof typeof itemIcons].imageUrl
              : itemIcons[action.imageKey as keyof typeof itemIcons].imageUrl;

          return (
            <Card
              key={action.id}
              css={[styles.actionCard, isDisabled && styles.actionCardDisabled]}
            >
              <img
                src={imageUrl}
                alt={action.title}
                css={[styles.actionImage, isDisabled && styles.actionImageDisabled]}
              />
              <div css={styles.actionContent}>
                <Typography variant="display" size="xl" css={styles.actionTitle}>
                  {action.title}
                </Typography>
                <Typography variant="body" size="sm" css={styles.actionDescription}>
                  {action.description}
                </Typography>
              </div>
              <Button variant="primary" disabled={isDisabled} onClick={() => setAction(action.id)}>
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
      <PlayerTurnModal
        isOpen={showTurnModal}
        onClose={() => setShowTurnModal(false)}
        player={currentPlayer}
      />
    </div>
  );
}

export default PlayerTurnPage;
