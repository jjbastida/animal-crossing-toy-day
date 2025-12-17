import { Typography } from "@components";
import itemIcons from "@data/item_icons.json";
import { PresentItemProps } from "./PresentItem.types";
import * as styles from "./PresentItem.styles";

function PresentItem({ item, points, modifier }: PresentItemProps): React.ReactNode {
  return (
    <div css={styles.presentItem}>
      <img src={item.imageURL} alt={item.name} css={styles.imageIcon} />
      <Typography variant="body" size="sm" css={styles.presentName}>
        {item.name}
      </Typography>
      <div css={styles.pointsValue}>
        <img src={itemIcons["pisces-fragment"].imageUrl} alt="Points" css={styles.imageIcon} />
        <Typography variant="body" size="sm">
          {modifier ? <>{points} <span css={styles.modifier}>x{modifier}</span></> : points}
        </Typography>
      </div>
    </div>
  );
}

export default PresentItem;
