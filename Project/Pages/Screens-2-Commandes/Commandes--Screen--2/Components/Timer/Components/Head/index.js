import {View, Text, Switch} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../../../constants/theme';
import {styles} from './styles';
import TimerLine from '../Time-Reste';

const Head = ({
  visible,
  toggleSwitch,
  timerOn,
  secondsLeft,
  setSecondsLeft,
}) => {
  let BAcCOl = visible ? COLORS.red : COLORS.gray;

  return (
    <View style={styles.BoxTime}>
      <View style={[styles.Row, {backgroundColor: BAcCOl}]}>
        <Text style={styles.TextMode}>Besoin plus de temps</Text>

        <Switch
          trackColor={{false: COLORS.primary, true: COLORS.primary}}
          thumbColor={visible ? COLORS.white : COLORS.white}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={visible}
        />
      </View>

      {visible && (
        <TimerLine
          timerOn={timerOn}
          secondsLeft={secondsLeft}
          setSecondsLeft={setSecondsLeft}
          toggleSwitch={toggleSwitch}
        />
      )}
    </View>
  );
};

export default Head;
