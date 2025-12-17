import { useContext, useMemo } from "react";
import { GameContext } from "../../context/GameContext";
import { Typography } from "@components";
import usePlayerColor from "@/hooks/usePlayerColor";
import PlayerResultCard from "./_components/PlayerResultCard/PlayerResultCard";
import * as styles from "./Results.styles.ts";
import { calculatePlayerPoints } from "./_helpers/results.ts";

function ResultsPage(): React.ReactNode {
  const { players } = useContext(GameContext);

  const sortedPlayers = useMemo(() => {
    return [...players]
      .map((player) => ({
        player,
        ...calculatePlayerPoints(player),
      }))
      .sort((a, b) => b.totalPoints - a.totalPoints);
  }, [players]);

  return (
    <div css={styles.pageContainer}>
      <Typography variant="display" size="4xl" as="h1" css={styles.title}>
        Game Complete!
      </Typography>
      <div css={styles.playersGrid}>
        {sortedPlayers.map(({ player, totalPoints, bellsPoints, presentDetails }, index) => {
          const { playerColor } = usePlayerColor(player);
          const standing = index + 1;

          return (
            <PlayerResultCard
              key={player.id}
              player={player}
              totalPoints={totalPoints}
              bellsPoints={bellsPoints}
              presentDetails={presentDetails}
              playerColor={playerColor}
              standing={standing}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ResultsPage;
