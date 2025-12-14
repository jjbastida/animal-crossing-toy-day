import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import GatherResourceComponent from './_components/GatherResourceComponent';
import { pageContainer, roundIndicator, actionsRemainingIndicator, completeButton } from './GatherResource.styles.ts';

function GatherResourcePage(): React.ReactNode {
  const { currentRound, totalRounds, actionsRemaining, completePlayerAction } = useContext(GameContext);

  return (
    <div css={pageContainer}>
      <div css={roundIndicator}>Round {currentRound} / {totalRounds}</div>
      <div css={actionsRemainingIndicator}>
        Actions Remaining: {actionsRemaining}
      </div>
      <GatherResourceComponent />
      <button css={completeButton} onClick={completePlayerAction}>
        Complete Action
      </button>
    </div>
  );
};

export default GatherResourcePage;
