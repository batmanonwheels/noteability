function SongCard() {
  // const card = document.querySelector('#song-card');
  // const tabs = card.querySelector('#tabs');
  // const chars = tabs.querySelectorAll('.char');

  // document.addEventListener('keypress', (event) => {
  //   const key = event.key.toUpperCase();
  //   const char = chars.find((char) => char.textContent === key);
  //   if (char) {
  //     char.style.color = '#FF0000';
  //   }
  // });

  return (
    <div id='song-card'>
      <h1 id='song-name'></h1>
      <h2 id='artist-name'></h2>
      <h3 id='album-name'></h3>
      <p id='release-year'></p>
      <p id='tabs'>
        <span class='char'>a</span>
        <span class='char'>s</span>
        <span class='char'>d</span>
        <span class='char'>f</span>
        <span class='char'>g</span>
        <span class='char'>h</span>
        <span class='char'>j</span>
        <span class='char'>k</span>
        <span class='char'>l</span>
        <span class='char'>;</span>
        <span class='char'>e</span>
        <span class='char'>a</span>
        <span class='char'>s</span>
      </p>
    </div>
  );
}

export default SongCard;
