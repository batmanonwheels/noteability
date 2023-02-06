function SongCard({ handleChangeSpan }) {
	const song = {
		name: 'Seek & Destroy',
		artist: 'SZA',
		album: 'SOS',
		year: 2022,
		tabs: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
	};
	return (
		<div id='song-card'>
			<h1 id='song-name'>{song.name}</h1>
			<h2 id='artist-name'>{song.artist}</h2>
			<h3 id='album-name'>{song.album}</h3>
			<p id='release-year'>{song.year}</p>
			<p id='tabs'>
				{song.tabs.map((note) => {
					return (
						<p key={song.tabs.indexOf(note)} className='char'>
							{note}
						</p>
					);
				})}
			</p>
		</div>
	);
}

export default SongCard;
