import { useContext } from "react";
import { GameContext } from "@/context/GameContext";
import { Modal, Button, Typography } from "@/components";
import { ShopItem } from "@/types/general";
import itemIcons from "@data/item_icons.json";
import * as styles from "./BuyModal.styles";
import { BuyModalProps } from "./BuyModal.types";
import {
  getLatestPlayer,
  updatePlayerInventory,
  updatePlayerInPlayersArray,
} from "../../utils/playerState";
import { isFurniture } from "../../utils/itemLookups";
import { getTagBasedAbilityDescription } from "@/pages/Results/_helpers/tagActions";
import Tooltip from "@/components/Tooltip/Tooltip";

function BuyModal({ isOpen, item, onBuy, onCancel }: BuyModalProps): React.ReactNode {
  const { currentPlayer, setCurrentPlayer, players, setPlayers, shopItems, setShopItems } =
    useContext(GameContext);

  if (!isOpen || !item) return null;

  const itemData = item as ShopItem;
  const latestPlayer = getLatestPlayer(players, currentPlayer);
  const tagAbility = getTagBasedAbilityDescription(itemData.name);
  const ability = isFurniture(itemData.name)
    ? tagAbility || "Can be wrapped as a present for points."
    : "";
  const couponItem = latestPlayer?.inventory?.find((invItem) => invItem.name === "Shop Coupon");
  const canAfford = (latestPlayer?.bells || 0) >= (itemData.cost || 0);

  function handleBuy(): void {
    if (!latestPlayer || !itemData) return;

    const updatedInventory = updatePlayerInventory(latestPlayer, itemData, 1);
    const updatedPlayer = {
      ...latestPlayer,
      inventory: updatedInventory,
      bells: (latestPlayer.bells || 0) - (itemData.cost || 0),
    };

    setCurrentPlayer(updatedPlayer);
    setPlayers(updatePlayerInPlayersArray(players, updatedPlayer));
    setShopItems(
      shopItems.map((shopItem) =>
        shopItem.id === itemData.id ? { ...shopItem, sold: true } : shopItem,
      ),
    );
    onBuy();
  }

  function handleUseCoupon(): void {
    if (!latestPlayer || !itemData || !couponItem) return;

    const currentInventory = latestPlayer.inventory || [];
    const couponIndex = currentInventory.findIndex((invItem) => invItem.name === "Shop Coupon");
    if (couponIndex === -1) return;

    const updatedInventory = [...currentInventory];
    const coupon = updatedInventory[couponIndex];

    if (coupon.count && coupon.count > 1) {
      updatedInventory[couponIndex] = { ...coupon, count: coupon.count - 1 };
    } else {
      updatedInventory.splice(couponIndex, 1);
    }

    const finalInventory = updatePlayerInventory(
      { ...latestPlayer, inventory: updatedInventory },
      itemData,
      1,
    );

    const updatedPlayer = {
      ...latestPlayer,
      inventory: finalInventory,
    };

    setCurrentPlayer(updatedPlayer);
    setPlayers(updatePlayerInPlayersArray(players, updatedPlayer));
    setShopItems(
      shopItems.map((shopItem) =>
        shopItem.id === itemData.id ? { ...shopItem, sold: true } : shopItem,
      ),
    );
    onBuy();
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
          <Typography variant="body" size="lg" css={styles.itemPrice}>
            <img src={itemIcons["1-000-bells"].imageUrl} alt="Bell" css={styles.imageIcon} />{" "}
            {(itemData.cost || 0).toLocaleString()} Bells
          </Typography>
        </div>
      </div>
      <div css={styles.modalActions}>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Tooltip label="You don't have enough bells." disabled={canAfford}>
          <Button variant="primary" onClick={handleBuy} disabled={!canAfford}>
            Buy item
          </Button>
        </Tooltip>
        {couponItem && (
          <Button variant="secondary" onClick={handleUseCoupon} css={styles.couponButton}>
            <img src={couponItem.imageURL} alt="Shop Coupon" css={styles.imageIcon} />
            <span css={styles.couponText}>x {couponItem.count || 1} Use coupon</span>
          </Button>
        )}
      </div>
    </Modal>
  );
}

export default BuyModal;
