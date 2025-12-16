import React from "react";
import { Card, Typography } from "@/components";
import Tooltip from "@/components/Tooltip/Tooltip";
import * as styles from "./ResourceCard.styles";
import { ResourceType, ResourceConfig, ResourceCardProps } from "./ResourceCard.types";

export type { ResourceType, ResourceConfig };

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
