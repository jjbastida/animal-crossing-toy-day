import { useContext, useState } from "react";
import { GameContext } from "@/context/GameContext";
import { Item, Player, Present, Color } from "@/types/general";
import useDrag from "@/hooks/useDrag";
import PresentsGrid from "./PresentsGrid/PresentsGrid";
import InventoryList from "./InventoryList/InventoryList";
import DeletePresentModal from "./DeletePresentModal/DeletePresentModal";
import ColorSelectionModal from "./ColorSelectionModal/ColorSelectionModal";
import * as styles from "./PrepareGiftsComponent.styles";
import { MusicContext } from "@/context/MusicContext";
import soundEffects from "@data/sound_effects.json";
import { getItemBasePoints } from "./utils/itemTooltip";
import { getItemTag } from "@/pages/ShopItems/_components/utils/itemLookups";

function PrepareGiftsComponent(): React.ReactNode {
  const { currentPlayer, setCurrentPlayer, players, setPlayers, setActionUsed } =
    useContext(GameContext);
  const { playSoundEffect } = useContext(MusicContext);
  const [deletePresent, setDeletePresent] = useState<Present | null>(null);
  const [pendingPresent, setPendingPresent] = useState<{ item: Item; position: number } | null>(
    null,
  );
  const baseInventory = currentPlayer?.inventory || [];
  const presents = currentPlayer?.presents || [];
  const presentMap = new Map(presents.map((p) => [p.position, p]));

  const {
    draggedItem,
    draggedOverTarget,
    dragPreview,
    handleMouseDown: dragMouseDown,
    handleMouseEnter: dragMouseEnter,
    handleMouseLeave: dragMouseLeave,
    handleMouseUp: dragMouseUp,
  } = useDrag<Item>();

  const inventory = baseInventory.map((item) => {
    if (draggedItem && draggedItem.name === item.name) {
      if (item.count && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return null;
    }
    return item;
  });

  function handleMouseDown(item: Item, imageURL: string, canDrag: boolean, e: React.MouseEvent) {
    dragMouseDown(item, imageURL, canDrag, e);
  }

  function handleMouseEnter(position: number) {
    const present = presentMap.get(position);
    dragMouseEnter(position, !present && !!draggedItem);
  }

  function handleMouseUp(position: number) {
    if (!currentPlayer) return;

    dragMouseUp(position, (item: Item, targetPosition: number) => {
      setPendingPresent({ item, position: targetPosition });
    });
  }

  function handleColorSelect(color: Color) {
    if (!currentPlayer || !pendingPresent) return;

    const currentPresents = currentPlayer.presents || [];
    const currentInventory = currentPlayer.inventory || [];

    const basePoints = getItemBasePoints(pendingPresent.item);
    const tag = getItemTag(pendingPresent.item.name) || "";

    const updatedPresents = [
      ...currentPresents,
      {
        id: `present-${Date.now()}-${Math.random()}`,
        color,
        item: pendingPresent.item,
        position: pendingPresent.position,
        tag,
        points: basePoints,
      } as Present,
    ];

    const updatedInventory = currentInventory
      .map((invItem: Item) => {
        if (invItem.name === pendingPresent.item.name) {
          if (invItem.count && invItem.count > 1) {
            return { ...invItem, count: invItem.count - 1 };
          }
          return null;
        }
        return invItem;
      })
      .filter((invItem: Item | null): invItem is Item => invItem !== null);

    const updatedPlayer: Player = {
      ...currentPlayer,
      inventory: updatedInventory,
      presents: updatedPresents,
    };

    playSoundEffect(soundEffects["Pl_PresentOpen_00"].audioUrl);
    setActionUsed(true);
    setCurrentPlayer(updatedPlayer);
    const updatedPlayers = players.map((p: Player) =>
      p.id === currentPlayer.id ? updatedPlayer : p,
    );
    setPlayers(updatedPlayers);
    setPendingPresent(null);
  }

  function handlePresentClick(present: Present) {
    setDeletePresent(present);
  }

  function handleConfirmDelete() {
    if (!currentPlayer || !deletePresent) return;

    const updatedPresents = presents.filter((p) => p.id !== deletePresent.id) as Present[];
    const updatedPlayer: Player = {
      ...currentPlayer,
      presents: updatedPresents,
    };

    setCurrentPlayer(updatedPlayer);
    const updatedPlayers = players.map((p: Player) =>
      p.id === currentPlayer.id ? updatedPlayer : p,
    );
    setPlayers(updatedPlayers);
    playSoundEffect(soundEffects["UI_Post_Delete"].audioUrl);
    setDeletePresent(null);
  }

  return (
    <>
      <div css={styles.container}>
        <PresentsGrid
          presents={presents}
          draggedOverSlot={draggedOverTarget}
          onPresentClick={handlePresentClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={dragMouseLeave}
          onMouseUp={handleMouseUp}
        />
        <InventoryList inventory={inventory} onMouseDown={handleMouseDown} />
      </div>

      {dragPreview && (
        <div
          css={styles.dragGhost}
          style={{
            left: `${dragPreview.x}px`,
            top: `${dragPreview.y}px`,
          }}
        >
          <img src={dragPreview.imageURL} alt="Drag preview" css={styles.dragGhostImage} />
        </div>
      )}

      <DeletePresentModal
        isOpen={deletePresent !== null}
        present={deletePresent}
        onConfirm={handleConfirmDelete}
        onCancel={() => {
          setTimeout(() => {
            setDeletePresent(null);
          }, 300);
        }}
      />

      <ColorSelectionModal
        isOpen={pendingPresent !== null}
        onColorSelect={handleColorSelect}
        onCancel={() => setPendingPresent(null)}
      />
    </>
  );
}

export default PrepareGiftsComponent;
