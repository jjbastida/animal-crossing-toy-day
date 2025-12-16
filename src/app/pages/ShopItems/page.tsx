import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import ShopItemsComponent from "./_components/ShopItemsComponent";
import { pageContainer, completeButton } from "./ShopItems.styles.ts";

function ShopItemsPage(): React.ReactNode {
  const { completePlayerAction } = useContext(GameContext);

  return (
    <div css={pageContainer}>
      <ShopItemsComponent />
      <button css={completeButton} onClick={completePlayerAction}>
        Complete Action
      </button>
    </div>
  );
}

export default ShopItemsPage;
