export type ResourceType = "fruit" | "fish" | "bugs" | "sea-creatures" | "fossils";

export interface ResourceConfig {
  name: string;
  requiredItem: string | null;
  icon: string;
  tooltip: string;
  flavourText: string;
}

export interface ResourceCardProps {
  resourceType: ResourceType;
  config: ResourceConfig;
  isEnabled: boolean;
  onClick: (resourceType: ResourceType) => void;
}

