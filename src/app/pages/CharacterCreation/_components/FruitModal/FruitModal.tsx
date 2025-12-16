import React, { useState, useContext } from "react";
import { Modal, ModalGrid, ModalItem, Typography } from "@/components";
import Tooltip from "@/components/Tooltip/Tooltip";
import fruitIcons from "@data/fruit_icons.json";
import { FruitType } from "@/types/general";
import { parseHighlightedText } from "@/helper/general";
import { GameContext } from "@/context/GameContext";
import * as styles from "./FruitModal.styles";
import { FruitModalProps } from "./FruitModal.types";

const fruitAbilities = {
  apple: { content: "Start with {{5,000 Bells}}!", helper: "More bells means more money." },
  cherry: {
    content: "Start with a {{Fishing Rod}}!",
    helper: "Most fish sell for high prices but beware of boots and garbage.",
  },
  peach: {
    content: "Worth {{500 Bells Each}}!",
    helper: "This fruit is worth five times the normal amount of bells.",
  },
  orange: {
    content: "Start with a {{Bug Net}}!",
    helper: "Most insects sell cheap but rare insects sell for a lot.",
  },
  pear: {
    content: "Start with a {{Shovel}}!",
    helper: "Fossils are all consistently well priced.",
  },
  coconut: {
    content: "Start with a {{Shop Coupon}}!",
    helper: "A coupon can be used to get a free item from the shop.",
  },
};

function FruitModal({ isOpen, onClose, onSelect }: FruitModalProps): React.ReactNode {
  const { players } = useContext(GameContext);
  const [selectedFruit, setSelectedFruit] = useState<FruitType | null>(null);
  const selectedFruitTypes = new Set(players.map((p) => p.fruit).filter(Boolean));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title>Pick a Fruit</Modal.Title>
      <ModalGrid>
        {Object.entries(fruitIcons).map(([key, data]) => {
          const fruitType = key as FruitType;
          const isSelected = selectedFruitTypes.has(fruitType);

          return (
            <Tooltip label={data.name} key={key} open={isSelected ? false : undefined}>
              <ModalItem
                onMouseEnter={() => setSelectedFruit(fruitType)}
                onClick={() => onSelect(fruitType)}
                aria-disabled={isSelected}
                css={styles.fruitItem}
              >
                <img src={data.imageUrl} alt={data.name} />
              </ModalItem>
            </Tooltip>
          );
        })}
      </ModalGrid>
      <Typography variant="body" size="lg" css={styles.fruitAbility}>
        {selectedFruit ? parseHighlightedText(fruitAbilities[selectedFruit].content) : "　"}
      </Typography>
      <Typography variant="body" size="md" css={styles.fruitHelperText}>
        {selectedFruit ? fruitAbilities[selectedFruit].helper : "　"}
      </Typography>
    </Modal>
  );
}

export default FruitModal;
