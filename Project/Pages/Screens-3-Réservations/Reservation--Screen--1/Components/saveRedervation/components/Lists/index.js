import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../../../../constants/theme';
import {useSelector} from 'react-redux';

const Timer = ({ActiveButton, toggleToWait, toggleToList}) => {
  let color = ActiveButton ? COLORS.gray : COLORS.secondary;
  let colorEx = !ActiveButton ? COLORS.gray : COLORS.secondary;
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  let btnWidth = !IsTab ? 150 : '45%';
  let Pad = IsTab ? 15 : 0;
  return (
    <View style={styles.container}>
      <View style={[styles.BoxTime, {paddingHorizontal: Pad}]}>
        <TouchableOpacity
          style={[styles.attente, {borderBottomColor: color, width: btnWidth}]}
          onPress={toggleToWait}>
          <Text style={[styles.Text, {color: color}]}>Telephone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.List, {borderBottomColor: colorEx, width: btnWidth}]}
          onPress={toggleToList}>
          <Text style={[styles.Text, {color: colorEx}]}>Sur Place</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Timer;
