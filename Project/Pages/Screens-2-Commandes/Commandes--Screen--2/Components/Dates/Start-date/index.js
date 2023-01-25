import {View, Text, Platform, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from './styles';
import showPiker from '../../../../../../assets/Reservation/icon.png';
import ImageLeft from '../../../../../../assets/Reservation/Stroke.png';
import ImageRight from '../../../../../../assets/Reservation/Stroke2.png';
import 'moment/locale/fr';
import {DATE_DEBUT} from '../../../../../../Redux/Types/dates';
import {useDispatch, useSelector} from 'react-redux';
import { COLORS } from '../../../../../../constants/theme';

const DateHandler = () => {
  const [date, setDate] = useState(new Date());
  const [Mode, setMode] = useState('date');
  const [show, setshow] = useState(false);
  const [text, settext] = useState('Date de Debut');
  const dispatch = useDispatch();

  const onChage = (event, selectedDate) => {
    const currenDate = selectedDate || date;
    setshow(Platform.OS === 'ios');
    setDate(currenDate);
    let tempDate = new Date(currenDate);
    let fDate =
      tempDate.getDate() +
      '-' +
      (tempDate.getMonth() + 1) +
      '-' +
      tempDate.getFullYear();

    settext(fDate);
    dispatch({type: DATE_DEBUT, payload: fDate});
  };

  const showMode = currentMode => {
    setshow(true);
    setMode(currentMode);
  };
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  const Dates = useSelector(state => state.Dates);
  const {debut, fin} = Dates;
  return (
    <View style={[styles.container,{width:IsTab ? "40%" :'48%'}]}>
      <TouchableOpacity style={[styles.row,{backgroundColor:debut ? COLORS.primary:COLORS.gray}]} onPress={() => showMode('date')}>
        <Text style={[styles.Text,{color:debut ? COLORS.white : COLORS.black}]}>{"date de debut"} </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePiker"
          value={date}
          mode={Mode}
          is24Hour="default"
          onChange={onChage}
        />
      )}
    </View>
  );
};

export default DateHandler;
