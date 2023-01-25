import {View, Text, Switch} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/theme';
import {styles} from './styles';
import TimerLine from '../TimeLeft';
import { useSelector } from 'react-redux';

const Head = ({
  visible,
  toggleSwitch,
  timerOn,
  secondsLeft,
  setSecondsLeft,
  isFocused,
  setTimerOn,
  timeLeft,
  settimeLeft,

}) => {
  
  
  const {secondLeft,isTimerActive,changeStyles} = useSelector((state)=>state.TimerSlice)
  // console.log('isTimerActive', isTimerActive)
  let BAcCOl = changeStyles ? COLORS.red : COLORS.gray;

  // console.log('changeStyles', changeStyles)


  return (
    <View style={styles.BoxTime}>
      <View style={[styles.Row, {backgroundColor: BAcCOl}]}>
    
        <Text style={[styles.TextMode,{color:changeStyles?"#FFF":'#000'}]}>Pause</Text>

        <Switch
          trackColor={{false: COLORS.primary, true: COLORS.primary}}
          thumbColor={isTimerActive ? COLORS.white : COLORS.white}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isTimerActive}
        />
      </View>

      {isTimerActive && (
        <TimerLine
          // timerOn={timerOn}
          // secondsLeft={secondsLeft}
          // setSecondsLeft={setSecondsLeft}
          // toggleSwitch={toggleSwitch}
          // visible={isTimerActive}
          // isFocused={isFocused}
          // setTimerOn={setTimerOn}
          timeLeft={timeLeft}
          settimeLeft={settimeLeft}

        />
      )}
    </View>
  );
};

export default Head;
