import { useState } from 'react';
import '../App.css';
import Game from './Game';

function GameSettings({
  isDarkMode,
  isPlayClicked,
  setIsPlayClicked,
  handleShowRules,
}) {
  const [playerCount, setPlayerCount] = useState(null);
  const [playerNames, setPlayerNames] = useState([]);
  const [scoreLimit, setScoreLimit] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [gameSettings, setGameSettings] = useState({});

  const switchSetting = (current, next, clear) => {
    // const parentDiv = document.querySelector('#settings-container');
    const currentDiv = document.querySelector(current);
    const nextDiv = document.querySelector(next);
    currentDiv.classList.remove('.m-fadeIn');
    currentDiv.classList.toggle('.m-fadeOut');
    currentDiv.style.display = 'none';
    nextDiv.style.display = 'block';
    nextDiv.classList.remove('.m-fadeOut');
    nextDiv.classList.toggle('.m-fadeIn');
    !!clear ? setPlayerNames({}) : null;
    // console.log(currentDiv.className, nextDiv.className);
  };

  const handlePlayerCount = (e, num) => {
    e.target.focus();
    setPlayerCount(num);
    setPlayerNames({});
    const div = document.querySelector('#player-names');
    div.style.display = 'inline';
    const players = [...document.querySelectorAll('.player')];
    players.forEach((player) => {
      player.style.display = 'block';
      if (players.indexOf(player) >= parseInt(e.target.id)) {
        player.style.display = 'none';
        player.children[0].value = null;
      }
    });
    // console.log(player.children[0].value);
    // const name = player.children[0].name.replace('-', '_');
    // player.children[0].value === null
    //   ? null
    //   : setPlayerNames({ ...playerNames, [name]: player.children[0].value });
    // });
    switchSetting('#player-counter', '#player-names');
  };

  const handlePlayerNames = (e) => {
    const player = e.target.name.replace('-', '_');
    // const playerObj = {[player]: e.target.value, points = 0}
    setPlayerNames({ ...playerNames, [player]: e.target.value });
  };

  const handleScoreLimit = (e) => {
    setScoreLimit(parseInt(e.target.id));
    // console.log(scoreLimit);
  };

  const handleSubmit = () => {
    const settingsObj = {
      game_id: randomString(12),
      player_count: playerCount,
      player_names: playerNames,
      score_limit: scoreLimit,
    };
    {
      Object.keys(settingsObj.player_names).length === playerCount
        ? setGameSettings(settingsObj)
        : // setIsReady(true);
          alert('Invalid settings, try again!');
    }
    console.log(gameSettings);
  };

  function randomString(length) {
    return Math.round(
      Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
    )
      .toString(36)
      .slice(1);
  }
  // console.log(gameSettings);

  return (
    <>
      {Object.keys(gameSettings).length > 0 ? (
        <Game gameSettings={gameSettings} />
      ) : (
        <div id='settings'>
          <button
            id='return-button'
            onClick={() => setIsPlayClicked(!isPlayClicked)}
          >
            Main Menu
          </button>
          <button
            data-text='How To Play'
            className='menu-button'
            onClick={handleShowRules}
          >
            How To Play
          </button>
          <div id='settings-containter'>
            <div id='player-counter'>
              <h2 className='settings-prompt'>How many players are there?</h2>
              <button
                className='btn'
                id='2'
                onClick={(e) => handlePlayerCount(e, 2)}
              >
                2 players
              </button>
              <button
                className='btn'
                id='3'
                onClick={(e) => handlePlayerCount(e, 3)}
              >
                3 players
              </button>
              <button
                className='btn'
                id='4'
                onClick={(e) => handlePlayerCount(e, 4)}
              >
                4 players
              </button>
              <button
                className='btn'
                id='5'
                onClick={(e) => handlePlayerCount(e, 5)}
              >
                5 players
              </button>
              <button
                className='btn'
                id='6'
                onClick={(e) => handlePlayerCount(e, 6)}
              >
                6 players
              </button>
            </div>
            <div id='player-names'>
              <h2 className='settings-prompt'>What are your names?</h2>
              <form id='player-form'>
                <div className='player hidden' id='player-one-form'>
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
              <button
                onClick={() =>
                  switchSetting('#player-names', '#player-counter', true)
                }
              >
                Back
              </button>
              <button
                onClick={() => switchSetting('#player-names', '#score-limit')}
              >
                Continue
              </button>
            </div>
            <div id='score-limit'>
              <h2 className='settings-prompt'>What's the score limit?</h2>
              <button
                className={scoreLimit === 20 ? 'btn active' : 'btn'}
                id='20'
                onClick={(e) => handleScoreLimit(e)}
              >
                20 points
              </button>
              <button
                className={scoreLimit === 30 ? 'btn active' : 'btn'}
                id='30'
                onClick={(e) => handleScoreLimit(e)}
              >
                30 points
              </button>
              <button
                className={scoreLimit === 40 ? 'btn active' : 'btn'}
                id='40'
                onClick={(e) => handleScoreLimit(e)}
              >
                40 points
              </button>
              <button
                className={scoreLimit === 50 ? 'btn active' : 'btn'}
                id='50'
                onClick={(e) => handleScoreLimit(e)}
              >
                50 points
              </button>
              <button
                className={scoreLimit === 60 ? 'btn active' : 'btn'}
                id='60'
                onClick={(e) => handleScoreLimit(e)}
              >
                60 points
              </button>
              <div>
                <button
                  onClick={() => switchSetting('#score-limit', '#player-names')}
                >
                  Back
                </button>
                {scoreLimit ? (
                  <button className='btn' id='play' onClick={handleSubmit}>
                    Start Game
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameSettings;
