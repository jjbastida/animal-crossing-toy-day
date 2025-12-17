import { ItemCountProps } from "./ItemCount.types";
import * as styles from "./ItemCount.styles";
import { Typography } from "@components";

function ItemCount({ count, css }: ItemCountProps): React.ReactNode {
  return (
    <div css={[styles.itemCount, css]}>
      <Typography variant="body" size="xs">
        {count}
      </Typography>
    </div>
  );
}

export default ItemCount;

