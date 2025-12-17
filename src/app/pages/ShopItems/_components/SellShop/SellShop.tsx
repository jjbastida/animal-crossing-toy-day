import { useContext, useState } from "react";
import { GameContext } from "@/context/GameContext";
import { Item } from "@/types/general";
import SellModal from "./SellModal/SellModal";
import canSellItem from "./utils/canSellItem";
import { getItemSellValue } from "../utils/itemLookups";
import { Item as ItemComponent } from "@/components";
import * as styles from "./SellShop.styles";

const MIN_INVENTORY_SLOTS = 12;

function SellShop(): React.ReactNode {
  const { currentPlayer, setActionUsed } = useContext(GameContext);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const inventory = currentPlayer?.inventory || [];
  const totalInventorySlots = Math.max(MIN_INVENTORY_SLOTS, inventory.length);
  const emptyInventorySlots = totalInventorySlots - inventory.length;

  function handleSellItem(item: Item): void {
    setSelectedItem(item);
    setActionUsed(true);
  }

  return (
    <>
      <div css={styles.inventoryGrid}>
        {inventory.map((item, index) => {
          const canSell = canSellItem(item);
          return (
            <ItemComponent
              key={`${item.name}-${index}`}
              item={item}
              disabled={!canSell}
              onClick={() => canSell && setSelectedItem(item)}
            />
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
        value={selectedItem ? getItemSellValue(selectedItem, currentPlayer) : 0}
        onSell={handleSellItem}
        onCancel={() => setSelectedItem(null)}
      />
    </>
  );
}

export default SellShop;
