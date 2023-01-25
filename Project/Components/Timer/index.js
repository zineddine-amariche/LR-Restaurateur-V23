import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import ModelTime from './Components/Model/ModelTime';
import {UseTime} from './Hooks/useTime';
import Head from './Components/Head';
import OtherTimer from './Components/Model/OtherTimer';

const Timer = ({
  isFocused,
  timerOn,
  setTimerOn,
  timeLeft,
  settimeLeft,
}) => {
  const {
    visible,
    show,
    ActiveTimer,
    close,
    toggleSwitch,
    secondsLeft,
    setSecondsLeft,
    VisibleOther,
    ActiveOther,
    CloseOther,
  } = UseTime();

  return (
    <View style={styles.container}>
      <Head
        visible={show}
        toggleSwitch={toggleSwitch}
        timerOn={timerOn}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        isFocused={isFocused}
        setTimerOn={setTimerOn}
        timeLeft={timeLeft}
        settimeLeft={settimeLeft}
      />

      <ModelTime
        visible={visible}
        timerOn={timerOn}
        close={close}
        ActiveTimer={ActiveTimer}
        ActiveOther={ActiveOther}
        setTimerOn={setTimerOn}
        settimeLeft={settimeLeft}
        
      />

      <OtherTimer close={CloseOther} visible={VisibleOther} />
    </View>
  );
};

export default Timer;
