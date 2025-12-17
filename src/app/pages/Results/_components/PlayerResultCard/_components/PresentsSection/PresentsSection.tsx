import { Typography } from "@components";
import itemIcons from "@data/item_icons.json";
import PresentItem from "./_components/PresentItem/PresentItem";
import { PresentsSectionProps } from "./PresentsSection.types";
import * as styles from "./PresentsSection.styles";

function PresentsSection({ presentDetails }: PresentsSectionProps): React.ReactNode {
  return (
    <div css={styles.section}>
      <Typography variant="display" size="2xl" as="h3" css={styles.sectionTitle}>
        <img src={itemIcons["present"].imageUrl} alt="Presents" css={styles.imageIcon} /> Presents
      </Typography>
      <div css={styles.presentsGrid}>
        {presentDetails.length > 0 ? (
          presentDetails.map(({ present, points }) => (
            <PresentItem key={present.id} name={present.items.name} points={points} />
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
