import React from "react";
import { Card, Typography } from "@/components";
import Tooltip from "@/components/Tooltip/Tooltip";
import * as styles from "./ResourceCard.styles";

export type ResourceType = "fruit" | "fish" | "bugs" | "sea-creatures" | "fossils";

export interface ResourceConfig {
  name: string;
  requiredItem: string | null;
  icon: string;
  tooltip: string;
  flavourText: string;
}

interface ResourceCardProps {
  resourceType: ResourceType;
  config: ResourceConfig;
  isEnabled: boolean;
  onClick: (resourceType: ResourceType) => void;
}

function ResourceCard({
  resourceType,
  config,
  isEnabled,
  onClick,
}: ResourceCardProps): React.ReactNode {
  return (
    <Tooltip label={config.tooltip} css={resourceType === "fruit" && styles.tallCard}>
      <Card
        css={[styles.resourceCard, !isEnabled && styles.disabledCard]}
        onClick={() => isEnabled && onClick(resourceType)}
      >
        <img src={config.icon} alt={config.name} css={styles.resourceIcon} />
        <div css={styles.resourceContent}>
          <Typography variant="body" size="lg" css={styles.resourceName}>
            {config.name}
          </Typography>
          <Typography variant="body" size="sm" css={styles.requiredItem}>
            {config.requiredItem ? `A ${config.requiredItem} is needed.` : config.flavourText}
          </Typography>
        </div>
      </Card>
    </Tooltip>
  );
}

export default ResourceCard;
