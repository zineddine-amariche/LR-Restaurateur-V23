import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import ModelContainer from './UseModelTimer';
import imgClose from '../../../../../../../assets/Info/x(1).png';
import {styles} from './Styles';
const {width, height} = Dimensions.get('screen');

const ModelTime = ({visible, ActiveTimer, timerOn, close}) => {
  return (
    <ModelContainer transparent visible={visible}>
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
            ActiveTimer(900);
          }}>
          <Text style={styles.TextBtn}>15 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            ActiveTimer(1800);
          }}>
          <Text style={styles.TextBtn}>30 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            ActiveTimer(2700);
          }}>
          <Text style={styles.TextBtn}>45 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            ActiveTimer(3600);
          }}>
          <Text style={styles.TextBtn}>60 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeChose}
          onPress={() => {
            // setVisibleAll(false);
            // setVisible(true);
          }}>
          <Text style={styles.TextBtn}>autre ... </Text>
        </TouchableOpacity>
      </View>
    </ModelContainer>
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
