import SongCard from './SongCard';
import Scoreboard from './Scoreboard';
import Piano from './Piano';
import '../App.css';
import { useState } from 'react';

export default function Game({
	gameSettings,
	setGameSettings,
	isDarkMode,
	setIsDarkMode,
	handleTriggerAudio,
	goodKeys,
}) {
	const [turnCount, setTurnCount] = useState(1);
	const [canGivePoints, setCanGivePoints] = useState(false);
	const chars = Array.prototype.slice.call(document.querySelectorAll('.char'));

	console.log(chars);

	const handleChangeSpan = (e) => {
		if (goodKeys.includes(e.key.toLowerCase()) && !!chars) {
			if (chars[0].innerHTML.toUpperCase() === e.key.toUpperCase()) {
				chars[0].style.color = 'green';
				chars.shift();
			} else {
				chars[0].style.color = 'red';
			}
		}
		if (chars.length == 0) {
			setCanGivePoints(true);
		}
	};

	console.log(gameSettings.player_info);

	const handleKeys = (e) => {
		handleTriggerAudio(e);
		handleChangeSpan(e);
	};
	if (turnCount > gameSettings.player_count) {
		setTurnCount(1);
	}

	return (
		<div id='main-menu' tabIndex={0} onKeyDown={(e) => handleKeys(e)}>
			<div id='game-area'>
				<Scoreboard
					playerCount={gameSettings.player_count}
					playerInfo={gameSettings.player_info}
					scoreLimit={gameSettings.score_limit}
					turnCount={turnCount}
					setTurnCount={setTurnCount}
					canGivePoints={canGivePoints}
					setCanGivePoints={setCanGivePoints}
				/>
				<SongCard handleChangeSpan={handleChangeSpan} />
			</div>
			<Piano handleTriggerAudio={handleTriggerAudio} />
		</div>
	);
}
