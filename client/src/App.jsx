import { useState } from 'react';
import 'animate.css';
import pianoLogoB from './assets/piano_black.png';
import pianoLogoW from './assets/piano_white.png';
import './App.css';
import MainMenu from './components/MainMenu';
import Game from './components/Game';
import Piano from './components/Piano';
import SongCard from './components/SongCard';
import GameSettings from './components/modals/GameSettings';
import Rules from './components/modals/Rules';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Route, Router, Routes } from 'react-router-dom';

export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [gameSettings, setGameSettings] = useState({});
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
	return (
		<Routes>
			<Route
				path='/'
				element={
					<MainMenu
						isDarkMode={isDarkMode}
						setIsDarkMode={setIsDarkMode}
						gameSettings={gameSettings}
						setGameSettings={setGameSettings}
						handleTriggerAudio={handleTriggerAudio}
					/>
				}
			/>
			<Route
				path='p/:gameId'
				element={
					<Game
						goodKeys={goodKeys}
						isDarkMode={isDarkMode}
						setIsDarkMode={setIsDarkMode}
						gameSettings={gameSettings}
						setGameSettings={setGameSettings}
						handleTriggerAudio={handleTriggerAudio}
					/>
				}
			/>
		</Routes>
	);
}
