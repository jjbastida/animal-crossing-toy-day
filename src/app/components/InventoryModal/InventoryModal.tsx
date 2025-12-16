import { useContext } from "react";
import { GameContext } from "@/context/GameContext";
import Modal, { ModalTitle, ModalGrid, ModalItem } from "@/components/Modal/Modal";
import Tooltip from "@/components/Tooltip/Tooltip";
import * as styles from "./InventoryModal.styles";
import pluralize from "pluralize";
import { InventoryModalProps } from "./InventoryModal.types";

const MIN_SLOTS = 12;

function InventoryModal({ isOpen, onClose }: InventoryModalProps): React.ReactNode {
  const { currentPlayer } = useContext(GameContext);
  const inventory = currentPlayer?.inventory || [];
  const totalSlots = Math.max(MIN_SLOTS, inventory.length);
  const emptySlots = totalSlots - inventory.length;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalTitle>Inventory</ModalTitle>
      <ModalGrid css={styles.inventoryGrid}>
        {inventory.map((item, index) => (
          <ModalItem key={`${item.name}-${index}`}>
            <Tooltip label={pluralize(item.name, item.count || 1)} position="top">
              <div css={styles.inventorySlot}>
                <img src={item.imageURL} alt={item.name} css={styles.itemImage} />
                {item.count && item.count > 1 && <span css={styles.itemCount}>{item.count}</span>}
              </div>
            </Tooltip>
          </ModalItem>
        ))}
        {Array.from({ length: emptySlots }).map((_, index) => (
          <ModalItem key={`empty-${index}`}>
            <div css={styles.emptySlot} />
          </ModalItem>
        ))}
      </ModalGrid>
    </Modal>
  );
}

export default InventoryModal;
