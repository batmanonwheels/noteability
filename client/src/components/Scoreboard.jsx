import Player from './Player';

export default function Scoreboard({
	playerCount,
	playerInfo,
	scoreLimit,
	turnCount,
	setTurnCount,
	canGivePoints,
	setCanGivePoints,
}) {
	return (
		<div id='scoreboard'>
			{playerInfo.map((player) => (
				<Player
					key={player.player}
					player={player}
					turnCount={turnCount}
					setTurnCount={setTurnCount}
					canGivePoints={canGivePoints}
					setCanGivePoints={setCanGivePoints}
				/>
			))}
		</div>
	);
}
