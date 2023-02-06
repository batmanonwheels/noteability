import { useState } from 'react';
import '../../App.css';
import Game from '../Game.jsx';
import pianoLogoB from '../../assets/piano_black.png';
import pianoLogoW from '../../assets/piano_white.png';
import { useNavigate } from 'react-router-dom';

export default function GameSettings({
	isDarkMode,
	setIsDarkMode,
	gameSettings,
	setGameSettings,
	handleShowModal,
}) {
	const navigate = useNavigate();
	const [playerCount, setPlayerCount] = useState(null);
	const [playerOneName, setPlayerOneName] = useState('');
	const [playerTwoName, setPlayerTwoName] = useState('');
	const [playerThreeName, setPlayerThreeName] = useState('');
	const [playerFourName, setPlayerFourName] = useState('');
	const [playerFiveName, setPlayerFiveName] = useState('');
	const [playerSixName, setPlayerSixName] = useState('');
	const initialPlayerData = [
		{
			player: 1,
			name: playerOneName,
			// name: '',
			score: 0,
			color: 'red',
		},
		{
			player: 2,
			name: playerTwoName,
			score: 0,
			color: 'orange',
		},
		{
			player: 3,
			name: playerThreeName,
			score: 0,
			color: 'yellow',
		},
		{
			player: 4,
			name: playerFourName,
			score: 0,
			color: 'green',
		},
		{
			player: 5,
			name: playerFiveName,
			score: 0,
			color: 'blue',
		},
		{
			player: 6,
			name: playerSixName,
			score: 0,
			color: 'indigo',
		},
	];
	const [playerInfo, setPlayerInfo] = useState(initialPlayerData);
	const [scoreLimit, setScoreLimit] = useState(null);

	const randomString = (length) => {
		return Math.round(
			Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
		)
			.toString(36)
			.slice(1);
	};

	const settingsObj = {
		game_id: randomString(6),
		player_count: playerCount,
		player_info: playerInfo,
		score_limit: scoreLimit,
	};

	const handlePlayerName = (e) => {
		setPlayerInfo(initialPlayerData.slice(0, parseInt(playerCount)));
	};

	const handlePlayerNameChange = (e, setter) => {
		console.log(e.target.value);
		setter(e.target.value);
		handlePlayerName(e);
	};

	const handlePlayerCount = (e) => {
		setPlayerCount(parseInt(e.target.id));
		const players = [...document.querySelectorAll('.player')];
		players.forEach((player) => {
			player.disabled = false;
			if (players.indexOf(player) >= parseInt(e.target.id)) {
				player.disabled = true;
			}
		});
	};

	const handleScoreLimit = (e) => {
		setScoreLimit(parseInt(e.target.id));
	};

	const startGame = () => {
		if (settingsObj.player_info.length === playerCount) {
			setGameSettings(settingsObj);
			if (gameSettings.game_id != undefined) {
				navigate(`p/${gameSettings.game_id}`);
			} else {
				alert('Try again!');
			}
		}
	};

	const handleStartGame = (e) => {
		console.log(playerInfo);
		setPlayerInfo(initialPlayerData.slice(0, parseInt(playerCount)));
		startGame();
	};

	const handleCloseModal = (e) => {
		setPlayerInfo(initialPlayerData);
		setPlayerOneName('');
		setPlayerTwoName('');
		setPlayerThreeName('');
		setPlayerFourName('');
		setPlayerFiveName('');
		setPlayerSixName('');
		setPlayerCount(null);
		setScoreLimit(null);
		setGameSettings({});
		const players = [...document.querySelectorAll('.player')];
		players.forEach((player) => {
			player.disabled = true;
		});
		handleShowModal('#settings');
	};

	return (
		<div className='overlay'>
			<div id='settings' className='modal'>
				<div>
					<img
						// src={isDarkMode ? pianoLogoB : pianoLogoW}
						src={pianoLogoB}
						className='logo'
						alt='Piano logo'
					/>
				</div>
				<div id='settings-containter'>
					<div id='player-counter'>
						<h2 className='settings-prompt'>How many players are there?</h2>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='2'
							onClick={(e) => handlePlayerCount(e)}
						>
							2 players
						</button>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='3'
							onClick={(e) => handlePlayerCount(e)}
						>
							3 players
						</button>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='4'
							onClick={(e) => handlePlayerCount(e)}
						>
							4 players
						</button>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='5'
							onClick={(e) => handlePlayerCount(e)}
						>
							5 players
						</button>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='6'
							onClick={(e) => handlePlayerCount(e)}
						>
							6 players
						</button>
					</div>
					<div id='player-names'>
						<h2 className='settings-prompt'>What are your names?</h2>
						<form id='player-form'>
							<input
								disabled
								type='text'
								className='player'
								id='player-one'
								name='0'
								placeholder='Player 1'
								value={playerOneName}
								// onChange={(e) => handlePlayerNameChange(e, setPlayerOneName)}
								onChange={(e) => setPlayerOneName(e.target.value)}
							></input>
							<input
								disabled
								type='text'
								className='player'
								id='player-two'
								name='1'
								placeholder='Player 2'
								value={playerTwoName}
								// onChange={(e) => handlePlayerNameChange(e, setPlayerTwoName)}
								onChange={(e) => setPlayerTwoName(e.target.value)}
							></input>
							<input
								disabled
								type='text'
								className='player'
								id='player-three'
								name='2'
								placeholder='Player 3'
								value={playerThreeName}
								// onChange={(e) => handlePlayerNameChange(e, setPlayerThreeName)}
								onChange={(e) => setPlayerThreeName(e.target.value)}
							></input>
							<input
								disabled
								type='text'
								className='player'
								id='player-four'
								name='3'
								placeholder='Player 4'
								value={playerFourName}
								// onChange={(e) => handlePlayerNameChange(e, setPlayerFourName)}
								onChange={(e) => setPlayerFourName(e.target.value)}
							></input>
							<input
								disabled
								type='text'
								className='player'
								id='player-five'
								name='4'
								placeholder='Player 5'
								value={playerFiveName}
								// onChange={(e) => handlePlayerNameChange(e, setPlayerFiveName)}
								onChange={(e) => setPlayerFiveName(e.target.value)}
							></input>
							<input
								disabled
								type='text'
								className='player'
								id='player-six'
								name='5'
								placeholder='Player 6'
								value={playerSixName}
								// onChange={(e) => handlePlayerNameChange(e, setPlayerSixName)}
								onChange={(e) => setPlayerSixName(e.target.value)}
							></input>
						</form>
					</div>
					<div id='score-limit'>
						<h2 className='settings-prompt'>What's the score limit?</h2>
						<button
							// className={
							// 	scoreLimit === 20 ? 'settings-btn active' : 'settings-btn'
							// }
							className='settings-btn'
							type='button'
							name='score'
							id='20'
							onClick={(e) => handleScoreLimit(e)}
						>
							20 points
						</button>
						<button
							className='settings-btn'
							type='button'
							name='score'
							id='30'
							onClick={(e) => handleScoreLimit(e)}
						>
							30 points
						</button>
						<button
							className='settings-btn'
							type='button'
							name='score'
							id='40'
							onClick={(e) => handleScoreLimit(e)}
						>
							40 points
						</button>
						<button
							className='settings-btn'
							type='button'
							name='score'
							id='50'
							onClick={(e) => handleScoreLimit(e)}
						>
							50 points
						</button>
						<button
							className='settings-btn'
							type='button'
							name='score'
							id='60'
							onClick={(e) => handleScoreLimit(e)}
						>
							60 points
						</button>
					</div>
					<div>
						<button
							id='return-button'
							className='modal-button'
							onClick={() => handleCloseModal()}
						>
							Main Menu
						</button>
						{scoreLimit ? (
							<button
								className='modal-button'
								id='play-button'
								onClick={() => handleStartGame(e)}
							>
								{/* {(gameSettings.game_id = '' ? 'Play' : 'Save Settings')} */}
								Play
							</button>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
