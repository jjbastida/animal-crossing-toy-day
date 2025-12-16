import React from "react";
import { Modal, Typography, Button } from "@/components";
import { ResourceType, ResourceConfig } from "../ResourceCard/ResourceCard.types";
import * as styles from "./ResourceCollectionModal.styles";
import pluralize from "pluralize";
import { ResourceCollectionModalProps } from "./ResourceCollectionModal.types";

function ResourceCollectionModal({
  isOpen,
  selectedResource,
  resourceConfig,
  collectedItem,
  onAddToInventory,
  onClose,
}: ResourceCollectionModalProps): React.ReactNode {
  if (!collectedItem) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} disableEscape={true} css={styles.modalWrapper}>
      <Modal.Title>Collected {resourceConfig?.name || ""}!</Modal.Title>
      <div css={styles.modalItemContainer}>
        <div css={styles.modalImageContainer}>
          <img src={collectedItem.imageURL} alt={collectedItem.name} css={styles.modalItemImage} />
          {collectedItem.count && collectedItem.count > 1 && (
            <Typography variant="body" size="sm" css={styles.itemCount}>
              ×{collectedItem.count}
            </Typography>
          )}
        </div>
        <div css={styles.modalContentContainer}>
          <Typography variant="body" size="md" css={styles.modalItemName}>
            {selectedResource !== "fruit"
              ? collectedItem.name
              : `You got ${collectedItem.count} ${pluralize(collectedItem.name, collectedItem.count)}`}
          </Typography>
          {collectedItem.description && (
            <Typography variant="body" size="sm" css={styles.itemDescription}>
              {collectedItem.description}
            </Typography>
          )}
        </div>
      </div>
      <div css={styles.modalActions}>
        <Button variant="secondary" onClick={onAddToInventory}>
          Add to Inventory
        </Button>
      </div>
    </Modal>
  );
}

export default ResourceCollectionModal;
