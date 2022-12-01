import React from 'react';
import { useState } from 'react';
import '../assets/css/game.css';

function GameSettings({ isDarkMode }) {
  const [playerCount, setPlayerCount] = useState(null);
  const [playerNames, setPlayerNames] = useState([]);
  const [scoreLimit, setScoreLimit] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const handlePlayerCount = (e) => {
    setPlayerCount(parseInt(e.target.id));
    setPlayerNames({});
    // const playerNames = document.querySelector('#player-names');
    // playerNames.style.visibility = 'visible';
    const div = document.querySelector('#player-names');
    div.style.visibility = 'visible';
    const players = [...document.querySelectorAll('.player')];
    players.forEach((player) => {
      player.style.visibility = 'visible';
      if (players.indexOf(player) >= parseInt(e.target.id)) {
        player.style.visibility = 'hidden';
        // console.log(player);
      }
    });
  };

  const handlePlayerNames = (e) => {
    const player = e.target.name.replace('-', '_');
    setPlayerNames({ ...playerNames, [player]: e.target.value });
    console.log(playerNames);
  };

  const handleScoreLimit = (e) => {
    setScoreLimit(parseInt(e.target.id));
    console.log(scoreLimit);
  };

  const handleSubmit = () => {
    console.log(playerNames);
    setIsReady((Object.keys(playerNames).length = playerCount ? true : false));
  };
  return (
    <div id='settings'>
      <div id='players'>
        <h2 className='game-settings'>Players</h2>
        <button className='btn' id='2' onClick={(e) => handlePlayerCount(e)}>
          2 players
        </button>
        <button className='btn' id='3' onClick={(e) => handlePlayerCount(e)}>
          3 players
        </button>
        <button className='btn' id='4' onClick={(e) => handlePlayerCount(e)}>
          4 players
        </button>
        <button className='btn' id='5' onClick={(e) => handlePlayerCount(e)}>
          5 players
        </button>
        <button className='btn' id='6' onClick={(e) => handlePlayerCount(e)}>
          6 players
        </button>
      </div>

      <div id='player-names'>
        <h2 className='game-settings'>Player Names</h2>
        <form id='player-form'>
          <div className='player hidden' id='player-one-form'>
            <label htmlFor='player-one'>Player 1</label>
            <input
              type='text'
              id='player-one'
              name='player-one'
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-two-form'>
            <label htmlFor='player-two'>Player 2</label>
            <input
              type='text'
              id='player-two'
              name='player-two'
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-three-form'>
            <label htmlFor='player-three'>Player 3</label>
            <input
              type='text'
              id='player-three'
              name='player-three'
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-four-form'>
            <label htmlFor='player-four'>Player 4</label>
            <input
              type='text'
              id='player-four'
              name='player-four'
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-five-form'>
            <label htmlFor='player-five'>Player 5</label>
            <input
              type='text'
              id='player-five'
              name='player-five'
              onChange={(e) => handlePlayerNames(e)}
            ></input>
          </div>
          <div className='player hidden' id='player-six-form'>
            <label htmlFor='player-six'>Player 6</label>
            <input
              type='text'
              id='player-six'
              name='player-six'
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
