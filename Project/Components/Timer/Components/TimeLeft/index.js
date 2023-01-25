import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {useDispatch, useSelector} from 'react-redux';
import danger from '../../../../assets/Info/Group188.png';
import {COLORS} from '../../../../constants/theme';
import { getSecondLeft } from '../../../../Redux/Actions/Timer';
import {START_VIB} from '../../../../Redux/Types/Vibration';
import { UseTime } from '../../Hooks/useTime';
import styles from './styles';


const TimerLine = ({
  timeLeft,
  settimeLeft
}) => {
  const dispatch = useDispatch();
  const {secondLeft,isTimerActive,second_selected} = useSelector((state)=>state.TimerSlice)
const {toggleSwitch}=UseTime()


// console.log('----', typeof timeLeft)

// console.log('isTimerActive', isTimerActive)
  useEffect(() => {
     if (isTimerActive) startTimer();
     else BackgroundTimer.stopBackgroundTimer(); 
     return () => {
       BackgroundTimer.stopBackgroundTimer();
     };
  }, [isTimerActive]);




  // useEffect(() => {
  //   if(secondLeft==='Reservation'){
  //     getSecondLeft(dispatch,timeLeft)
      
  //   }
  // }, [secondLeft])
  
  // console.log('secondLeft', secondLeft)

  const Vibration = useSelector(state => state.Vibration);

  const {vibreur} = Vibration;

  // const TimerSlice = useSelector(state => state.TimerSlice);

  // useEffect(() => {
  //   if (vibreur) {
  //     // console.log("time end", vibreur);
  //     toggleSwitch();
  //     dispatch({type: STOP_VIB});
  //   }
  // }, [vibreur]);

  const clockify = () => {
    let hours = Math.floor(timeLeft / 60 / 60);
    let mins = Math.floor((timeLeft / 60) % 60);
    let seconds = Math.floor(timeLeft % 60);
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
      settimeLeft(secs => {
        if (secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  };

  return (
    <View style={styles.containerH}>
      <View style={styles.TimeRowText}>
        <Image source={danger} style={{marginRight: 10}} />
        <Text style={styles.TxtRed}>Vous êtes en pause pendant encore </Text>
      </View>
      <View style={styles.time}>
        <Text style={{color: COLORS.red, fontSize: 15, fontWeight: '700'}}>
          {clockify().displayHours} {clockify().displayHours !== 0 ? null : 'H'}
          {clockify().displayMins} min
          <Text> {clockify().displaySecs} sec </Text>
        </Text>
      </View>
    </View>
  );
};

export default TimerLine;
