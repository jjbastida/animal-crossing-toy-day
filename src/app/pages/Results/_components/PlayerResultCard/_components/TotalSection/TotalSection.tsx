import { Typography } from "@components";
import itemIcons from "@data/item_icons.json";
import { TotalSectionProps } from "./TotalSection.types";
import * as styles from "./TotalSection.styles";

function TotalSection({ totalPoints }: TotalSectionProps): React.ReactNode {
  return (
    <div css={styles.totalSection}>
      <Typography variant="display" size="2xl" css={styles.totalLabel}>
        Total
      </Typography>
      <div css={styles.totalPoints}>
        <img
          src={itemIcons["pisces-fragment"].imageUrl}
          alt="Points"
          css={styles.imageIcon}
        />
        <Typography variant="display" size="2xl">
          {totalPoints}
        </Typography>
      </div>
    </div>
  );
}

export default TotalSection;

