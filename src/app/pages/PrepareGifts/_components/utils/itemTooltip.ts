import { Item } from "@/types/general";
import furnitureData from "@data/furniture.json";
import { getTagBasedAbilityDescription } from "@/pages/Results/_helpers/tagActions";

const furniturePointMap = new Map(Object.values(furnitureData).map((f) => [f.name, f.pointScore]));

export function getItemBasePoints(item: Item): number {
  return furniturePointMap.get(item.name) || 0;
}

export function getItemTooltipText(item: Item): string {
  const abilityDescription = getTagBasedAbilityDescription(item.name);
  if (abilityDescription) {
    return abilityDescription;
  }

  const basePoints = getItemBasePoints(item);
  if (basePoints > 0) {
    return `Can be wrapped for ${basePoints} points`;
  }

  return "Can be wrapped for points";
}
