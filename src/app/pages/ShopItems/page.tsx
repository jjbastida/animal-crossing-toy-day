import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import ShopItemsComponent from './_components/ShopItemsComponent';
import { pageContainer, roundIndicator, actionsRemainingIndicator, completeButton } from './ShopItems.styles.ts';

function ShopItemsPage(): React.ReactNode {
  const { currentRound, totalRounds, actionsRemaining, completePlayerAction } = useContext(GameContext);

  return (
    <div css={pageContainer}>
      <div css={roundIndicator}>Round {currentRound} / {totalRounds}</div>
      <div css={actionsRemainingIndicator}>
        Actions Remaining: {actionsRemaining}
      </div>
      <ShopItemsComponent />
      <button css={completeButton} onClick={completePlayerAction}>
        Complete Action
      </button>
    </div>
  );
};

export default ShopItemsPage;
