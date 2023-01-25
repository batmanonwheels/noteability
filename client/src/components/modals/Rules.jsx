import pianoLogoB from '../../assets/piano_black.png';
import pianoLogoW from '../../assets/piano_white.png';
import '../../App.css';

function Rules({ isDarkMode, setIsModalVisible, handleShowModal }) {
	return (
		// <div className='overlay' onClick={() => handleShowModal('#rules')}>
		<div id='rules' className='modal'>
			<div>
				<img
					src={!isDarkMode ? pianoLogoB : pianoLogoW}
					className='logo'
					alt='Piano logo'
				/>
			</div>

			{/* <h1 className='rules h1'>NoteAbility</h1> */}
			<div className='rules'>
				<h2 className='rules h2'>How To Play</h2>
				<p className='rules'>
					The piano player chooses a song to play for the player to their left.
					The piano player then chooses a song for the next player clockwise and
					finally plays the third song for the next player. If the player whose
					song it is can guess the title they will receive four points while the
					piano player will receive two points.
					<br></br>
					<br></br>
					If the player is unable to guess their song though, all of the other
					players have an opportunity to guess the song's title. If another
					player guesses correctly they score two points while the piano player
					scores one point. The player who guessed correctly then takes the
					piano and draws a new card.
					<br></br>
					<br></br>
					If all of the players believe the piano player is purposely sabotaging
					the song so no one has a chance to guess the song, they can hold a
					vote. If all of the players agree, the piano is taken away from the
					current piano player and passed to the next player.
					<br></br>
					<br></br>
				</p>
				<h2>How To Win</h2>
				<p className='rules'>
					In both the team and individual game, the first player/team to get 50
					points (or the agreed upon number of points) wins the game.
				</p>
			</div>
			<button id='return-button' onClick={() => handleShowModal('#rules')}>
				Main Menu
			</button>
		</div>
		// </div>
	);
}

export default Rules;
