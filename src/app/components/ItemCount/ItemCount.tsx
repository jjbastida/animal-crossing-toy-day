import { ItemCountProps } from "./ItemCount.types";
import * as styles from "./ItemCount.styles";
import { Typography } from "@components";

function ItemCount({ count, css, children }: ItemCountProps): React.ReactNode {
  return count && count > 1 ? (
    <div css={[styles.itemCount, css]}>
      {children}
        <Typography variant="body" size="xs" css={styles.itemCountChildren}>
          {count}
        </Typography>
      </div>
    ) : children;
}

export default ItemCount;

