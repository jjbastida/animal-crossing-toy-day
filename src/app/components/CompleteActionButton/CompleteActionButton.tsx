import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { Button } from "@/components";
import { CompleteActionButtonProps } from "./CompleteActionButton.types";
import * as styles from "./CompleteActionButton.styles";

function CompleteActionButton({
  variant = "primary",
  css: cssProp,
}: CompleteActionButtonProps): React.ReactNode {
  const { completePlayerAction, actionsRemaining } = useContext(GameContext);

  return (
    <Button variant={variant} onClick={completePlayerAction} css={[styles.button, cssProp]}>
      {actionsRemaining >= 2 ? "Finish action" : "End turn"}
    </Button>
  );
}

export default CompleteActionButton;

