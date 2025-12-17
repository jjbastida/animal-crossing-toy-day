import { Typography } from "@components";
import itemIcons from "@data/item_icons.json";
import { PresentItemProps } from "./PresentItem.types";
import * as styles from "./PresentItem.styles";

function PresentItem({ name, points }: PresentItemProps): React.ReactNode {
  return (
    <div css={styles.presentItem}>
      <Typography variant="body" size="sm" css={styles.presentName}>
        {name}
      </Typography>
      <div css={styles.pointsValue}>
        <img
          src={itemIcons["pisces-fragment"].imageUrl}
          alt="Points"
          css={styles.imageIcon}
        />
        <Typography variant="body" size="sm">
          {points}
        </Typography>
      </div>
    </div>
  );
}

export default PresentItem;

