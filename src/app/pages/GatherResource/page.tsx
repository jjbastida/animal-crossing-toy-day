import ResourceTiles from "./_components/ResourceTiles";
import { Typography } from "@/components";
import * as styles from "./GatherResource.styles.ts";

function GatherResourcePage(): React.ReactNode {
  return (
    <div css={styles.pageContainer}>
      <Typography variant="display" size="3xl" css={styles.title}>
        Gather Resources
      </Typography>
      <ResourceTiles />
    </div>
  );
}

export default GatherResourcePage;
