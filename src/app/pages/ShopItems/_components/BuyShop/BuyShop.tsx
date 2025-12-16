import { useContext, useState } from "react";
import { GameContext } from "@/context/GameContext";
import { ShopItem } from "@/types/general";
import Card from "@/components/Card/Card";
import { Typography } from "@/components";
import BuyModal from "./BuyModal/BuyModal";
import * as styles from "./BuyShop.styles";

function BuyShop(): React.ReactNode {
  const { shopItems } = useContext(GameContext);
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);

  return (
    <>
      <div css={styles.cardsGrid}>
        {shopItems.map((item) => (
          <Card
            key={item.id}
            css={[styles.shopCard, item.sold && styles.shopCardDisabled]}
            onClick={() => !item.sold && setSelectedItem(item)}
          >
            <img src={item.imageURL} alt={item.name} css={[styles.itemImage, item.sold && styles.itemImageDisabled]} />
            <Typography variant="body" size="md" css={[styles.itemName, item.sold && styles.itemNameDisabled]}>
              {item.name}
            </Typography>
            <Typography variant="body" size="sm" css={[styles.itemPrice, item.sold && styles.itemPriceDisabled]}>
              {item.sold ? "SOLD OUT" : `${item.cost.toLocaleString()} Bells`}
            </Typography>
          </Card>
        ))}
      </div>
      <BuyModal
        isOpen={selectedItem !== null}
        item={selectedItem}
        onBuy={() => setSelectedItem(null)}
        onCancel={() => setSelectedItem(null)}
      />
    </>
  );
}

export default BuyShop;

