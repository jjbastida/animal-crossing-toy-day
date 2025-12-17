import { useContext, useEffect, useRef } from "react";
import { Modal, Typography } from "@/components";
import { MusicContext } from "@/context/MusicContext";
import soundEffects from "@data/sound_effects.json";
import villagerIcons from "@data/villager_icons.json";
import { Player } from "@/types/general";
import usePlayerColor from "@/hooks/usePlayerColor";
import * as styles from "./PlayerTurnModal.styles";

interface PlayerTurnModalProps {
  isOpen: boolean;
  onClose: () => void;
  player: Player | null;
}

function PlayerTurnModal({ isOpen, onClose, player }: PlayerTurnModalProps): React.ReactNode {
  const { playSoundEffect } = useContext(MusicContext);
  const { playerColor } = usePlayerColor(player || { id: 0 });
  const hasPlayedSoundRef = useRef(false);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (isOpen && !hasPlayedSoundRef.current) {
      playSoundEffect(soundEffects["Event_Quest_Start"].audioUrl);
      hasPlayedSoundRef.current = true;
      const timer = setTimeout(() => onCloseRef.current(), 1000);
      return () => clearTimeout(timer);
    }
    if (!isOpen) {
      hasPlayedSoundRef.current = false;
    }
  }, [isOpen, playSoundEffect]);

  if (!player) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} disableEscape css={styles.modalContent}>
      <div css={styles.modalInner}>
        {player.avatar && (
          <img
            src={villagerIcons[player.avatar].imageUrl}
            alt={player.name || "Player"}
            css={styles.avatar}
          />
        )}
        <Typography variant="display" size="3xl" css={styles.title(playerColor)}>
          It's {player.name || "Player"}'s Turn!
        </Typography>
      </div>
    </Modal>
  );
}

export default PlayerTurnModal;

