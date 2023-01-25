import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import BackgroundTimer from "react-native-background-timer";
import { useDispatch, useSelector } from "react-redux";
import danger from "../../../../../../../assets/Info/Group188.png";
import { COLORS } from "../../../../../../../constants/theme";
import {
  START_VIB,
  STOP_VIB,
} from "../../../../../../../Redux/Types/Vibration";
import styles from "./styles";
const TimerLine = ({ timerOn, secondsLeft, setSecondsLeft, toggleSwitch,visible }) => {
  const dispatch = useDispatch();
  console.log('visible', visible)
  // Runs when timerOn value changes to start or stop timer
  useEffect(() => {
    if (timerOn) startTimer();
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn,visible]);

  // Checks if secondsLeft = 0 and stop timer if so
  useEffect(() => {
    if (secondsLeft === 0) {
      BackgroundTimer.stopBackgroundTimer();
      dispatch({ type: START_VIB });
    }
  }, [secondsLeft]);

  const Vibration = useSelector((state) => state.Vibration);

  const { vibreur } = Vibration;

  useEffect(() => {
    if (vibreur) {
      console.log("time end", vibreur);
      toggleSwitch();
      dispatch({ type: STOP_VIB });
    }
  }, [vibreur]);

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);
    let displayHours = hours < 10 ? `` : hours;
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    return {
      displayHours,
      displayMins,
      displaySecs,
    };
  };

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft((secs) => {
        if (secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  };

  const currentDate = secondsLeft;
  return (
    <View style={styles.containerH}>
      <View style={styles.TimeRowText}>
        <Image source={danger} style={{ marginRight: 10 }} />
        <Text style={styles.TxtRed}>Votre delais de prépartion est de </Text>
      </View>
      <View style={styles.time}>
        <Text style={{ color: COLORS.red, fontSize: 15, fontWeight: "700" }}>
          {clockify().displayHours} {clockify().displayHours !== 0 ? null : "H"}
          {clockify().displayMins} min
          <Text> {clockify().displaySecs} sec </Text>
        </Text>
      </View>
    </View>
  );
};

export default TimerLine;
