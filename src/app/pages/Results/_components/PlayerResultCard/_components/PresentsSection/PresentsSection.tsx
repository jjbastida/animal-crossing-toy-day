import { Typography } from "@components";
import itemIcons from "@data/item_icons.json";
import PresentItem from "./_components/PresentItem/PresentItem";
import { PresentsSectionProps } from "./PresentsSection.types";
import * as styles from "./PresentsSection.styles";

function PresentsSection({ scoredPresents }: PresentsSectionProps): React.ReactNode {
  return (
    <div css={styles.section}>
      <Typography variant="display" size="2xl" as="h3" css={styles.sectionTitle}>
        <img src={itemIcons["present"].imageUrl} alt="Presents" css={styles.imageIcon} /> Presents
      </Typography>
      <div css={styles.presentsGrid}>
        {scoredPresents.length > 0 ? (
          scoredPresents.map(({ present, points, modifier }) => (
            <PresentItem key={present.id} item={present.item} points={points} modifier={modifier} />
          ))
        ) : (
          <Typography variant="body" size="sm" css={styles.emptyState}>
            No presents
          </Typography>
        )}
      </div>
    </div>
  );
}

export default PresentsSection;
