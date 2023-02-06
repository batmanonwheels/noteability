import { useState } from 'react';
import pianoLogoB from '../assets/piano_black.png';
import pianoLogoW from '../assets/piano_white.png';
import '../App.css';
import GameSettings from './modals/GameSettings';
import Rules from './modals/Rules';
import Piano from './Piano';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function MainMenu({
	gameSettings,
	setGameSettings,
	isDarkMode,
	setIsDarkMode,
	handleTriggerAudio,
}) {
	// const [isPlayClicked, setIsPlayClicked] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleShowModal = (elementId) => {
		let modal = document.querySelector(`${elementId}`);
		let main = document.querySelector('#main-menu');
		isModalVisible
			? (modal.style.display = 'none')
			: (modal.style.display = 'block');
		main.classList.toggle('#is-blurred');
		setIsModalVisible(!isModalVisible);
	};

	const handleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		let element = document.querySelector('#main-menu');
		element.classList.toggle('dark-mode');
	};

	return (
		<>
			<div tabIndex={0} onKeyDown={(e) => handleTriggerAudio(e)} id='main-menu'>
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
							New Game
						</button>
						<button
							data-text='Play'
							className='menu-button'
							onClick={() => alert('Continue functionality coming soon!')}
						>
							Continue Game
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
			</div>
			<Rules handleShowModal={handleShowModal} isDarkMode={isDarkMode} />
			<GameSettings
				isDarkMode={isDarkMode}
				handleShowModal={handleShowModal}
				gameSettings={gameSettings}
				setGameSettings={setGameSettings}
				handleTriggerAudio={handleTriggerAudio}
			/>
		</>
	);
}
