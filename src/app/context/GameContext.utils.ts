import { Player, ShopItem } from "../types/general";
import itemIcons from "@data/item_icons.json";
import furnitureData from "@data/furniture.json";

export function getNextPlayerIndex(currentIndex: number, totalPlayers: number): number | null {
  const nextIndex = currentIndex + 1;
  return nextIndex < totalPlayers ? nextIndex : null;
}

export function findPlayerIndex(players: Player[], playerId: number): number {
  return players.findIndex((p) => p.id === playerId);
}

export function generateShopItems(): ShopItem[] {
  const toolEntries = Object.entries(itemIcons).filter(
    ([_, data]) => "type" in data && data.type === "tool",
  );
  const furnitureEntries = Object.entries(furnitureData);
  const shopItems: ShopItem[] = [];

  const randomTool = toolEntries[Math.floor(Math.random() * toolEntries.length)];
  shopItems.push({
    id: `tool-${Date.now()}-${Math.random()}`,
    name: randomTool[1].name,
    imageURL: randomTool[1].imageUrl,
    cost: 500,
    description: "description" in randomTool[1] ? randomTool[1].description : undefined,
    sold: false,
  });

  const usedFurniture = new Set<string>();

  for (let i = 0; i < 5; i++) {
    let randomFurniture;
    do {
      randomFurniture = furnitureEntries[Math.floor(Math.random() * furnitureEntries.length)];
    } while (usedFurniture.has(randomFurniture[0]));

    usedFurniture.add(randomFurniture[0]);
    shopItems.push({
      id: `furniture-${randomFurniture[0]}-${Date.now()}-${i}`,
      name: randomFurniture[1].name,
      imageURL: randomFurniture[1].imageUrl,
      cost: randomFurniture[1].buyPrice,
      description: "A piece of furniture.",
      sold: false,
    });
  }

  return shopItems;
}
