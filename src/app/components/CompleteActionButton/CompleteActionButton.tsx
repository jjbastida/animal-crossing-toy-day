import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { Button } from "@/components";
import { CompleteActionButtonProps } from "./CompleteActionButton.types";
import * as styles from "./CompleteActionButton.styles";

function CompleteActionButton({
  variant = "primary",
  onClick,
  css: cssProp,
  children,
  ...rest
}: CompleteActionButtonProps): React.ReactNode {
  const { completePlayerAction, actionsRemaining } = useContext(GameContext);

  function handleClick(): void {
    completePlayerAction();
    onClick?.();
  }

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      css={[styles.button, cssProp]}
      soundEffect={actionsRemaining >= 2 ? "UI_Cmn_Open_Short" : "Event_Quest_Finish"}
      {...rest}
    >
      {actionsRemaining >= 2 ? children : "End turn"}
    </Button>
  );
}

export default CompleteActionButton;
