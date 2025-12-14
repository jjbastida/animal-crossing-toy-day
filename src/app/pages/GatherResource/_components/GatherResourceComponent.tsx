import { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import { container, title, button, resourceCount } from './GatherResourceComponent.styles.ts';

function GatherResourceComponent(): React.ReactNode {
  const { gatherResource, resources } = useContext(GameContext);

  function handleGather(): void {
    gatherResource();
  }

  return (
    <div css={container}>
      <h2 css={title}>Gather Resource</h2>
      <div css={resourceCount}>Resources: {resources}</div>
      <button css={button} onClick={handleGather}>Gather Resource</button>
    </div>
  );
};

export default GatherResourceComponent;
