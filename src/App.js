import React, { useState } from 'react';
import styles from './App.module.css';
import { useInterval } from './utils';
import parrot from './parrot.gif';
import fizzbuzz from './fizzbuzz.png';
import fizz from './fizz.png';
import buzz from './buzz.png';
import backgroundMusic from './Darude - Sandstorm.ogg';
import fizzbuzzSrc from './fizzbuzz.ogg';
import fizzSrc from './fizz.ogg';
import buzzSrc from './buzz.ogg';

const fizzAudio = new Audio(fizzSrc);
const buzzAudio = new Audio(buzzSrc);
const fizzbuzzAudio = new Audio(fizzbuzzSrc);

function App() {
  const [timer, setTimer] = useState(1);
  useInterval(() => setTimer(timer + 1), 800);
  const shouldRenderFizz = timer % 3 === 0;
  const shouldRenderBuzz = timer % 5 === 0;
  if (shouldRenderFizz && shouldRenderBuzz) {
    fizzbuzzAudio.play();
  } else if (shouldRenderFizz) {
    fizzAudio.play();
  } else if (shouldRenderBuzz) {
    buzzAudio.play();
  }
  return (
    <div className={styles.app}>
      <div className={styles.timer}>{timer}</div>
      <img
        className={styles.fizzbuzz}
        style={{
          display: shouldRenderFizz && shouldRenderBuzz ? 'block' : 'none',
        }}
        src={fizzbuzz}
        alt='buzz'
      />
      <img
        className={styles.fizz}
        style={{
          display: shouldRenderFizz && !shouldRenderBuzz ? 'block' : 'none',
        }}
        src={fizz}
        alt='fizz'
      />
      <img
        className={styles.buzz}
        style={{
          display: shouldRenderBuzz && !shouldRenderFizz ? 'block' : 'none',
        }}
        src={buzz}
        alt='buzz'
      />
      <img className={styles.parrot} src={parrot} alt='' />
      <audio
        autoPlay
        loop
        type='audio/ogg; codecs=vorbis'
        src={backgroundMusic}
      ></audio>
    </div>
  );
}

export default App;
