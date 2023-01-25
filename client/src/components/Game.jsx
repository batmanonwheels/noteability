import SongCard from './SongCard';
import PlayerPoints from './PlayerPoints';

function Game({ gameSettings }) {
  const handleChangeSpan = (e) => {
    const chars = document.querySelectorAll('.char');
    console.log(chars);
    const key = e.key.toLowerCase();
    // const char = chars.find((char) => char.textContent === key);
    // if (char) {
    //   char.style.color = 'black';
    // }
  };

  return (
    <div id='game' tabIndex={0} onKeyDown={(e) => handleChangeSpan(e)}>
      <PlayerPoints
        playerCount={gameSettings.player_count}
        playerNames={gameSettings.player_names}
        scoreLimit={gameSettings.score_limit}
      />
      <SongCard handleChangeSpan={handleChangeSpan} />
    </div>
  );
}

export default Game;
