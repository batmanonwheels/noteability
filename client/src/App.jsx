import { useState } from 'react';
import 'animate.css';
import pianoLogoB from './assets/piano_black.png';
import pianoLogoW from './assets/piano_white.png';
import './App.css';
import Piano from './components/Piano';
import SongCard from './components/SongCard';
import GameSettings from './components/modals/GameSettings';
import Rules from './components/modals/Rules';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function App() {
	// const [isPlayClicked, setIsPlayClicked] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
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

	const handleTriggerAudio = (e) => {
		let key = e.key;
		if (!!e.key && goodKeys.indexOf(key.toLowerCase()) > -1) {
			const element = document.querySelector(
				`#${key.toLowerCase() === ';' ? 'semicolon' : key.toLowerCase()}`
			);
			element.classList.toggle('playing');
			setTimeout(() => {
				element.classList.toggle('playing');
			}, '100');
		} else {
		}
		let sounds = document.querySelectorAll('audio');
		for (let sound of sounds) {
			if (!sound.paused) {
				sound.pause();
				sound.currentTime = 0;
			}
		}
		let audio = !!e.key
			? document.querySelector(`audio[data-note="${key.toLowerCase()}"]`)
			: document.querySelector(
					`audio[data-note="${e.target.getAttribute('data-note')}"]`
			  );
		if (audio !== null) {
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

	const handleShowModal = (elementId) => {
		let modal = document.querySelector(`${elementId}`);
		let main = document.querySelector('.app');
		isModalVisible
			? (modal.style.display = 'none')
			: (modal.style.display = 'block');
		main.classList.toggle('is-blurred');
		setIsModalVisible(!isModalVisible);
	};

	const handleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		let element = document.querySelector('.app');
		element.classList.toggle('dark-mode');
	};

	return (
		<>
			<div
				tabIndex={0}
				onKeyDown={(e) => handleTriggerAudio(e)}
				className='app'
			>
				<div id='game-area'>
					<img
						src={!isDarkMode ? pianoLogoB : pianoLogoW}
						className='logo'
						alt='Piano logo'
					/>
					<h1>NoteAbility</h1>
					<h2>the Name that Song Game!</h2>
					{/* {key !== 'none' && key !== 'Meta' ? <h3>key is {key}</h3> : null} */}
					<div className='menu-buttons'>
						<button
							data-text='Play'
							className='menu-button'
							onClick={() => handleShowModal('#settings')}
						>
							Start
						</button>
						<button
							data-text='How To Play'
							className='menu-button'
							onClick={() => handleShowModal('#rules')}
						>
							How To Play
						</button>
						<button
							onClick={handleDarkMode}
							data-text={isDarkMode ? 'Light Mode' : 'Dark Mode'}
							className='menu-button dark-mode-toggle'
						>
							{isDarkMode ? 'Light Mode' : 'Dark Mode'}
						</button>
					</div>
				</div>
				<Piano handleTriggerAudio={handleTriggerAudio} />
				{/* <div className='card'>
            {navigator.userAgent.toLowerCase().includes('macintosh') ? null : (
              <>
                <button id='openKeyboard' onClick={(e) => handleClick(e)}>
                  Open Keyboard
                </button>
              </>
            )}
          </div> */}
			</div>
			<Rules
				setIsModalVisible={setIsModalVisible}
				handleShowModal={handleShowModal}
				isDarkMode={isDarkMode}
			/>
			<GameSettings
				isDarkMode={isDarkMode}
				setIsModalVisible={setIsModalVisible}
				handleShowModal={handleShowModal}
			/>
		</>
	);
}

export default App;
