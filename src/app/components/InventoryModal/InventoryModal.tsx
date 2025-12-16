import { useContext } from "react";
import { GameContext } from "@/context/GameContext";
import Modal, { ModalTitle, ModalGrid, ModalItem } from "@/components/Modal/Modal";
import Tooltip from "@/components/Tooltip/Tooltip";
import { Item } from "@/types/general";
import * as styles from "./InventoryModal.styles";
import pluralize from "pluralize";

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function InventoryModal({ isOpen, onClose }: InventoryModalProps): React.ReactNode {
  const { currentPlayer } = useContext(GameContext);
  const inventory = currentPlayer?.inventory || [];
  const MIN_SLOTS = 12;
  const totalSlots = Math.max(MIN_SLOTS, inventory.length);
  const emptySlots = totalSlots - inventory.length;

  function renderTooltipContent(item: Item): React.ReactNode {
    return item.description || `${item.count}x ${pluralize(item.name, item.count)} `;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalTitle>Inventory</ModalTitle>
      <ModalGrid css={styles.inventoryGrid}>
        {inventory.map((item, index) => (
          <ModalItem key={`${item.name}-${index}`}>
            <Tooltip label={renderTooltipContent(item)} position="top">
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
