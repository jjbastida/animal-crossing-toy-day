import { useState } from "react";
import { ActionButton, Tabs, Typography } from "@/components";
import BuyShop from "./_components/BuyShop/BuyShop";
import SellShop from "./_components/SellShop/SellShop";
import * as styles from "./ShopItems.styles";
import itemIcons from "@data/item_icons.json";

type TabType = "buy" | "sell";

function ShopItemsPage(): React.ReactNode {
  const [activeTab, setActiveTab] = useState<TabType>("buy");

  const tabs = [
    { value: "buy" as TabType, label: "Buy" },
    { value: "sell" as TabType, label: "Sell" },
  ];

  return (
    <div css={styles.pageContainer}>
      <div css={styles.container}>
        <div css={styles.textContainer}>
        <Typography variant="display" size="3xl" css={styles.title}>
          <img src={itemIcons["furniture"].imageUrl} alt="Shop" css={styles.shopIcon} /> Nook's Shop
        </Typography>
        <Typography variant="body" size="md" css={styles.description}>
          Buy and sell items here using your bells.
        </Typography>
        </div>
        <div css={styles.buttonContainer}>
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <ActionButton>Finish action</ActionButton>
        </div>
        {activeTab === "buy" && <BuyShop />}
        {activeTab === "sell" && <SellShop />}
      </div>
    </div>
  );
}

export default ShopItemsPage;
