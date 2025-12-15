import React, { useState } from 'react';
import { Modal, ModalGrid, ModalItem, Typography } from '@/components';
import Tooltip from '@/components/Tooltip/Tooltip';
import fruitIcons from '@data/fruit_icons.json';
import { FruitType } from '@/types/general';
import { parseHighlightedText } from '@/helper/general';
import * as styles from './FruitModal.styles';

interface FruitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (fruitType: FruitType) => void;
}

const fruitAbilities = {
  apple: {content: "Start with {{1500 bells}}!", helper: "More bells means more money."},
  banana: {content: "Start with a {{Shop Coupon}}!", helper: "A coupon can be used to get a free item from the shop."},
  cherry: {content: "Start with a {{Fishing Rod}}!", helper: "Most fish sell for high prices but beware of boots and garbage."},
  peach: {content: "Worth {{2x bells}}!", helper: "This fruit is worth double the amount of bells."},
  orange: {content: "Start with a {{Bug Net}}!", helper: "Most insects sell cheap but rare insects sell for a lot."},
  pear: {content: "Start with a {{Shovel}}!", helper: "Fossils are all consistently well priced."},
  coconut: {content: "Start with a {{Wet Suit}}!", helper: "Sea creatures are priced randomly."},
};


function FruitModal({ isOpen, onClose, onSelect }: FruitModalProps): React.ReactNode {
  const [selectedFruit, setSelectedFruit] = useState<FruitType | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title>
        Pick a Fruit
      </Modal.Title>
      <ModalGrid>
        {Object.entries(fruitIcons).map(([key, data]) => (
          <Tooltip label={data.name} key={key}>
            <ModalItem onMouseEnter={() => setSelectedFruit(key as FruitType)} onClick={() => onSelect(key as FruitType)}>
              <img src={data.imageUrl} alt={data.name} />
            </ModalItem>
          </Tooltip>
        ))}
      </ModalGrid>
      <Typography variant="body" size="lg" css={styles.fruitAbility}>
        {" "}
        {selectedFruit && parseHighlightedText(fruitAbilities[selectedFruit].content)}
      </Typography>
      <Typography variant="body" size="md" css={styles.fruitHelperText}>{selectedFruit && fruitAbilities[selectedFruit].helper}</Typography>
    </Modal>
  );
}

export default FruitModal;
