import { useState } from 'react';
import pianoLogo from './assets/piano.png';
import a from './assets/audio/a.mp3';
import w from './assets/audio/w.mp3';
import s from './assets/audio/s.mp3';
import e from './assets/audio/e.mp3';
import d from './assets/audio/d.mp3';
import f from './assets/audio/f.mp3';
import t from './assets/audio/t.mp3';
import g from './assets/audio/g.mp3';
import y from './assets/audio/y.mp3';
import h from './assets/audio/h.mp3';
import u from './assets/audio/u.mp3';
import j from './assets/audio/j.mp3';
import k from './assets/audio/k.mp3';
import o from './assets/audio/o.mp3';
import l from './assets/audio/l.mp3';
import p from './assets/audio/p.mp3';
import semicolon from './assets/audio/comma.mp3';
import './App.css';

function App() {
  const [key, setKey] = useState('none');

  const handleKeyDown = (e) => {
    let audio = document.querySelector(`audio[data-note="${e.key}"]`);
    setKey(e.key);
    audio.currentTime = 0;
    audio !== null ? audio.play() : null;
  };
  const handleClick = (e) => {
    let inputElement = document.getElementById('hiddenInput');
    inputElement.style.visibility = 'visible'; // unhide the input
    inputElement.focus(); // focus on it so keyboard pops
    inputElement.style.visibility = 'hidden'; // hide it again
  };

  return (
    <div tabIndex={0} onKeyDown={(e) => handleKeyDown(e)}>
      <input
        id='hiddenInput'
        width={'100vw'}
        height={'100vh'}
        style={{ visibility: 'hidden' }}
      />
      <div>
        <img src={pianoLogo} className='logo piano' alt='Piano logo' />
      </div>
      <h1>Noteability</h1>
      <div className='card'>
        {navigator.userAgent.toLowerCase().includes('macintosh') ? null : (
          <>
            <button id='openKeyboard' onClick={(e) => handleClick(e)}>
              Open Keyboard
            </button>
          </>
        )}
      </div>
      <audio src={a} data-note='a' preload='auto'></audio>
      <audio src={w} data-note='w' preload='auto'></audio>
      <audio src={s} data-note='s' preload='auto'></audio>
      <audio src={e} data-note='e' preload='auto'></audio>
      <audio src={d} data-note='d' preload='auto'></audio>
      <audio src={f} data-note='f' preload='auto'></audio>
      <audio src={t} data-note='t' preload='auto'></audio>
      <audio src={g} data-note='g' preload='auto'></audio>
      <audio src={y} data-note='y' preload='auto'></audio>
      <audio src={h} data-note='h' preload='auto'></audio>
      <audio src={u} data-note='u' preload='auto'></audio>
      <audio src={j} data-note='j' preload='auto'></audio>
      <audio src={k} data-note='k' preload='auto'></audio>
      <audio src={o} data-note='o' preload='auto'></audio>
      <audio src={l} data-note='l' preload='auto'></audio>
      <audio src={p} data-note='p' preload='auto'></audio>
      <audio src={semicolon} data-note=';' preload='auto'></audio>
    </div>
  );
}

export default App;
