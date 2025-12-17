import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { Button } from "@/components";
import { ActionButtonProps } from "./ActionButton.types.ts";
import * as styles from "./ActionButton.styles";

function ActionButton({
  variant = "primary",
  onClick,
  css: cssProp,
  children,
  disabled,
  ...rest
}: ActionButtonProps): React.ReactNode {
  const { completePlayerAction, actionsRemaining, actionUsed } = useContext(GameContext);

  function handleClick(): void {
    if (!actionUsed) return;
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
      disabled={!actionUsed || disabled}
    >
      {actionsRemaining >= 2 ? children : "End turn"}
    </Button>
  );
}

export default ActionButton;
