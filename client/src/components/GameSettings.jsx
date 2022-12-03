import React from 'react';
import { useState } from 'react';
import '../assets/css/game.css';

function GameSettings({ isDarkMode, isPlayClicked, setIsPlayClicked }) {
  const [playerCount, setPlayerCount] = useState(null);
  const [playerNames, setPlayerNames] = useState([]);
  const [scoreLimit, setScoreLimit] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const handlePlayerCount = (e) => {
    e.target.focus();
    setPlayerCount(parseInt(e.target.id));
    // console.log(playerCount);
    setPlayerNames({});
    // const playerNames = document.querySelector('#player-names');
    // playerNames.style.visibility = 'visible';
    const div = document.querySelector('#player-names');
    div.style.display = 'inline';
    const players = [...document.querySelectorAll('.player')];
    players.forEach((player) => {
      player.style.display = 'block';
      if (players.indexOf(player) >= parseInt(e.target.id)) {
        player.style.display = 'none';
        // console.log(player);
      }
    });
  };

  const handlePlayerNames = (e) => {
    const player = e.target.name.replace('-', '_');
    setPlayerNames({ ...playerNames, [player]: e.target.value });
    // console.log(playerNames);
  };

  const handleScoreLimit = (e) => {
    setScoreLimit(parseInt(e.target.id));
    // console.log(scoreLimit);
  };

  const handleSubmit = () => {
    console.log({
      game_id: randomString(12),
      player_count: playerCount,
      player_names: playerNames,
      score_limit: scoreLimit,
    });
    setIsReady((Object.keys(playerNames).length = playerCount ? true : false));
  };

  function randomString(length) {
    return Math.round(
      Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
    )
      .toString(36)
      .slice(1);
  }

  return (
    <div id='settings'>
      <button onClick={() => setIsPlayClicked(!isPlayClicked)}></button>
      <div id='players'>
        <h2 className='game-settings'>Players</h2>
        <button
          className='btn'
          id='2'
          type='radio'
          onClick={(e) => handlePlayerCount(e)}
        >
          2 players
        </button>
        <button
          className='btn'
          id='3'
          type='radio'
          onClick={(e) => handlePlayerCount(e)}
        >
          3 players
        </button>
        <button
          className='btn'
          id='4'
          type='radio'
          onClick={(e) => handlePlayerCount(e)}
        >
          4 players
        </button>
        <button
          className='btn'
          id='5'
          type='radio'
          onClick={(e) => handlePlayerCount(e)}
        >
          5 players
        </button>
        <button
          className='btn'
          id='6'
          type='radio'
          onClick={(e) => handlePlayerCount(e)}
        >
          6 players
        </button>
      </div>
      <div id='player-names'>
        <h2 className='game-settings'>Player Names</h2>
        <form id='player-form'>
          <div className='player hidden' id='player-one-form'>
            {/* <label htmlFor='player-one'>Player 1</label> */}
            <input
              type='text'
              id='player-one'
              name='player-one'
              placeholder='Player 1'
              value={playerNames.player_one}
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-two-form'>
            {/* <label htmlFor='player-two'>Player 2</label> */}
            <input
              type='text'
              id='player-two'
              name='player-two'
              placeholder='Player 2'
              value={playerNames.player_two}
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-three-form'>
            {/* <label htmlFor='player-three'>Player 3</label> */}
            <input
              type='text'
              id='player-three'
              name='player-three'
              placeholder='Player 3'
              value={playerNames.player_three}
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-four-form'>
            {/* <label htmlFor='player-four'>Player 4</label> */}
            <input
              type='text'
              id='player-four'
              name='player-four'
              placeholder='Player 4'
              value={playerNames.player_four}
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-five-form'>
            {/* <label htmlFor='player-five'>Player 5</label> */}
            <input
              type='text'
              id='player-five'
              name='player-five'
              placeholder='Player 5'
              value={playerNames.player_five}
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-six-form'>
            {/* <label htmlFor='player-six'>Player 6</label> */}
            <input
              type='text'
              id='player-six'
              name='player-six'
              placeholder='Player 6'
              value={playerNames.player_six}
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
        </form>
      </div>
      <div id='score-limit'>
        <h2 className='game-settings'>Score Limit</h2>
        <button className='btn' id='20' onClick={(e) => handleScoreLimit(e)}>
          20 points
        </button>
        <button className='btn' id='30' onClick={(e) => handleScoreLimit(e)}>
          30 points
        </button>
        <button className='btn' id='40' onClick={(e) => handleScoreLimit(e)}>
          40 points
        </button>
        <button className='btn' id='50' onClick={(e) => handleScoreLimit(e)}>
          50 points
        </button>
        <button className='btn' id='60' onClick={(e) => handleScoreLimit(e)}>
          60 points
        </button>
      </div>

      {scoreLimit ? (
        <button className='btn' id='play' onClick={handleSubmit}>
          Start Game
        </button>
      ) : null}
    </div>
  );
}

export default GameSettings;
