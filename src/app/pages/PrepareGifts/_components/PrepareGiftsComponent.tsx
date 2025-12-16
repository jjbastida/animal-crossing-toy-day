import { useContext, useState } from "react";
import { GameContext } from "@/context/GameContext";
import { Item, Player, Present } from "@/types/general";
import useDrag from "@/hooks/useDrag";
import PresentsGrid from "./PresentsGrid/PresentsGrid";
import InventoryList from "./InventoryList/InventoryList";
import DeletePresentModal from "./DeletePresentModal/DeletePresentModal";
import * as styles from "./PrepareGiftsComponent.styles";
import { MusicContext } from "@/context/MusicContext";
import soundEffects from "@data/sound_effects.json";

function PrepareGiftsComponent(): React.ReactNode {
  const { currentPlayer, setCurrentPlayer, players, setPlayers } = useContext(GameContext);
  const { playSoundEffect } = useContext(MusicContext);
  const [deletePresentId, setDeletePresentId] = useState<string | null>(null);
  const inventory = currentPlayer?.inventory || [];
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

  function handleMouseDown(item: Item, imageURL: string, canDrag: boolean, e: React.MouseEvent) {
    dragMouseDown(item, imageURL, canDrag, e);
  };

  function handleMouseEnter(position: number) {
    const present = presentMap.get(position);
    dragMouseEnter(position, !present && !!draggedItem);
  };

  function handleMouseUp(position: number) {
    if (!currentPlayer) return;
    
    dragMouseUp(position, (item: Item, targetPosition: number) => {
      const currentPresents = currentPlayer.presents || [];
      const currentInventory = currentPlayer.inventory || [];
      
      const updatedPresents = [...currentPresents, {
        id: `present-${Date.now()}-${Math.random()}`,
        color: "red",
        items: item,
        position: targetPosition,
      } as Present];
      
      const updatedInventory = currentInventory
        .map((invItem: Item) => {
          if (invItem.name === item.name) {
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
      const updatedPlayers = players.map((p: Player) => (p.id === currentPlayer.id ? updatedPlayer : p));
      setPlayers(updatedPlayers);
      setCurrentPlayer(updatedPlayer);
    });
  };

  function handlePresentClick(present: Present) {
    setDeletePresentId(present.id);
  };

  function handleConfirmDelete() {
    if (!currentPlayer || !deletePresentId) return;
    
    const updatedPresents = presents.filter((p) => p.id !== deletePresentId) as Present[];
    const updatedPlayer: Player = {
      ...currentPlayer,
      presents: updatedPresents,
    };

    const updatedPlayers = players.map((p: Player) => (p.id === currentPlayer.id ? updatedPlayer : p));
    setPlayers(updatedPlayers);
    setCurrentPlayer(updatedPlayer);
    playSoundEffect(soundEffects["UI_Post_Delete"].audioUrl);
    setDeletePresentId(null);
  };

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
        isOpen={deletePresentId !== null}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeletePresentId(null)}
      />
    </>
  );
}

export default PrepareGiftsComponent;
