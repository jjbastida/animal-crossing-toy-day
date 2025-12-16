import { Item } from "@/types/general";
import { ResourceType, ResourceConfig } from "../ResourceCard/ResourceCard.types";

export interface ResourceCollectionModalProps {
  isOpen: boolean;
  selectedResource: ResourceType | null;
  resourceConfig: ResourceConfig | null;
  collectedItem: Item | null;
  onAddToInventory: () => void;
  onClose: () => void;
}

