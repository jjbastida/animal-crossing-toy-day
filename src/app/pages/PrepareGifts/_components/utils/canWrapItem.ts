import { Item } from "@/types/general";
import itemIcons from "@data/item_icons.json";
import furnitureData from "@data/filtered_furniture.json";

function canWrapItem(item: Item): boolean {
  const isFurniture = Object.values(furnitureData).some(
    (furniture) => furniture.name === item.name,
  );

  if (isFurniture) return true;

  const itemKey = Object.keys(itemIcons).find((key) => {
    const iconData = itemIcons[key as keyof typeof itemIcons];
    return iconData.name === item.name;
  });

  if (!itemKey) return false;

  const iconData = itemIcons[itemKey as keyof typeof itemIcons];
  return !("type" in iconData) || iconData.type !== "tool";
}

export default canWrapItem;
