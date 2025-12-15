import React from 'react';
import { Modal } from '@/components';
import Tooltip from '@/components/Tooltip/Tooltip';
import villagerIcons from '@data/villager_icons.json';

interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (villagerKey: string, villagerData: { name: string; imageUrl: string }) => void;
}

function AvatarModal({ isOpen, onClose, onSelect }: AvatarModalProps): React.ReactNode {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title>
        Pick an Avatar
      </Modal.Title>
      <Modal.Grid>
        {Object.entries(villagerIcons).map(([key, data]) => (
          <Tooltip label={data.name} key={key}>
            <Modal.Item onClick={() => onSelect(key, data)}>
              {data.imageUrl && <img src={data.imageUrl} alt={data.name} />}
            </Modal.Item>
          </Tooltip>
        ))}
      </Modal.Grid>
    </Modal>
  );
}

export default AvatarModal;
