import React from 'react';
import useSound from 'use-sound';
import styles from './Home.css';

const COLORS = {
  passive: 'goldenrod',
  positive: 'darkgreen'
};

export default function Home() {
  const [playGoOn] = useSound('./sounds/go-on.wav');
  const [playAgree] = useSound('./sounds/i-wholeheartedly-agree.wav');
  const [playAudioOnly] = useSound('./sounds/audio-only.wav');
  const [playAhhhYup] = useSound('./sounds/ahhhh-yup.wav');
  const [playBrilliant] = useSound('./sounds/brilliant.wav');
  const [playThinkSomeMore] = useSound('./sounds/going-to-think-some-more.wav');
  const [playRepeatYourself] = useSound('./sounds/repeat-yourself.wav');

  const sounds = [
    {
      play: playAudioOnly,
      title: 'Audio Only',
      color: COLORS.passive
    },
    {
      play: playGoOn,
      title: 'Go on!',
      color: COLORS.passive
    },
    {
      play: playAgree,
      title: 'I agree!',
      color: COLORS.positive
    },
    {
      play: playAhhhYup,
      title: 'Ahh yup',
      color: COLORS.positive
    },
    {
      play: playBrilliant,
      title: 'Brilliant!',
      color: COLORS.positive
    },
    {
      play: playThinkSomeMore,
      title: 'Gonna think some more',
      color: COLORS.passive
    },
    {
      play: playRepeatYourself,
      title: 'Repeat yourself',
      color: COLORS.passive
    }
  ];

  return (
    <div className={styles.container} data-tid="container">
      {sounds.map(({ play, title, color }) => (
        <div
          key={title}
          onClick={play}
          className={styles.button}
          style={{
            backgroundColor: color
          }}
        >
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
}
