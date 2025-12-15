import React from 'react';
import { Card } from '@/components';
import SelectionButton from '../SelectionButton/SelectionButton';
import Tooltip from '@/components/Tooltip/Tooltip';
import { Avatar, Fruit } from '@/types/general';
import fruitIcons from '@data/fruit_icons.json';
import * as styles from './PlayerCard.styles';

interface PlayerCardProps {
  avatar?: Avatar;
  fruit?: Fruit;
  placeholderAvatarUrl: string;
  onAvatarClick: () => void;
  onFruitClick: () => void;
}

function PlayerCard({
  avatar,
  fruit,
  placeholderAvatarUrl,
  onAvatarClick,
  onFruitClick,
}: PlayerCardProps): React.ReactNode {
  return (
    <Card css={styles.playerCard}>
      <Tooltip label={avatar ? "Change avatar" : "Pick avatar"}>
        <SelectionButton
          selected={!!avatar}
          size="large"
          onClick={onAvatarClick}
          aria-label={avatar ? "Change avatar" : "Pick avatar"}
        >
          {avatar ? (
            <img src={avatar.imageURL} alt={avatar.name} css={styles.asset} />
          ) : (
            <img src={placeholderAvatarUrl} alt="Placeholder Avatar" css={[styles.asset, styles.assetPlaceholder]} />
          )}
        </SelectionButton>
      </Tooltip>
      <Tooltip label={fruit ? "Change fruit" : "Pick fruit"}>
        <SelectionButton
          selected={!!fruit}
          size="small"
          onClick={onFruitClick}
          aria-label={fruit ? "Change fruit" : "Pick fruit"}
        >
          {fruit ? (
            <img src={fruit.imageURL} alt={fruit.name} css={styles.asset} />
          ) : (
            <img src={fruitIcons.apple.imageUrl} alt="Select Fruit" css={[styles.asset, styles.assetPlaceholder]} />
          )}
        </SelectionButton>
      </Tooltip>
    </Card>
  );
}

export default PlayerCard;
