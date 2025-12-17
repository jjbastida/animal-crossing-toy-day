import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { Button } from "@/components";
import { CompleteActionButtonProps } from "./CompleteActionButton.types";
import * as styles from "./CompleteActionButton.styles";

function CompleteActionButton({
  variant = "primary",
  css: cssProp,
  children,
}: CompleteActionButtonProps): React.ReactNode {
  const { completePlayerAction, actionsRemaining } = useContext(GameContext);

  return (
    <Button
      variant={variant}
      onClick={completePlayerAction}
      css={[styles.button, cssProp]}
      soundEffect={actionsRemaining >= 2 ? "UI_Cmn_Open_Short" : "Event_Quest_Finish"}
    >
      {actionsRemaining >= 2 ? children : "End turn"}
    </Button>
  );
}

export default CompleteActionButton;
