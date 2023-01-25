import a from '../assets/audio/a.mp3';
import w from '../assets/audio/w.mp3';
import s from '../assets/audio/s.mp3';
import e from '../assets/audio/e.mp3';
import d from '../assets/audio/d.mp3';
import f from '../assets/audio/f.mp3';
import t from '../assets/audio/t.mp3';
import g from '../assets/audio/g.mp3';
import y from '../assets/audio/y.mp3';
import h from '../assets/audio/h.mp3';
import u from '../assets/audio/u.mp3';
import j from '../assets/audio/j.mp3';
import k from '../assets/audio/k.mp3';
import o from '../assets/audio/o.mp3';
import l from '../assets/audio/l.mp3';
import p from '../assets/audio/p.mp3';
import semicolon from '../assets/audio/comma.mp3';
import '../assets/css/piano.css';

function Piano({ handleTriggerAudio }) {
  return (
    <div className='piano' tabIndex={0}>
      <div className='keys'>
        <div
          className='key'
          id='a'
          data-note='a'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key sharp'
          id='w'
          data-note='w'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='s'
          data-note='s'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key sharp'
          id='e'
          data-note='e'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='d'
          data-note='d'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='f'
          data-note='f'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key sharp'
          id='t'
          data-note='t'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='g'
          data-note='g'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key sharp'
          id='y'
          data-note='y'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='h'
          data-note='h'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key sharp'
          id='u'
          data-note='u'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='j'
          data-note='j'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='k'
          data-note='k'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key sharp'
          id='o'
          data-note='o'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='l'
          data-note='l'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key sharp'
          id='p'
          data-note='p'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
        <div
          className='key'
          id='semicolon'
          data-note=';'
          onClick={(e) => handleTriggerAudio(e)}
        ></div>
      </div>
      <>
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
      </>
    </div>
  );
}

export default Piano;
