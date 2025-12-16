import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import villagerIcons from "@data/villager_icons.json";
import itemIcons from "@data/item_icons.json";
import * as styles from "./Navigation.styles";
import Typography from "../Typography/Typography";
import { formatMoney } from "../../helper/general";
import usePlayerColor from "@/hooks/usePlayerColor";

function Navigation(): React.ReactNode {
  const { currentPlayer } = useContext(GameContext);
  const { playerColor } = usePlayerColor(currentPlayer);

  return (
    <>
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
    </>
  );
}

export default Navigation;
