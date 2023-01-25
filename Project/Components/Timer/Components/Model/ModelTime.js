import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import UseModelTimer from './UseModelTimer';
import imgClose from '../../../../assets/Info/x(1).png';
import {styles} from './Styles';
import {dispatchClosingRestaurant} from '../../../../Redux/Actions/closingRestaurant';
import {useDispatch, useSelector} from 'react-redux';
import {startTimer} from '../../../../Redux/Actions/Timer';

const {width, height} = Dimensions.get('screen');

const ModelTime = ({
  visible,
  ActiveTimer,
  timerOn,
  setTimerOn,
  close,
  ActiveOther,
  settimeLeft
}) => {
  const auth = useSelector(state => state.auth);
  const {Token} = auth;
  const dispatch = useDispatch();

  let configHead = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'fr',
      Authorization: 'Bearer ' + Token,
    },
  };
  return (
    <UseModelTimer transparent visible={visible}>
      <View style={styles.ConatinerClose}>
        <TouchableOpacity onPress={close}>
          <Image source={imgClose} color={'#078'} size={35} />
        </TouchableOpacity>
      </View>

      <View style={styles.Title}>
        <Text style={styles.TextTitle}>Durée de fermeture</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            // dispatchClosingRestaurant(dispatch, configHead, {"time":900});
            ActiveTimer(900);
            startTimer(dispatch, true);
            settimeLeft(900)
          }}>
          <Text style={styles.TextBtn}>15 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            dispatchClosingRestaurant(dispatch, configHead, 1800, {time: 1800});
            ActiveTimer(1800);
             startTimer(dispatch, true);
            settimeLeft(1800)
          }}>
          <Text style={styles.TextBtn}>30 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            dispatchClosingRestaurant(dispatch, configHead, {time: 2700});
            ActiveTimer(2700);

             startTimer(dispatch, true);
            settimeLeft(2700)
          }}>
          <Text style={styles.TextBtn}>45 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            dispatchClosingRestaurant(dispatch, configHead, {time: 3600});
            ActiveTimer(3600);
             startTimer(dispatch, true);
            settimeLeft(3600)
          }}>
          <Text style={styles.TextBtn}>60 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            //dispatchClosingRestaurant(dispatch, configHead, {"time":"endofday"});
            close();
            ActiveOther();
          }}>
          <Text style={styles.TextBtn}>Fin journée </Text>
        </TouchableOpacity>
      </View>
    </UseModelTimer>
  );
};

export default ModelTime;

// <TouchableOpacity
// style={[
//   {
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#087',
//     paddingHorizontal: 20,
//     height: height * 0.05,
//     marginTop: 15,
//   },
// ]}
// onPress={start}>
// <Text style={[{color: '#fff', fontSize: 15, fontWeight: 'bold'}]}>
//   {timerOn ? 'Stop' : 'démmarer'}
// </Text>
// </TouchableOpacity>
