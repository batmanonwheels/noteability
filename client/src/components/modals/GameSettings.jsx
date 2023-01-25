import { useState } from 'react';
import '../../App.css';
import Game from '../Game';
import pianoLogoB from '../../assets/piano_black.png';
import pianoLogoW from '../../assets/piano_white.png';

function GameSettings({ isDarkMode, setIsModalVisible, handleShowModal }) {
	const playerData = {
		name: '',
		score: 0,
		// color: '',
	};
	const [playerCount, setPlayerCount] = useState(null);
	const [playerNames, setPlayerNames] = useState([
		playerData,
		playerData,
		playerData,
		playerData,
		playerData,
		playerData,
	]);
	const [scoreLimit, setScoreLimit] = useState(null);
	const [isReady, setIsReady] = useState(false);
	const [gameSettings, setGameSettings] = useState({});
	console.log(playerNames[0].name);

	const handleGameSettings = (e, setting) => {
		switch (setting) {
			case 'playerCount':
				// console.log(`There are ${e.target.id} players`);
				setPlayerCount(parseInt(e.target.id));
				const players = [...document.querySelectorAll('.player')];
				setPlayerNames([
					playerData,
					playerData,
					playerData,
					playerData,
					playerData,
					playerData,
				]);
				if (playerCount < 6) {
					setPlayerNames(playerNames.slice(0, parseInt(playerCount)));
				}
				players.forEach((player) => {
					player.style.display = 'block';
					player.classList.remove('hidden');
					player.value = null;
					if (players.indexOf(player) >= parseInt(e.target.id)) {
						player.style.display = 'none';
						player.classList.toggle('hidden');
						// player.value = null;
					}
				});

				break;
			case 'playerNames':
				// console.log(playerNames);
				let tempPlayerNames = playerNames.slice();
				tempPlayerNames[0].name = e.target.value;
				console.log(tempPlayerNames);
				setPlayerNames(tempPlayerNames);
				break;
			case 'scoreLimit':
				console.log(`The score limit is ${e.target.id}`);
				setScoreLimit(parseInt(e.target.id));
				break;
			case 'play':
				const settingsObj = {
					game_id: randomString(12),
					player_count: playerCount,
					player_names: playerNames,
					score_limit: scoreLimit,
				};
				settingsObj.player_names.length === playerCount
					? setGameSettings(settingsObj)
					: alert(
							'Invalid settings, try again! Make sure to complete the form in order!'
					  );
				break;
		}
	};
	// const switchSetting = (current, next, clear) => {
	// 	// const parentDiv = document.querySelector('#settings-container');
	// 	const currentDiv = document.querySelector(current);
	// 	const nextDiv = document.querySelector(next);
	// 	currentDiv.classList.remove('.m-fadeIn');
	// 	currentDiv.classList.toggle('.m-fadeOut');
	// 	currentDiv.style.display = 'none';
	// 	nextDiv.style.display = 'block';
	// 	nextDiv.classList.remove('.m-fadeOut');
	// 	nextDiv.classList.toggle('.m-fadeIn');
	// 	!!clear ? setPlayerNames({}) : null;
	// 	// console.log(currentDiv.className, nextDiv.className);
	// };

	// const handlePlayerCount = (e, num) => {
	// 	e.target.focus();
	// 	setPlayerCount(num);
	// 	setPlayerNames({});
	// 	const div = document.querySelector('#player-names');
	// 	// div.style.display = 'inline';
	// 	const players = [...document.querySelectorAll('.player')];
	// 	players.forEach((player) => {
	// 		player.style.display = 'block';
	// 		if (players.indexOf(player) >= parseInt(e.target.id)) {
	// 			player.style.display = 'none';
	// 			player.value = null;
	// 		}
	// 	});
	// console.log(player.children[0].value);
	// const name = player.children[0].name.replace('-', '_');
	// player.children[0].value === null
	//   ? null
	//   : setPlayerNames({ ...playerNames, [name]: player.children[0].value });
	// });
	// 	switchSetting('#player-counter', '#player-names');
	// };

	// const handlePlayerNames = (e) => {
	// 	const player = e.target.name.replace('-', '_');
	// 	// const playerObj = {[player]: e.target.value, points = 0}
	// 	setPlayerNames({ ...playerNames, [player]: e.target.value });
	// };

	// const handleScoreLimit = (e) => {
	// 	setScoreLimit(parseInt(e.target.id));
	// 	// console.log(scoreLimit);
	// };

	// const handleSubmit = () => {
	// 	const settingsObj = {
	// 		game_id: randomString(12),
	// 		player_count: playerCount,
	// 		player_names: playerNames,
	// 		score_limit: scoreLimit,
	// 	};
	// 	{
	// 		Object.keys(settingsObj.player_names).length === playerCount
	// 			? setGameSettings(settingsObj)
	// 			: // setIsReady(true);
	// 			  alert('Invalid settings, try again!');
	// 	}
	// 	console.log(gameSettings);
	// };

	function randomString(length) {
		return Math.round(
			Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
		)
			.toString(36)
			.slice(1);
	}

	return (
		<div className='overlay'>
			<div id='settings' className='modal'>
				<div>
					<img
						src={!isDarkMode ? pianoLogoB : pianoLogoW}
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
							onClick={(e) => handleGameSettings(e, 'playerCount')}
						>
							2 players
						</button>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='3'
							onClick={(e) => handleGameSettings(e, 'playerCount')}
						>
							3 players
						</button>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='4'
							onClick={(e) => handleGameSettings(e, 'playerCount')}
						>
							4 players
						</button>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='5'
							onClick={(e) => handleGameSettings(e, 'playerCount')}
						>
							5 players
						</button>
						<button
							className='settings-btn'
							type='radio'
							name='count'
							id='6'
							onClick={(e) => handleGameSettings(e, 'playerCount')}
						>
							6 players
						</button>
					</div>
					<div id='player-names'>
						<h2 className='settings-prompt'>What are your names?</h2>
						<form id='player-form'>
							<input
								type='text'
								className='player hidden'
								id='player-one'
								name='0'
								placeholder='Player 1'
								value={playerNames[0].name}
								onChange={(e) => handleGameSettings(e, 'playerNames')}
							></input>
							<input
								type='text'
								className='player hidden'
								id='player-two'
								name='1'
								placeholder='Player 2'
								value={playerNames[1].name}
								onChange={(e) => handleGameSettings(e, 'playerNames')}
							></input>
							<input
								type='text'
								className='player hidden'
								id='player-three'
								name='2'
								placeholder='Player 3'
								value={playerNames[2].name}
								onChange={(e) => handleGameSettings(e, 'playerNames')}
							></input>
							<input
								type='text'
								className='player hidden'
								id='player-four'
								name='3'
								placeholder='Player 4'
								value={playerNames[3].name}
								onChange={(e) => handleGameSettings(e, 'playerNames')}
							></input>
							<input
								type='text'
								className='player hidden'
								id='player-five'
								name='4'
								placeholder='Player 5'
								value={playerNames[4].name}
								onChange={(e) => handleGameSettings(e, 'playerNames')}
							></input>
							<input
								type='text'
								className='player hidden'
								id='player-six'
								name='5'
								placeholder='Player 6'
								value={playerNames[5].name}
								onChange={(e) => handleGameSettings(e, 'playerNames')}
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
							onClick={(e) => handleGameSettings(e, 'scoreLimit')}
						>
							20 points
						</button>
						<button
							className='settings-btn'
							type='button'
							name='score'
							id='30'
							onClick={(e) => handleGameSettings(e, 'scoreLimit')}
						>
							30 points
						</button>
						<button
							className='settings-btn'
							type='button'
							name='score'
							id='40'
							onClick={(e) => handleGameSettings(e, 'scoreLimit')}
						>
							40 points
						</button>
						<button
							className='settings-btn'
							type='button'
							name='score'
							id='50'
							onClick={(e) => handleGameSettings(e, 'scoreLimit')}
						>
							50 points
						</button>
						<button
							className='settings-btn'
							type='button'
							name='score'
							id='60'
							onClick={(e) => handleGameSettings(e, 'scoreLimit')}
						>
							60 points
						</button>
						<div>
							<button
								id='return-button'
								onClick={() => handleShowModal('#settings')}
							>
								Main Menu
							</button>
							{scoreLimit ? (
								<button
									className='btn'
									id='play-button'
									onClick={() => handleGameSettings(e, 'play')}
								>
									Play
								</button>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameSettings;
