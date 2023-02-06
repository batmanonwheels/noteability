import { useState } from 'react';

export default function Player({
	player,
	turnCount,
	setTurnCount,
	canGivePoints,
	setCanGivePoints,
}) {
	const [points, setPoints] = useState(player.score);
	const [isMyTurn, setIsMyTurn] = useState(
		turnCount === player.player ? true : false
	);

	const handleTurnChange = () => {
		if (turnCount === player.player) {
			setIsMyTurn(true);
		} else if (turnCount !== player.player) {
			setIsMyTurn(false);
		}
	};

	const handleGivePoints = () => {
		if (canGivePoints) {
			player.score++;
			setPoints(points + 1);
			console.log(player.score, points);
			setCanGivePoints(false);
			setTurnCount(turnCount + 1);
			handleTurnChange();
		} else {
			alert('You must finish playing the song before assigning a point!');
			console.log(turnCount);
		}
	};
	console.log(isMyTurn, player.name);

	return (
		<div onClick={(e) => handleGivePoints(e)}>
			<p>{player.name}</p>
			<p>
				{points}
				{points === 1 ? ' point' : ' points'}
			</p>
		</div>
	);
}
