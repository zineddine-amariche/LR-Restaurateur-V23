import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import Fermer from '../../../../../../assets/paramètres/Group217.png';
const DaysList = ({days, index,open}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.Midi,{alignItems:'flex-start',}]}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            width: 93,
            padding: 2,
            justifyContent: 'center',
          }}>
          {days.jour}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('DetailsSetTime', days ={days} ,index={index})
          console.log(`index`, index);
          open()
          //   setVisible(true);
        }}
        style={styles.Midi}>
        <View style={{flexDirection: 'row', width: 80, marginRight: 10}}>
          {days.isOpen ? (
            <>
              <Text> {days.debutj} -</Text>
              <Text> {days.finj} </Text>
            </>
          ) : (
            <Image source={Fermer} />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('DetailsSetTime', days ={days} ,index={index})
          console.log(`index`, index);
          // setVisible(true);
          open()

        }}
        style={styles.Midi}>
        <View style={{flexDirection: 'row', width: 80, marginRight: 15}}>
          {days.isOpen ? (
            <>
              <Text> {days.debuts} -</Text>
              <Text> {days.fins} </Text>
            </>
          ) : (
            <Image source={Fermer} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DaysList;
