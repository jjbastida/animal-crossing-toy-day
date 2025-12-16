import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import { ShopItem } from "../../../types/general";
import {
  container,
  title,
  resourceCount,
  itemsGrid,
  itemCard,
  itemName,
  itemCost,
  getButtonStyle,
  itemsList,
  item,
  titleSmall,
} from "./ShopItemsComponent.styles.ts";

function ShopItemsComponent(): React.ReactNode {
  const { shopItem, resources, items } = useContext(GameContext);

  const availableItems: ShopItem[] = [
    { id: 1, name: "Sword", cost: 5 },
    { id: 2, name: "Shield", cost: 3 },
    { id: 3, name: "Potion", cost: 2 },
    { id: 4, name: "Armor", cost: 8 },
  ];

  function handlePurchase(item: ShopItem): void {
    const success = shopItem(item);
    if (!success) {
      alert("Not enough resources!");
    }
  }

  return (
    <div css={container}>
      <h2 css={title}>Shop Items</h2>
      <div css={resourceCount}>Resources: {resources}</div>
      <div css={itemsGrid}>
        {availableItems.map((shopItem) => (
          <div css={itemCard} key={shopItem.id}>
            <div css={itemName}>{shopItem.name}</div>
            <div css={itemCost}>Cost: {shopItem.cost}</div>
            <button
              css={getButtonStyle(resources < shopItem.cost)}
              onClick={() => handlePurchase(shopItem)}
              disabled={resources < shopItem.cost}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <>
          <h2 css={titleSmall}>Your Items</h2>
          <div css={itemsList}>
            {items.map((ownedItem) => (
              <div css={item} key={ownedItem.id}>
                {ownedItem.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ShopItemsComponent;
