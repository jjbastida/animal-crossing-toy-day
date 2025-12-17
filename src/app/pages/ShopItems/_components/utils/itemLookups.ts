import furnitureData from "@data/furniture.json";
import itemIcons from "@data/item_icons.json";
import fishIcons from "@data/fish_icons.json";
import bugIcons from "@data/bug_icons.json";
import fossilIcons from "@data/fossil_icons.json";
import seaCreatureIcons from "@data/sea_creatures_icons.json";
import fruitIcons from "@data/fruit_icons.json";
import { Item, Player } from "@/types/general";

const furnitureNameSet = new Set(Object.values(furnitureData).map((f) => f.name));
const fruitNameSet = new Set(Object.values(fruitIcons).map((f) => f.name));

const furniturePriceMap = new Map(
  Object.values(furnitureData).map((f) => [f.name, f.buyPrice || 0]),
);

const PRICE_MAPS = [
  { map: fishIcons, getValue: (item: any) => item.sellPrice || 0 },
  { map: bugIcons, getValue: (item: any) => item.sellPrice || 0 },
  { map: fossilIcons, getValue: (item: any) => item.sellPrice || 0 },
  { map: seaCreatureIcons, getValue: () => Math.floor(Math.random() * 10000) + 50 },
];

const itemIconMap = new Map(
  Object.entries(itemIcons).map(([key, data]) => [data.name, { key, data }]),
);

const furnitureTagMap = new Map(Object.values(furnitureData).map((f) => [f.name, f.tag]));

export function isFurniture(itemName: string): boolean {
  return furnitureNameSet.has(itemName);
}

export function getItemTag(itemName: string): string | undefined {
  return furnitureTagMap.get(itemName);
}

export function getItemSellValue(item: Item, player?: Player | null): number {
  if (item.value !== undefined) {
    return item.value;
  }

  if (fruitNameSet.has(item.name) && player?.fruitValue !== undefined) {
    return player.fruitValue;
  }

  const furniturePrice = furniturePriceMap.get(item.name);
  if (furniturePrice !== undefined) {
    return Math.floor(furniturePrice * 0.5);
  }

  for (const { map, getValue } of PRICE_MAPS) {
    const itemData = Object.values(map).find((mapItem) => mapItem.name === item.name);
    if (itemData) {
      return getValue(itemData);
    }
  }

  return Math.floor((item.cost ?? 100) * 0.5);
}

export function getItemIconData(
  itemName: string,
): { key: string; data: (typeof itemIcons)[keyof typeof itemIcons] } | null {
  return itemIconMap.get(itemName) || null;
}

export function isTool(itemName: string): boolean {
  const iconData = getItemIconData(itemName);
  return iconData ? "type" in iconData.data && iconData.data.type === "tool" : false;
}
