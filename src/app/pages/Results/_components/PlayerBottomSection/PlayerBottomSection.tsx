import { Typography } from "@components";
import villagerIcons from "@data/villager_icons.json";
import { PlayerBottomSectionProps } from "./PlayerBottomSection.types";
import * as styles from "./PlayerBottomSection.styles";

function getStandingSuffix(standing: number): string {
  if (standing === 1) return "st";
  if (standing === 2) return "nd";
  if (standing === 3) return "rd";
  return "th";
}

function PlayerBottomSection({
  avatar,
  playerName,
  standing,
}: PlayerBottomSectionProps): React.ReactNode {
  return (
    <div css={styles.playerBottomSection}>
      <Typography variant="display" size="3xl" css={styles.playerStanding}>
        {standing}{getStandingSuffix(standing)}
      </Typography>
      {avatar && (
        <img
          src={villagerIcons[avatar].imageUrl}
          alt={playerName || "Player"}
          css={styles.playerAvatar}
        />
      )}
    </div>
  );
}

export default PlayerBottomSection;

