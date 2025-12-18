import { useContext, useState } from "react";
import { GameContext } from "@/context";
import itemIcons from "@data/item_icons.json";
import fruitIcons from "@data/fruit_icons.json";
import fishIcons from "@data/fish_icons.json";
import bugIcons from "@data/bug_icons.json";
import fossilIcons from "@data/fossil_icons.json";
import seaCreatureIcons from "@data/sea_creatures_icons.json";
import { Item } from "@/types/general";
import ResourceCard from "./ResourceCard/ResourceCard";
import { ResourceType, ResourceConfig } from "./ResourceCard/ResourceCard.types";
import ResourceCollectionModal from "./ResourceCollectionModal/ResourceCollectionModal";
import * as styles from "./ResourceTiles.styles";
import pluralize from "pluralize";

function ResourceTiles(): React.ReactNode {
  const { currentPlayer, setPlayers, completePlayerAction, setActionUsed } =
    useContext(GameContext);
  const [selectedResource, setSelectedResource] = useState<ResourceType | null>(null);
  const [collectedItem, setCollectedItem] = useState<Item | null>(null);
  const fruitName = currentPlayer?.fruit || "apple";
  const fruitValue = currentPlayer?.fruitValue || 50;

  const RESOURCE_CONFIGS: Record<ResourceType, ResourceConfig> = {
    "fruit": {
      name: "Fruit",
      requiredItem: null,
      icon: fruitIcons[fruitName].imageUrl,
      tooltip: `Shake a tree to collect 1-3 ${pluralize(currentPlayer?.fruit?.toLowerCase() || "fruit")}.`,
      flavourText: `${pluralize(fruitName.charAt(0).toUpperCase() + fruitName.slice(1))} sell for ${fruitValue} Bells each.`,
    },
    "fish": {
      name: "Fish",
      requiredItem: "Fishing Rod",
      icon: fishIcons["sweetfish"].imageUrl,
      tooltip: "Most fish sell high but beware garbage.",
      flavourText: "Cast your line in the river to catch fish.",
    },
    "bugs": {
      name: "Bugs",
      requiredItem: "Bug Net",
      icon: bugIcons["common-butterfly"].imageUrl,
      tooltip: "Most bugs sell cheap but rare ones sell high.",
      flavourText: "Search the forest for bugs.",
    },
    "sea-creatures": {
      name: "Sea Creatures",
      requiredItem: "Wet Suit",
      icon: seaCreatureIcons["spiny-lobster"].imageUrl,
      tooltip: "Sea creatures sell at random prices.",
      flavourText: "Jump into the ocean to catch sea creatures.",
    },
    "fossils": {
      name: "Fossils",
      requiredItem: "Shovel",
      icon: itemIcons["fossil"].imageUrl,
      tooltip: "Fossils sell at a consistent price.",
      flavourText: "Dig up fossils on the beach.",
    },
  };

  function hasRequiredItem(resourceType: ResourceType): boolean {
    const config = RESOURCE_CONFIGS[resourceType];
    if (!config.requiredItem) return true;
    return currentPlayer?.inventory?.some((item) => item.name === config.requiredItem) ?? false;
  }

  function selectWeightedRandom<T extends { rarity?: number }>(items: Record<string, T>): string {
    const entries = Object.entries(items);
    const weights = entries.map(([_, data]) => {
      const rarity = data.rarity ?? 50;
      return 101 - rarity;
    });
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < entries.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        return entries[i][0];
      }
    }

    return entries[entries.length - 1][0];
  }

  function collectResourceItem(resourceType: ResourceType): Item | null {
    if (!currentPlayer) return null;

    const resourceDatasets: Record<
      Exclude<ResourceType, "fruit">,
      Record<
        string,
        {
          name: string;
          imageUrl: string;
          description?: string;
          rarity?: number;
          sellPrice?: number;
        }
      >
    > = {
      "fish": fishIcons,
      "bugs": bugIcons,
      "fossils": fossilIcons,
      "sea-creatures": seaCreatureIcons,
    };

    switch (resourceType) {
      case "fruit": {
        const fruitCount = Math.floor(Math.random() * 3) + 1;
        const playerFruit = currentPlayer.fruit || "apple";
        const fruitData = fruitIcons[playerFruit as keyof typeof fruitIcons];

        if (!fruitData || !fruitData.imageUrl) {
          const defaultFruit = fruitIcons.apple;
          return {
            name: defaultFruit.name,
            imageURL: defaultFruit.imageUrl,
            description: defaultFruit.description,
            count: fruitCount,
          };
        }

        return {
          name: fruitData.name,
          imageURL: fruitData.imageUrl,
          description: fruitData.description,
          count: fruitCount,
        };
      }
      case "sea-creatures":
      case "fossils": {
        const dataset = resourceDatasets[resourceType];
        const types = Object.keys(dataset);
        const randomKey = types[Math.floor(Math.random() * types.length)];
        const data = dataset[randomKey];

        if (!data || !data.imageUrl) {
          return null;
        }

        return {
          name: data.name,
          imageURL: data.imageUrl,
          description: data.description || `A ${data.name.toLowerCase()}.`,
          count: 1,
        };
      }
      case "fish":
      case "bugs": {
        const dataset = resourceDatasets[resourceType];
        const randomKey = selectWeightedRandom(dataset);
        const data = dataset[randomKey];
        return {
          name: data.name,
          imageURL: data.imageUrl,
          description: data.description || `A ${data.name.toLowerCase()}.`,
          count: 1,
        };
      }
    }
  }

  function handleResourceClick(resourceType: ResourceType): void {
    const item = collectResourceItem(resourceType);
    setCollectedItem(item);
    setActionUsed(true);
    setSelectedResource(resourceType);
  }

  function handleAddToInventory(): void {
    if (currentPlayer && collectedItem) {
      setPlayers((prevPlayers) => {
        const latestPlayer = prevPlayers.find((p) => p.id === currentPlayer.id);
        if (!latestPlayer) return prevPlayers;

        const currentInventory = latestPlayer.inventory || [];
        const updatedInventory = [...currentInventory];

        const existingItemIndex = updatedInventory.findIndex(
          (item) => item.name === collectedItem.name,
        );

        if (existingItemIndex >= 0) {
          const existingItem = updatedInventory[existingItemIndex];
          updatedInventory[existingItemIndex] = {
            ...existingItem,
            count: (existingItem.count || 1) + (collectedItem.count || 1),
          };
        } else {
          updatedInventory.push({
            ...collectedItem,
            count: collectedItem.count || 1,
          });
        }

        const updatedPlayer = { ...latestPlayer, inventory: updatedInventory };

        return prevPlayers.map((player) =>
          player.id === latestPlayer.id ? updatedPlayer : player,
        );
      });
    }
    setSelectedResource(null);
    setCollectedItem(null);
    completePlayerAction();
  }

  function handleCloseModal(): void {
    setSelectedResource(null);
    setCollectedItem(null);
  }

  const selectedResourceConfig = selectedResource ? RESOURCE_CONFIGS[selectedResource] : null;

  return (
    <>
      <div css={styles.tilesContainer}>
        {(Object.keys(RESOURCE_CONFIGS) as ResourceType[]).map((resourceType) => (
          <ResourceCard
            key={resourceType}
            resourceType={resourceType}
            config={RESOURCE_CONFIGS[resourceType]}
            isEnabled={hasRequiredItem(resourceType)}
            onClick={handleResourceClick}
          />
        ))}
      </div>
      <ResourceCollectionModal
        isOpen={selectedResource !== null}
        selectedResource={selectedResource}
        resourceConfig={selectedResourceConfig}
        collectedItem={collectedItem}
        onAddToInventory={handleAddToInventory}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default ResourceTiles;
