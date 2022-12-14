function PlayerPoints({ playerCount, playerNames, scoreLimit }) {
  console.log(playerNames);
  return (
    <div>
      {playerCount}, {scoreLimit}
    </div>
  );
}

export default PlayerPoints;
