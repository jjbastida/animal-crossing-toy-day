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
  const { currentPlayer, setCurrentPlayer, players, setPlayers, completePlayerAction } =
    useContext(GameContext);
  const [selectedResource, setSelectedResource] = useState<ResourceType | null>(null);
  const [collectedItem, setCollectedItem] = useState<Item | null>(null);

  const RESOURCE_CONFIGS: Record<ResourceType, ResourceConfig> = {
    "fruit": {
      name: "Fruit",
      requiredItem: null,
      icon: fruitIcons[currentPlayer?.fruit as keyof typeof fruitIcons].imageUrl,
      tooltip: `Shake a tree to collect 1-3 ${pluralize(currentPlayer?.fruit?.toLowerCase() || "fruit")}.`,
      flavourText: `Apples sell for ${currentPlayer?.fruitValue} Bells each.`,
    },
    "fish": {
      name: "Fish",
      requiredItem: "Fishing Rod",
      icon: fishIcons["sweetfish"].imageUrl,
      tooltip: "Most fish sell high but beware garbage.",
      flavourText: 'Cast your line in the river to catch fish.',
    },
    "bugs": {
      name: "Bugs",
      requiredItem: "Bug Net",
      icon: bugIcons["common-butterfly"].imageUrl,
      tooltip: "Most bugs sell cheap but rare ones sell high.",
      flavourText: 'Search the forest for bugs.',
    },
    "sea-creatures": {
      name: "Sea Creatures",
      requiredItem: "Wet Suit",
      icon: seaCreatureIcons["spiny-lobster"].imageUrl,
      tooltip: "Sea creatures sell at random prices.",
      flavourText: 'Jump into the ocean to catch sea creatures.',
    },
    "fossils": {
      name: "Fossils",
      requiredItem: "Shovel",
      icon: itemIcons["fossil"].imageUrl,
      tooltip: "Fossils sell at a consistent price.",
      flavourText: 'Dig up fossils on the beach.',
    },
  };

  function hasRequiredItem(resourceType: ResourceType): boolean {
    const config = RESOURCE_CONFIGS[resourceType];
    if (!config.requiredItem) return true;
    return currentPlayer?.inventory?.some((item) => item.name === config.requiredItem) ?? false;
  }

  function collectResourceItem(resourceType: ResourceType): Item | null {
    if (!currentPlayer) return null;

    const resourceDatasets: Record<
      Exclude<ResourceType, "fruit">,
      Record<string, { name: string; imageUrl: string; description?: string }>
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
          return {
            name: data.name,
            imageURL: data.imageUrl,
            description: data.description || `A ${data.name.toLowerCase()}.`,
            count: 1,
          };
        }
      
      case "fish":
      case "bugs":
      case "fossils": {
        const dataset = resourceDatasets[resourceType];
        const types = Object.keys(dataset);
        const randomKey = types[Math.floor(Math.random() * types.length)];
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
    setSelectedResource(resourceType);
  }

  function handleAddToInventory(): void {
    if (currentPlayer && collectedItem) {
      const latestPlayer = players.find((p) => p.id === currentPlayer.id) || currentPlayer;
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
      setCurrentPlayer(updatedPlayer);
      setPlayers((prevPlayers) =>
        prevPlayers.map((player) => (player.id === latestPlayer.id ? updatedPlayer : player)),
      );
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
