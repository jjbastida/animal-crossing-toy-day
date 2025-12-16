import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { Typography } from "@components";
import {
  pageContainer,
  contentCard,
  section,
  statRow,
  statLabel,
  statValue,
} from "./Results.styles.ts";

function ResultsPage(): React.ReactNode {
  const { player, resources, gifts, items } = useContext(GameContext);

  return (
    <div css={pageContainer}>
      <div css={contentCard}>
        <Typography variant="display" size="4xl" as="h1">
          Game Complete!
        </Typography>

        <div css={section}>
          <Typography variant="display" size="2xl" as="h2">
            {player?.name}
          </Typography>
          <Typography variant="body" size="lg">
            {player?.characterClass}
          </Typography>
        </div>

        <div css={section}>
          <Typography variant="display" size="xl" as="h3">
            Final Stats
          </Typography>

          <div css={statRow}>
            <div css={statLabel}>Resources Collected</div>
            <div css={statValue}>{resources}</div>
          </div>

          <div css={statRow}>
            <div css={statLabel}>Gifts Prepared</div>
            <div css={statValue}>{gifts.length}</div>
          </div>

          <div css={statRow}>
            <div css={statLabel}>Items Purchased</div>
            <div css={statValue}>{items.length}</div>
          </div>
        </div>

        {gifts.length > 0 && (
          <div css={section}>
            <Typography variant="display" size="lg" as="h3">
              Your Gifts
            </Typography>
            {gifts.map((gift) => (
              <div css={statRow} key={gift.id}>
                <div css={statLabel}>{gift.name}</div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div css={section}>
            <Typography variant="display" size="lg" as="h3">
              Your Items
            </Typography>
            {items.map((item) => (
              <div css={statRow} key={item.id}>
                <div css={statLabel}>{item.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
