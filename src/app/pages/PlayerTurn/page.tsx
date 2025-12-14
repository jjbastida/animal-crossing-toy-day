import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { pageContainer, roundIndicator, actionsRemainingIndicator, actionsGrid, actionCard, actionTitle, actionDescription, actionButton } from './PlayerTurn.styles.ts';

function PlayerTurnPage(): React.ReactNode {
  const { currentRound, totalRounds, actionsRemaining, setAction, resources } = useContext(GameContext);

  const actions = [
    {
      id: 'gatherResource' as const,
      title: 'Gather Resource',
      description: 'Collect resources to use for shopping'
    },
    {
      id: 'prepareGifts' as const,
      title: 'Prepare Gifts',
      description: 'Create gifts for your friends'
    },
    {
      id: 'shopItems' as const,
      title: 'Shop Items',
      description: 'Buy items with your resources'
    }
  ];

  function handleActionClick(actionId: 'gatherResource' | 'prepareGifts' | 'shopItems'): void {
    setAction(actionId);
  }

  return (
    <div css={pageContainer}>
      <div css={roundIndicator}>Round {currentRound} / {totalRounds}</div>
      <div css={actionsRemainingIndicator}>
        Actions Remaining: {actionsRemaining}
      </div>
      <div css={actionsGrid}>
        {actions.map((action) => (
          <div css={actionCard} key={action.id}>
            <h2 css={actionTitle}>{action.title}</h2>
            <p css={actionDescription}>{action.description}</p>
            {action.id === 'shopItems' && (
              <p css={actionDescription}>Resources: {resources}</p>
            )}
            <button css={actionButton} onClick={() => handleActionClick(action.id)}>
              Select Action
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerTurnPage;
