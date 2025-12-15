import React, { useContext } from 'react';
import { Modal } from '@/components';
import Tooltip from '@/components/Tooltip/Tooltip';
import villagerIcons from '@data/villager_icons.json';
import { GameContext } from '@/context/GameContext';
import * as styles from './AvatarModal.styles';
import { AvatarType } from '@/types/general';

interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (villagerKey: string, villagerData: { name: string; imageUrl: string }) => void;
}

function AvatarModal({ isOpen, onClose, onSelect }: AvatarModalProps): React.ReactNode {
  const { players } = useContext(GameContext);
  const selectedAvatarIds = new Set(players.map(p => p.avatar).filter(Boolean));
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title>
        Pick an Avatar
      </Modal.Title>
      <Modal.Grid>
        {Object.entries(villagerIcons).sort((a, b) => a[1].name.localeCompare(b[1].name)).map(([key, data]) => {
          const isSelected = selectedAvatarIds.has(key as AvatarType);

          return (
            <Tooltip label={data.name} key={key} open={isSelected ? false : undefined}>
              <Modal.Item onClick={() => onSelect(key, data)}  aria-disabled={isSelected} css={styles.avatarItem}>
                {data.imageUrl && <img src={data.imageUrl} alt={data.name}/>}
              </Modal.Item>
            </Tooltip>
          );
        })}
      </Modal.Grid>
    </Modal>
  );
}

export default AvatarModal;
