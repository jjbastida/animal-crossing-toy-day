import { ActionText, Card, Typography } from "@components";
import PresentsSection from "./_components/PresentsSection/PresentsSection";
import BellsSection from "./_components/BellsSection/BellsSection";
import TotalSection from "./_components/TotalSection/TotalSection";
import PlayerBottomSection from "../PlayerBottomSection/PlayerBottomSection";
import { PlayerResultCardProps } from "./PlayerResultCard.types";
import * as styles from "./PlayerResultCard.styles";

function PlayerResultCard({
  player,
  totalPoints,
  bellsPoints,
  scoredPresents,
  playerColor,
  standing,
}: PlayerResultCardProps): React.ReactNode {
  return (
    <div css={styles.playerColumn}>
      <Typography
        as={standing === 1 ? ActionText : "h2"}
        variant="display"
        size="2xl"
        css={styles.playerName(playerColor)}
      >
        {player.name}
      </Typography>
      <Card css={styles.totalCard}>
        <div css={styles.scrollableContent}>
          <PresentsSection scoredPresents={scoredPresents} />
          <BellsSection bellsPoints={bellsPoints} />
        </div>
        <TotalSection totalPoints={totalPoints} playerColor={playerColor} />
      </Card>
      <PlayerBottomSection
        avatar={player.avatar}
        playerName={player.name || "Player"}
        standing={standing}
      />
    </div>
  );
}

export default PlayerResultCard;
