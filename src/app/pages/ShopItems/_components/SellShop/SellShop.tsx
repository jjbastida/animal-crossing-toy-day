import { useContext, useState } from "react";
import { GameContext } from "@/context/GameContext";
import { Item } from "@/types/general";
import SellModal from "./SellModal/SellModal";
import canSellItem from "./utils/canSellItem";
import { getItemSellValue } from "../utils/itemLookups";
import * as styles from "./SellShop.styles";

const MIN_INVENTORY_SLOTS = 12;

function SellShop(): React.ReactNode {
  const { currentPlayer } = useContext(GameContext);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const inventory = currentPlayer?.inventory || [];
  const totalInventorySlots = Math.max(MIN_INVENTORY_SLOTS, inventory.length);
  const emptyInventorySlots = totalInventorySlots - inventory.length;

  return (
    <>
      <div css={styles.inventoryGrid}>
        {inventory.map((item, index) => {
          const canSell = canSellItem(item);
          return (
            <div
              key={`${item.name}-${index}`}
              css={[styles.inventoryItem, !canSell && styles.inventoryItemDisabled]}
              onClick={() => canSell && setSelectedItem(item)}
            >
              <div css={styles.inventorySlot}>
                <img
                  src={item.imageURL}
                  alt={item.name}
                  css={[styles.itemImage, !canSell && styles.itemImageDisabled]}
                />
                {item.count && item.count > 1 && (
                  <span css={styles.itemCount}>{item.count}</span>
                )}
              </div>
            </div>
          );
        })}
        {Array.from({ length: emptyInventorySlots }).map((_, index) => (
          <div key={`empty-${index}`} css={styles.inventoryItem}>
            <div css={styles.emptySlot} />
          </div>
        ))}
      </div>
      <SellModal
        isOpen={selectedItem !== null}
        item={selectedItem}
        value={selectedItem ? getItemSellValue(selectedItem.name, selectedItem.cost, selectedItem.value) : 0}
        onSell={() => setSelectedItem(null)}
        onCancel={() => setSelectedItem(null)}
      />
    </>
  );
}

export default SellShop;

