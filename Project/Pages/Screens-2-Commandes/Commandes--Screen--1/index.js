import React, {useEffect, useLayoutEffect, useState} from 'react';
import {styles} from './Hooks/styles';
import {View, StatusBar, Vibration} from 'react-native';
import Header from '../../../Components/Headers/header-1-Primary';
import {COLORS} from '../../../constants/theme';
// import Timer from './Components/Timer';
import {GetAllCommandes} from '../../../Redux/Actions/Commandes';
import {useIsFocused, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useCommandes} from './Hooks/useCommandes';
import Sound from 'react-native-sound';
import {COMMANDES_BY_STATUS, LOADING} from '../../../Redux/Types/Commandes';
import ToastMessages from '../../../Components/ToastMessages';
import KeepAwake from 'react-native-keep-awake';
import Laoder from '../../../Components/Laoder';
import BackgroundTimer from 'react-native-background-timer';
import ButtonsTabsMenue from '../../../Components/Buttons/TabsButtons/ButtonsTabsMenue';
import Timer from '../../../Components/Timer';
import {isHomeFocused, startTimer} from '../../../Redux/Actions/Timer';
import {UseTime} from '../../../Components/Timer/Hooks/useTime';
import { CHANGE_STYLES } from '../../../Redux/Types/Timer';

const LazySectionTYpe = React.lazy(() => import('./Components/SectionType'));
const Commandes = ({navigation}) => {
  const isFocused = useIsFocused();
  const {Token} = useSelector(state => state.auth);
  const {status_active, toComfirm, others} = useSelector(
    state => state.Commandes,
  );
  const {error, type} = useSelector(state => state.Printer);
  const {secondLeft, isTimerActive, second_selected} = useSelector(
    state => state.TimerSlice,
  );
  const {setShow} = UseTime();

  const {
    mergedArray,
    refresh,
    configHead,
    dispatch,
    ToCommandes,
    ToReservation,
  } = useCommandes();
  const [Visible, setVisible] = useState(false);
  const [timerOn, setTimerOn] = useState(false);

  const [timeLeft, settimeLeft] = useState(second_selected);

  const openMenu = () => {
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
  };
  const stopVib = () => {
    Vibration.cancel();
  };
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (toComfirm || others) {
        try {
          if (isFocused) {
            if (!toComfirm) {
              dispatch({type: LOADING});
            }

            GetAllCommandes(dispatch, configHead);
          }
        } catch (e) {
          console.log('------22-', e);
        }
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [Token, isFocused, refresh]);

  var Filter = mergedArray.filter(data => {
    return data.kitchenstate_id == 20;
  });
  //keep the sound runnig on background
  useEffect(() => {
    if (Filter?.length !== 0) startSounder();
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [toComfirm.length, isFocused]);

  const startSounder = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      if (Filter?.length == 0) {
        stopVib();
        console.log('stop');
        KeepAwake.activate();
      } else if (Filter.length !== 0) {
        var mySound = new Sound('son.mp3', Sound.MAIN_BUNDLE, error => {
          if (error) {
            console.log('Error loading sound: ' + error);
            return;
          } else {
            if (Filter.length !== 0) {
              mySound.play(success => {
                // console.log('success', success)
                if (success) {
                  mySound.setNumberOfLoops(Filter.length);
                  mySound.getNumberOfLoops();
                  mySound.release();
                  mySound.setVolume(0.9);
                  KeepAwake.activate();
                } else {
                  console.log('Issue playing file');
                }
              });
            }
          }
        });
      }
    }, 5000);
  };

  function filterData() {
    if (status_active == 'À préparer') {
      var Filter = mergedArray.filter(data => {
        return data.kitchenstate_id == 20;
      });
    }
    if (status_active == 'En Cuisine') {
      var Filter = mergedArray.filter(data => {
        return data.kitchenstate_id == 30;
      });
    }
    if (status_active == 'Prêtes') {
      var Filter = mergedArray.filter(data => {
        return data.kitchenstate_id == 40;
      });
    }
    if (status_active == 'Toutes') {
      var Filter = mergedArray.filter(data => {
        return mergedArray;
      });
    }
    dispatch({type: COMMANDES_BY_STATUS, payload: Filter});
  }
  useEffect(() => {
    if (
      status_active === 'À préparer' ||
      status_active === 'En Cuisine' ||
      status_active === 'Prêtes'
    ) {
      filterData();
    }
  }, [status_active, isFocused, refresh]);

  // console.log('timerOn', timerOn);
  // console.log('isFocused', isFocused);
  const route = useRoute();

  // console.log('isTimerActive', isTimerActive);
  // console.log('  second_selected', second_selected);

  useEffect(() => {
    if (
      (route.name === 'Commandes' || 'Reservations') &&
      isTimerActive &&
      second_selected
    ) {
      startTimer(dispatch, false);
      setTimeout(() => {
        startTimer(dispatch, true);
      }, 500);
    }
    //  if (!isFocused && isTimerActive) {
    //    setTimerOn(false);
    //  }
  }, [isFocused, route.name]);

  useEffect(() => {
    if (timeLeft == 0) {
      BackgroundTimer.stopBackgroundTimer();
      startTimer(dispatch, false);
      // console.log('enter');
      // dispatch({type: START_VIB});
      dispatch({type:CHANGE_STYLES, payload:false})

    }
  }, [timeLeft]);

  // console.log("route name /+/+/+/+/",route.name);

  // console.log('first', route.name)
  // console.log('-------------------- is ---- isHomeFocused', isHome_Focused)

  // useEffect(() => {
  //   isHomeFocused(dispatch, route.name);
  // }, [isFocused,route.name,dispatch]);
  // console.log('-------------------- C ---- ', isHome_Focused);
  // console.log('.............. 1 :', route.name);
  // console.log('timeLeft', timeLeft);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Header
        navigation={navigation}
        Color={COLORS.primary}
        openMenu={openMenu}
        closeMenu={closeMenu}
        Visible={Visible}
      />
      {error && <ToastMessages type={type} error={error} />}

      <ButtonsTabsMenue
        ToCommandes={ToCommandes}
        ToReservation={ToReservation}
        navigation={navigation}
      />
      <>
        <Timer
          setTimerOn={setTimerOn}
          timerOn={timerOn}
          isFocused={isFocused}
          timeLeft={timeLeft}
          settimeLeft={settimeLeft}
        />

        <React.Suspense fallback={<Laoder />}>
          <LazySectionTYpe navigation={navigation} />
        </React.Suspense>
      </>
    </View>
  );
};

export default Commandes;
