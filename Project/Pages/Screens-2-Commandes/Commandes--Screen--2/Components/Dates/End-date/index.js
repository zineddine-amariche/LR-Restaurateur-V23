import {View, Text, Platform, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from './styles';
import showPiker from '../../../../../../assets/Reservation/icon.png';
import 'moment/locale/fr';
import {useDispatch, useSelector} from 'react-redux';
import {DATE_FIN} from '../../../../../../Redux/Types/dates';
import { COLORS } from '../../../../../../constants/theme';

const DateFin = () => {
  const [date, setDate] = useState(new Date());
  const [Mode, setMode] = useState('date');
  const [show, setshow] = useState(false);
  const [text, settext] = useState('Fin');
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
    dispatch({type: DATE_FIN, payload: fDate});
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
      <TouchableOpacity style={[styles.row,{backgroundColor:fin ? COLORS.primary:COLORS.gray}]} onPress={() => showMode('date')}>
        <Text style={[styles.Text,{color:fin ? COLORS.white : COLORS.black}]}>{"date de fin"}</Text>
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

export default DateFin;
