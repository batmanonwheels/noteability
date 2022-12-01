import { useState } from 'react';
import pianoLogoB from './assets/piano_black.png';
import pianoLogoW from './assets/piano_white.png';
import './App.css';
import Piano from './components/Piano';
import SongCard from './components/SongCard';
import GameSettings from './components/GameSettings';
import Rules from './components/modals/Rules';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function App() {
  // const [key, setKey] = useState('none');
  const [isPlayClicked, setIsPlayClicked] = useState(false);
  const [isRulesClicked, setIsRulesClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const goodKeys = [
    'a',
    'w',
    's',
    'e',
    'd',
    'f',
    't',
    'g',
    'y',
    'h',
    'u',
    'j',
    'k',
    'o',
    'l',
    'p',
    ';',
  ];

  const handleKeyPress = (e) => {
    if (!!e.key && goodKeys.indexOf(e.key) > -1) {
      const element = document.querySelector(
        `#${e.key === ';' ? 'semicolon' : e.key}`
      );
      // console.log(element);
      element.classList.toggle('playing');
      setTimeout(() => {
        element.classList.toggle('playing');
      }, '100');
    } else {
      a;
    }

    let sounds = document.querySelectorAll('audio');
    for (let sound of sounds) {
      // console.log(sound.getAttribute('data-note'), !sound.paused);
      if (!sound.paused) {
        sound.pause();
        sound.currentTime = 0;
      }
    }
    // console.log(sounds.length);
    // console.log(e.key === undefined);
    // let audio = document.querySelector(`audio[data-note="${e.key}"]`);
    // console.log(audio);
    let audio = !!e.key
      ? document.querySelector(`audio[data-note="${e.key}"]`)
      : document.querySelector(
          `audio[data-note="${e.target.getAttribute('data-note')}"]`
        );
    if (audio !== null) {
      // console.log('Not Null');a
      playMedia(audio);
    }
  };

  async function playMedia(audio) {
    try {
      audio.currentTime = 0;
      await audio.play();
    } catch (err) {
      console.log(err);
    }
  }

  const handleKeyboardButtonClick = (e) => {
    let inputElement = document.getElementById('hiddenInput');
    inputElement.style.visibility = 'visible'; // unhide the input
    inputElement.focus(); // focus on it so keyboard pops
    inputElement.style.visibility = 'hidden'; // hide it again
  };

  const handlePlayClick = () => {
    setIsPlayClicked(true);
    // console.log(isPlayClicked);
  };

  const handleRulesClick = () => {
    setIsRulesClicked(true);
    // console.log(isRulesClicked);
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // console.log(isDarkMode);
    let element = document.querySelector('.app');
    element.classList.toggle('dark-mode');
  };

  return (
    <div tabIndex={0} onKeyDown={(e) => handleKeyPress(e)} className='app'>
      {!isRulesClicked ? (
        <>
          {isPlayClicked ? (
            <GameSettings isDarkMode={isDarkMode} />
          ) : (
            <>
              <input style={{ visibility: 'hidden' }} />
              <div>
                <img
                  src={!isDarkMode ? pianoLogoB : pianoLogoW}
                  className='logo'
                  alt='Piano logo'
                />
              </div>
              <h1>NoteAbility</h1>
              <h2>the Name that Song Game!</h2>
              {/* {key !== 'none' && key !== 'Meta' ? <h3>key is {key}</h3> : null} */}
              <div className='menu-buttons'>
                <button className='menu-button' onClick={handlePlayClick}>
                  Play
                </button>
                <button className='menu-button' onClick={handleRulesClick}>
                  How To Play
                </button>
                <button className='menu-button dark-mode-toggle'>
                  {isDarkMode ? (
                    <MdLightMode onClick={handleDarkMode} />
                  ) : (
                    <MdDarkMode onClick={handleDarkMode} />
                  )}
                </button>
              </div>
            </>
          )}
          <Piano handleKeyPress={handleKeyPress} />
          {/* <div className='card'>
            {navigator.userAgent.toLowerCase().includes('macintosh') ? null : (
              <>
                <button id='openKeyboard' onClick={(e) => handleClick(e)}>
                  Open Keyboard
                </button>
              </>
            )}
          </div> */}
        </>
      ) : (
        <Rules setIsRulesClicked={setIsRulesClicked} isDarkMode={isDarkMode} />
      )}
    </div>
  );
}

export default App;
// if (goodKeys.indexOf(e.key) > -1 || !!e.target.getAttribute) {
//   if (!!e.key && goodKeys.indexOf(e.key) > -1) {
//     let element = document.querySelector(
//       `#${e.key === ';' ? 'semicolon' : e.key}`
//     );
//     console.log(element);
//     element.classList.toggle('playing');
//     setTimeout(() => {
//       element.classList.toggle('playing');
//     }, '100');
//   }
//   let sounds = document.querySelectorAll('audio');
//   for (let sound of sounds) {
//     // console.log(sound.getAttribute('data-note'), !sound.paused);
//     if (!sound.paused) {
//       sound.pause();
//       sound.currentTime = 0;
//     }
//   }
//   let audio = !!e.key
//     ? document.querySelector(`audio[data-note="${e.key}"]`)
//     : document.querySelector(
//         `audio[data-note="${e.target.getAttribute('data-note')}"]`
//       );
//   if (audio !== null) {
//     // console.log('Not Null');a
//     playMedia(audio);
//   }
// }
