import { Typography } from "@components";
import itemIcons from "@data/item_icons.json";
import { BellsSectionProps } from "./BellsSection.types";
import * as styles from "./BellsSection.styles";

function BellsSection({ bellsPoints }: BellsSectionProps): React.ReactNode {
  return (
    <div css={styles.bellsSection}>
      <div css={styles.bellsLabelContainer}>
      <Typography variant="body" size="sm" css={styles.bellsLabel}>
        <img
          src={itemIcons["1-000-bells"].imageUrl}
          alt="Bells"
          css={styles.imageIcon}
        />{" "}
        {bellsPoints * 100} Bells
      </Typography>
      </div>
      <div css={styles.pointsValue}>
        <img
          src={itemIcons["pisces-fragment"].imageUrl}
          alt="Points"
          css={styles.imageIcon}
        />
        <Typography variant="body" size="sm">
          {bellsPoints}
        </Typography>
      </div>
    </div>
  );
}

export default BellsSection;

