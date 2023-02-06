import pianoLogoB from '../../assets/piano_black.png';
import pianoLogoW from '../../assets/piano_white.png';
import '../../App.css';

function Rules({ isDarkMode, setIsModalVisible, handleShowModal }) {
	return (
		// <div className='overlay' onClick={() => handleShowModal('#rules')}>
		<div id='rules' className='modal'>
			<div>
				<img
					// src={!isDarkMode ? pianoLogoB : pianoLogoW}
					src={pianoLogoB}
					className='logo'
					alt='Piano logo'
				/>
			</div>

			{/* <h1 className='rules h1'>NoteAbility</h1> */}
			<div className='rules'>
				<h2 className='rules h2'>How To Play</h2>
				<p className='rules'>
					The current pianist is randomly given a song to play for everyone.
					<br></br>
					<br></br>
					All players have an opportunity to guess the song's title. If another
					player guesses correctly, they score two points while the pianist
					scores one point. The player who guessed correctly then becomes the
					new pianist and receives a new song.
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
				<p className='rules'>The first player to reach the score limit wins!</p>
			</div>
			<button id='return-button' onClick={() => handleShowModal('#rules')}>
				Main Menu
			</button>
		</div>
		// </div>
	);
}

export default Rules;
