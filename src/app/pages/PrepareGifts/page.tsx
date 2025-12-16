import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import PrepareGiftsComponent from "./_components/PrepareGiftsComponent";
import { pageContainer } from "./PrepareGifts.styles.ts";
import { Button } from "@/components";

function PrepareGiftsPage(): React.ReactNode {
  const { completePlayerAction } = useContext(GameContext);

  return (
    <div css={pageContainer}>
      <PrepareGiftsComponent />
      <Button variant="secondary" onClick={completePlayerAction}>
        Done
      </Button>
    </div>
  );
}

export default PrepareGiftsPage;
