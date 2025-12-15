import React, { useContext, useEffect, useState } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import * as styles from './Modal.styles.ts';
import useHandleKeydown from '@/hooks/handleKeydown.ts';
import soundEffects from '@data/sound_effects.json';
import { MusicContext } from '@/context/MusicContext.tsx';
import { Typography } from '../index.ts';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  css?: Interpolation<Theme>
}

function Modal({ isOpen, onClose, children, css }: ModalProps): React.ReactNode {
  const { playSoundEffect } = useContext(MusicContext);
  const [renderModal, setRenderModal] = useState(isOpen);
  
  const handleClose = () => {
    if (isOpen) {
      playSoundEffect(soundEffects['UI_Cmn_Close'].audioUrl);
      onClose();
    }
  }

  useHandleKeydown('Escape', handleClose, isOpen);
  
  useEffect(() => {
    if (isOpen) {
      setRenderModal(true);
      playSoundEffect(soundEffects['UI_WorkBench_Open'].audioUrl);
    } else {
      const timer = setTimeout(() => {
        setRenderModal(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen, playSoundEffect]);

  return renderModal ? (
    <div css={styles.modalOverlay} data-open={isOpen} onClick={handleClose}>
      <div css={[styles.modalContent, css]} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
}

export function ModalGrid({ children, ...props }: React.HTMLAttributes<HTMLDivElement>): React.ReactNode {
  return (
    <div css={styles.modalGrid} {...props}>{children}</div>
  );
}

export function ModalItem({ children, ...props }: React.HTMLAttributes<HTMLDivElement>): React.ReactNode {
  return (
    <div css={styles.modalItem} {...props}>
      {children}
    </div>
  );
}

export function ModalTitle({ children, ...props }: React.HTMLAttributes<HTMLDivElement>): React.ReactNode {
  return (
    <Typography variant="display" size="2xl" css={styles.modalTitle} {...props}>
      {children}
    </Typography>
  );
}

Modal.Title = ModalTitle;
Modal.Grid = ModalGrid;
Modal.Item = ModalItem;

export default Modal;
