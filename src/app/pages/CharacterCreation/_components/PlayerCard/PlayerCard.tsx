import React from 'react';
import { Card } from '@/components';
import SelectionButton from '../SelectionButton/SelectionButton';
import Tooltip from '@/components/Tooltip/Tooltip';
import { AvatarType, FruitType } from '@/types/general';
import fruitIcons from '@data/fruit_icons.json';
import * as styles from './PlayerCard.styles.ts';
import villagerIcons from '@data/villager_icons.json';
import { X } from 'phosphor-react';

interface PlayerCardProps {
  avatar?: AvatarType;
  fruit?: FruitType;
  placeholderAvatarUrl?: AvatarType;
  onAvatarClick: () => void;
  onFruitClick: () => void;
  onClear?: () => void;
}

function PlayerCard({
  avatar,
  fruit,
  placeholderAvatarUrl,
  onAvatarClick,
  onFruitClick,
  onClear,
}: PlayerCardProps): React.ReactNode {
  return (
    <Card css={styles.playerCard}>
      {onClear && (
        <Tooltip label="Remove player" css={styles.clearButton}>
          <button onClick={onClear} aria-label="Clear player">
            <X size={20} weight="bold" />
          </button>
        </Tooltip>
      )}
      <Tooltip label={avatar ? "Change avatar" : "Pick avatar"}>
        <SelectionButton
          selected={!!avatar}
          size="large"
          onClick={onAvatarClick}
          aria-label={avatar ? "Change avatar" : "Pick avatar"}
        >
          {avatar ? (
            <img src={villagerIcons[avatar as keyof typeof villagerIcons].imageUrl} alt={villagerIcons[avatar as keyof typeof villagerIcons].name} css={styles.asset} />
          ) : (
            <img src={villagerIcons[placeholderAvatarUrl as keyof typeof villagerIcons].imageUrl} alt={villagerIcons[placeholderAvatarUrl as keyof typeof villagerIcons].name} css={[styles.asset, styles.assetPlaceholder]} />
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
            <img src={fruitIcons[fruit as keyof typeof fruitIcons].imageUrl} alt={fruitIcons[fruit as keyof typeof fruitIcons].name} css={styles.asset} />
          ) : (
            <img src={fruitIcons['apple'].imageUrl} alt="Select Fruit" css={[styles.asset, styles.assetPlaceholder]} />
          )}
        </SelectionButton>
      </Tooltip>
    </Card>
  );
}

export default PlayerCard;
