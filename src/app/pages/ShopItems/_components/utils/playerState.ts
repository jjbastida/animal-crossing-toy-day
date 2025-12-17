import { Player, Item, ShopItem } from "@/types/general";

export function getLatestPlayer(players: Player[], currentPlayer: Player | null): Player | null {
  if (!currentPlayer) return null;
  return players.find((p) => p.id === currentPlayer.id) ?? currentPlayer;
}

export function updatePlayerInventory(
  player: Player,
  item: Item | ShopItem,
  quantity: number = 1,
): Item[] {
  const currentInventory = player.inventory || [];
  const updatedInventory = [...currentInventory];
  const existingItemIndex = updatedInventory.findIndex((invItem) => invItem.name === item.name);

  if (existingItemIndex >= 0) {
    const existingItem = updatedInventory[existingItemIndex];
    updatedInventory[existingItemIndex] = {
      ...existingItem,
      count: (existingItem.count || 1) + quantity,
    };
  } else {
    updatedInventory.push({
      name: item.name,
      imageURL: item.imageURL,
      description: item.description,
      cost: item.cost,
      count: quantity,
    });
  }

  return updatedInventory;
}

export function removeItemFromInventory(
  player: Player,
  itemName: string,
  quantity: number = 1,
): Item[] {
  const currentInventory = player.inventory || [];
  return currentInventory
    .map((invItem: Item) => {
      if (invItem.name === itemName) {
        if (invItem.count && invItem.count > quantity) {
          return { ...invItem, count: invItem.count - quantity };
        }
        return null;
      }
      return invItem;
    })
    .filter((invItem: Item | null): invItem is Item => invItem !== null);
}

export function updatePlayerInPlayersArray(players: Player[], updatedPlayer: Player): Player[] {
  return players.map((player) => (player.id === updatedPlayer.id ? updatedPlayer : player));
}
