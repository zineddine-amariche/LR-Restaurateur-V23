import {View, Text, Platform, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from './styles';
import showPiker from '../../assets/Reservation/icon.png';
import moment from 'moment';
import 'moment/locale/fr';
import {useDispatch, useSelector} from 'react-redux';
import {GetReservationsListByDate} from '../../Redux/Actions/Reservations/getListReservationByDate';
import {
  IS_DATE_PIKER_OPEND,
  SELECTED_DATE,
} from '../../Redux/Types/Reservations';
import Space from '../Space';

const DateHandler = () => {
  const dispatch = useDispatch();

  const getReservations = useSelector(state => state.getReservations);
  const {result_token} = getReservations;
  const {establishment_id, pos_id, token} = result_token;
  let configHeader = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'fr',
      accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  const [date, setDate] = useState(new Date());
  const [Mode, setMode] = useState('date');
  const [show, setshow] = useState(false);
  const [text, settext] = useState('Empty');

  const onChage = (event, selectedDate) => {
    // console.log('selectedDate', selectedDate)
    const currenDate = selectedDate || date;
    setshow(Platform.OS === 'ios');
    setDate(currenDate);
    let tempDate = new Date(currenDate);

    let fDate =
      tempDate.getFullYear() +
      '-' +
      (tempDate.getMonth() + 1) +
      '-' +
      tempDate.getDate();

    settext(tempDate);

    console.log('fDate', fDate);
    let object = {
      establishment_id,
      pos_id,
      for_when: fDate,
    };
    dispatch({type: SELECTED_DATE, payload: fDate});
    // dispatch({type: IS_DATE_PIKER_OPEND, payload: show});

    GetReservationsListByDate(dispatch, configHeader, object);
  };

  const showMode = currentMode => {
    setshow(true);
    setMode(currentMode);
  };

  useEffect(() => {
    if (!show) {
      console.log('enter')
      dispatch({type: IS_DATE_PIKER_OPEND, payload: false});
    }
  }, [show]);

  useEffect(() => {
    if (show) {
      console.log('enter')
      dispatch({type: IS_DATE_PIKER_OPEND, payload: true});
    }
  }, [show]);

  // console.log('show', show);

  let showDate =
    moment(text)?.format('ll') !== 'Invalid date'
      ? moment(text)?.format('ll')
      : moment(new Date())?.format('ll');

  const getReservationsByDate = useSelector(
    state => state.getReservationsByDate,
  );

  let storedDate = getReservationsByDate.forDate
    ? moment(getReservationsByDate.forDate)?.format('ll')
    : '';

  // console.log('storedDate', storedDate)
  // getReservationsByDate.forDate?getReservationsByDate.forDate:
  // const getReservations = useSelector(state => state.getReservations);
  // console.log('date', date)
  return (
    <>
      <TouchableOpacity style={styles.row} onPress={() => showMode('date')}>
        <View style={{marginRight: 20}}>
          <Text>{getReservationsByDate.forDate ? storedDate : showDate}</Text>
        </View>
        <TouchableOpacity onPress={() => showMode('date')}>
          <Image source={showPiker} />
        </TouchableOpacity>
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
    </>
  );
};

export default DateHandler;

// <View style={styles.row2}>
// <TouchableOpacity>
//   <Image source={ImageLeft} />
// </TouchableOpacity>
// <TouchableOpacity>
//   <Image source={ImageRight} />
// </TouchableOpacity>
// </View>
