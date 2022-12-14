import SongCard from './SongCard';
import PlayerPoints from './PlayerPoints';

function Game({ gameSettings }) {
  return (
    <div id='game'>
      <PlayerPoints
        playerCount={gameSettings.player_count}
        playerNames={gameSettings.player_names}
        scoreLimit={gameSettings.score_limit}
      />
      <SongCard />
    </div>
  );
}

export default Game;
