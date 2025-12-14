import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import PrepareGiftsComponent from './_components/PrepareGiftsComponent';
import { pageContainer, roundIndicator, actionsRemainingIndicator, completeButton } from './PrepareGifts.styles.ts';

function PrepareGiftsPage(): React.ReactNode {
  const { currentRound, totalRounds, actionsRemaining, completePlayerAction } = useContext(GameContext);

  return (
    <div css={pageContainer}>
      <div css={roundIndicator}>Round {currentRound} / {totalRounds}</div>
      <div css={actionsRemainingIndicator}>
        Actions Remaining: {actionsRemaining}
      </div>
      <PrepareGiftsComponent />
      <button css={completeButton} onClick={completePlayerAction}>
        Complete Action
      </button>
    </div>
  );
};

export default PrepareGiftsPage;
