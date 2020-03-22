import React, { useState } from 'react';
import styles from './App.module.css';
import { useInterval } from './utils';
import fizz from './fizz.png';
import fizzAudio from './fizz.ogg';
import buzz from './buzz.png';
import buzzAudio from './buzz.ogg';
import fizzbuzz from './fizzbuzz.png';
import fizzbuzzAudio from './fizzbuzz.ogg';
import parrot from './parrot.gif';
import backgroundMusic from './Darude - Sandstorm.ogg';

function App() {
  const [timer, setTimer] = useState(1);
  useInterval(() => setTimer(timer + 1), 600);
  const shouldRenderFizz = timer % 3 === 0;
  const shouldRenderBuzz = timer % 5 === 0;
  return (
    <div className={styles.app}>
      <div className={styles.timer}>{timer}</div>
      {shouldRenderFizz && shouldRenderBuzz ? (
        <>
          <audio
            autoPlay
            type='audio/ogg; codecs=vorbis'
            src={fizzbuzzAudio}
          ></audio>
          <img className={styles.fizzbuzz} src={fizzbuzz} alt='buzz' />
        </>
      ) : (
        (shouldRenderFizz && (
          <>
            <audio
              autoPlay
              type='audio/ogg; codecs=vorbis'
              src={fizzAudio}
            ></audio>
            <img className={styles.fizz} src={fizz} alt='fizz' />
          </>
        )) ||
        (shouldRenderBuzz && (
          <>
            <audio
              autoPlay
              type='audio/ogg; codecs=vorbis'
              src={buzzAudio}
            ></audio>
            <img className={styles.buzz} src={buzz} alt='buzz' />
          </>
        ))
      )}
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
