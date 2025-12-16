import { useContext, useState } from "react";
import { GameContext } from "@/context/GameContext";
import { Modal, Button, Typography, NumberInput } from "@/components";
import itemIcons from "@data/item_icons.json";
import * as styles from "./SellModal.styles";
import { SellModalProps } from "./SellModal.types";
import { getLatestPlayer, removeItemFromInventory, updatePlayerInPlayersArray } from "../../utils/playerState";
import { isFurniture, isTool } from "../../utils/itemLookups";

function SellModal({ isOpen, item, value, onSell, onCancel }: SellModalProps): React.ReactNode {
  const { currentPlayer, setCurrentPlayer, players, setPlayers } = useContext(GameContext);
  const [quantity, setQuantity] = useState<number>(1);

  if (!isOpen || !item) return null;

  const itemData = item;
  const latestPlayer = getLatestPlayer(players, currentPlayer);
  const maxQuantity = itemData.count || 1;
  const canSellMultiple = maxQuantity > 1;
  const totalValue = value * quantity;

  let ability = "";
  if (isFurniture(itemData.name)) {
    ability = "Can be wrapped as a present for points.";
  } else if (isTool(itemData.name)) {
    ability = itemData.description || "";
  }

  function handleSell(): void {
    if (!latestPlayer || !itemData) return;

    const updatedInventory = removeItemFromInventory(latestPlayer, itemData.name, quantity);
    const updatedPlayer = {
      ...latestPlayer,
      inventory: updatedInventory,
      bells: (latestPlayer.bells || 0) + totalValue,
    };

    setCurrentPlayer(updatedPlayer);
    setPlayers(updatePlayerInPlayersArray(players, updatedPlayer));
    onSell();
  }

  return (
    <Modal isOpen={isOpen} onClose={onCancel} css={styles.modalWrapper}>
      <Modal.Title>{itemData.name}</Modal.Title>
      <div css={styles.modalItemContainer}>
        <div css={styles.modalImageContainer}>
          <img src={itemData.imageURL} alt={itemData.name} css={styles.modalItemImage} />
        </div>
        <div css={styles.modalContentContainer}>
          {itemData.description && (
            <Typography variant="body" size="md" css={styles.itemDescription}>
              {itemData.description}
            </Typography>
          )}
          <Typography variant="body" size="sm" css={styles.itemAbility}>
            {ability}
          </Typography>
          {canSellMultiple && (
            <div css={styles.quantityContainer}>
              <Typography variant="body" size="md" css={styles.quantityLabel}>
                Quantity to sell:
              </Typography>
              <NumberInput
                value={quantity}
                min={1}
                max={maxQuantity}
                onChange={setQuantity}
              />
              <Typography variant="body" size="sm" css={styles.quantityMax}>
                (Max: {maxQuantity})
              </Typography>
            </div>
          )}
          <Typography variant="body" size="lg" css={styles.itemPrice}>
            Sell for <img src={itemIcons["1-000-bells"].imageUrl} alt="Bell" css={styles.imageIcon} /> {totalValue.toLocaleString()} Bells
            {canSellMultiple && quantity > 1 && (
              <span css={styles.priceBreakdown}>
                {" "}({quantity} × {value.toLocaleString()})
              </span>
            )}
          </Typography>
        </div>
      </div>
      <div css={styles.modalActions}>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSell}>
          Sell
        </Button>
      </div>
    </Modal>
  );
}

export default SellModal;

