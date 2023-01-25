import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import ModelTime from './Components/Model/ModelTime';
import {UseTime} from './Hooks/useTime';
import Head from './Components/Head';

const Timer = () => {
  const {
    visible,
    show,
    isEnabled,
    timerOn,
    ActiveTimer,
    start,
    close,
    toggleSwitch,
    secondsLeft,
    setSecondsLeft,
  } = UseTime();
  // console.log('visible', visible);
  return (
    <View style={styles.container}>
      <Head
        visible={show}
        toggleSwitch={toggleSwitch}
        timerOn={timerOn}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
      />

      <ModelTime
        start={start}
        visible={visible}
        timerOn={timerOn}
        close={close}
        ActiveTimer={ActiveTimer}
      />
    </View>
  );
};

export default Timer;

