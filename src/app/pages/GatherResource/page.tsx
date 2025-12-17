import ResourceTiles from "./_components/ResourceTiles";
import { Typography } from "@/components";
import * as styles from "./GatherResource.styles.ts";

function GatherResourcePage(): React.ReactNode {
  return (
    <div css={styles.pageContainer}>
      <div css={styles.textContainer}>
        <Typography variant="display" size="3xl" css={styles.title}>
          Gather Resources
        </Typography>
        <Typography variant="body" size="md" css={styles.description}>
          Resources you collect will be added to your inventory and can be sold in Nook's Shop.
        </Typography>
      </div>
      <ResourceTiles />
    </div>
  );
}

export default GatherResourcePage;
