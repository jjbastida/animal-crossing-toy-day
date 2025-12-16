import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import villagerIcons from "@data/villager_icons.json";
import itemIcons from "@data/item_icons.json";
import * as styles from "./Navigation.styles";
import Typography from "../Typography/Typography";
import { formatMoney } from "../../helper/general";
import usePlayerColor from "@/hooks/usePlayerColor";

function Navigation(): React.ReactNode {
  const { currentRound, totalRounds, actionsRemaining, currentPlayer } = useContext(GameContext);
  const { playerColor } = usePlayerColor(currentPlayer);

  return (
    <>
      <Typography
        variant="body"
        size="md"
        css={styles.pillContainer(playerColor)}
        style={{ top: "2rem", left: "2rem" }}
      >
        Round {currentRound} / {totalRounds}
      </Typography>
      {currentPlayer && (
        <div css={styles.playerInfoContainer}>
          {currentPlayer.avatar && (
            <img
              src={villagerIcons[currentPlayer.avatar].imageUrl}
              alt={currentPlayer.name || "Player"}
              css={styles.avatar}
            />
          )}
          <div css={styles.playerInfo}>
            <Typography variant="body" size="xs" css={styles.playerName(playerColor)}>
              {currentPlayer.name || "Player"}
            </Typography>
            <Typography variant="body" size="lg" css={styles.bells}>
              <img src={itemIcons["30-000-bells"].imageUrl} alt="Bells" css={styles.bellIcon} />{" "}
              {formatMoney(currentPlayer.bells ?? 0)}
            </Typography>
          </div>
        </div>
      )}
      <Typography
        variant="body"
        size="md"
        css={styles.pillContainer(playerColor)}
        style={{ bottom: "2rem", left: "50%", transform: "translateX(-50%)", top: "auto" }}
      >
        {actionsRemaining} Actions Left
      </Typography>
    </>
  );
}

export default Navigation;
