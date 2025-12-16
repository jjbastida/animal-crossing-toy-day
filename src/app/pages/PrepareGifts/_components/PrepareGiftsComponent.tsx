import { useContext, useState, useCallback } from "react";
import { GameContext } from "@/context/GameContext";
import { Item, Present } from "@/types/general";
import useDrag from "@/hooks/useDrag";
import canWrapItem from "./utils/canWrapItem";
import PresentsGrid from "./PresentsGrid/PresentsGrid";
import InventoryList from "./InventoryList/InventoryList";
import DeletePresentModal from "./DeletePresentModal/DeletePresentModal";
import * as styles from "./PrepareGiftsComponent.styles";

function PrepareGiftsComponent(): React.ReactNode {
  const { currentPlayer, setCurrentPlayer } = useContext(GameContext);
  const [deletePresentId, setDeletePresentId] = useState<string | null>(null);

  const {
    draggedItem,
    draggedOverTarget,
    handleDragStart: dragStart,
    handleDragEnd: dragEnd,
    handleDragOver: dragOver,
    handleDragLeave: dragLeave,
    handleDrop: dragDrop,
  } = useDrag<Item>();

  const inventory = currentPlayer?.inventory || [];
  const presents = currentPlayer?.presents || [];
  const presentMap = new Map(presents.map((p) => [p.position, p]));

  const handleDragStart = useCallback(
    (item: Item, e: React.DragEvent): void => {
      dragStart(item, e, canWrapItem(item));
    },
    [dragStart],
  );

  const handleDrop = useCallback(
    (position: number): void => {
      dragDrop(position, (item: Item, targetPosition: number) => {
        if (!currentPlayer) return;
        if (presentMap.has(targetPosition)) return;
        if (!canWrapItem(item)) return;

        const newPresent: Present = {
          id: `present-${Date.now()}-${Math.random()}`,
          color: "#63BEAD",
          items: item,
          position: targetPosition,
        };

        const updatedInventory = inventory
          .map((invItem) => {
            if (invItem.name === item.name) {
              if (invItem.count && invItem.count > 1) {
                return { ...invItem, count: invItem.count - 1 };
              }
              return null;
            }
            return invItem;
          })
          .filter((invItem): invItem is Item => invItem !== null);

        const updatedPresents = [...presents, newPresent];

        setCurrentPlayer({
          ...currentPlayer,
          inventory: updatedInventory,
          presents: updatedPresents,
        });
      });
    },
    [currentPlayer, inventory, presents, presentMap, dragDrop],
  );

  const handlePresentClick = useCallback((present: Present): void => {
    setDeletePresentId(present.id);
  }, []);

  const handleConfirmDelete = useCallback((): void => {
    if (!deletePresentId || !currentPlayer) return;

    const presentToDelete = presents.find((p) => p.id === deletePresentId);
    if (!presentToDelete) return;

    const updatedPresents = presents.filter((p) => p.id !== deletePresentId);
    const updatedInventory = [...inventory];

    const existingItemIndex = updatedInventory.findIndex(
      (item) => item.name === presentToDelete.items.name,
    );

    if (existingItemIndex >= 0) {
      const existingItem = updatedInventory[existingItemIndex];
      updatedInventory[existingItemIndex] = {
        ...existingItem,
        count: (existingItem.count || 1) + 1,
      };
    } else {
      updatedInventory.push({
        ...presentToDelete.items,
        count: 1,
      });
    }

    setCurrentPlayer({
      ...currentPlayer,
      inventory: updatedInventory,
      presents: updatedPresents,
    });

    setDeletePresentId(null);
  }, [deletePresentId, currentPlayer, presents, inventory, setCurrentPlayer]);

  const handleCancelDelete = useCallback((): void => {
    setDeletePresentId(null);
  }, []);

  return (
    <>
      <div css={styles.container}>
        <PresentsGrid
          presents={presents}
          draggedOverSlot={draggedOverTarget}
          onPresentClick={handlePresentClick}
          onDragOver={(position, e) => {
            const present = presentMap.get(position);
            dragOver(position, e, !present && !!draggedItem);
          }}
          onDragLeave={dragLeave}
          onDrop={handleDrop}
        />
        <InventoryList inventory={inventory} onDragStart={handleDragStart} onDragEnd={dragEnd} />
      </div>

      <DeletePresentModal
        isOpen={deletePresentId !== null}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}

export default PrepareGiftsComponent;
