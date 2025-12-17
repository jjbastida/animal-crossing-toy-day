import furnitureData from "@data/furniture.json";
import itemIcons from "@data/item_icons.json";
import fishIcons from "@data/fish_icons.json";
import bugIcons from "@data/bug_icons.json";
import fossilIcons from "@data/fossil_icons.json";
import seaCreatureIcons from "@data/sea_creatures_icons.json";

const furnitureNameSet = new Set(Object.values(furnitureData).map((f) => f.name));

const furniturePriceMap = new Map(
  Object.values(furnitureData).map((f) => [f.name, f.buyPrice || 0]),
);

const fishPriceMap = new Map(
  Object.values(fishIcons).map((f) => [f.name, f.sellPrice || 0]),
);

const bugPriceMap = new Map(
  Object.values(bugIcons).map((b) => [b.name, b.sellPrice || 0]),
);

const fossilPriceMap = new Map(
  Object.values(fossilIcons).map((f) => [f.name, f.sellPrice || 0]),
);

const seaCreaturePriceMap = new Map(
  Object.values(seaCreatureIcons).map((s) => [s.name, Math.floor(Math.random() * 10000) + 50]),
);

const itemIconMap = new Map(
  Object.entries(itemIcons).map(([key, data]) => [data.name, { key, data }]),
);

const furnitureTagMap = new Map(
  Object.values(furnitureData).map((f) => [f.name, f.tag]),
);

export function isFurniture(itemName: string): boolean {
  return furnitureNameSet.has(itemName);
}

export function getItemTag(itemName: string): string | undefined {
  return furnitureTagMap.get(itemName);
}

export function getItemSellValue(itemName: string, itemCost?: number, itemValue?: number): number {
  if (itemValue !== undefined) {
    return itemValue;
  }

  const furniturePrice = furniturePriceMap.get(itemName);
  if (furniturePrice !== undefined) {
    return Math.floor(furniturePrice * 0.5);
  }

  const fishPrice = fishPriceMap.get(itemName);
  if (fishPrice !== undefined) {
    return fishPrice;
  }

  const bugPrice = bugPriceMap.get(itemName);
  if (bugPrice !== undefined) {
    return bugPrice;
  }

  const fossilPrice = fossilPriceMap.get(itemName);
  if (fossilPrice !== undefined) {
    return fossilPrice;
  }

  const seaCreaturePrice = seaCreaturePriceMap.get(itemName);
  if (seaCreaturePrice !== undefined) {
    return seaCreaturePrice;
  }

  return Math.floor((itemCost || 100) * 0.5);
}

export function getItemIconData(itemName: string): { key: string; data: (typeof itemIcons)[keyof typeof itemIcons] } | null {
  return itemIconMap.get(itemName) || null;
}

export function isTool(itemName: string): boolean {
  const iconData = getItemIconData(itemName);
  return iconData ? "type" in iconData.data && iconData.data.type === "tool" : false;
}

