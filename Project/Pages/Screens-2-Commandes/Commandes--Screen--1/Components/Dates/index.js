import {View, Text, Touchable} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ModalDate from './ModelDate';
import DateHandler from './Start-date';
import DateFin from './End-date';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../../../constants/theme';
import {
  DATE_DELETE,
  DELETE_DEBUT,
  DELETE_FIN,
} from '../../../../../Redux/Types/dates';
import {useDispatch} from 'react-redux';

const ChoiceDate = () => {
  const dispatch = useDispatch();
  const [visible, setvisible] = useState(false);
  const open = () => {
    setvisible(true);
  };
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const check = () => {
    setChecked(!checked);
    dispatch({type: DELETE_FIN});
  };

  const check2 = () => {
    setChecked2(!checked2);
    dispatch({type: DELETE_DEBUT});
  };

  const close = () => {
    setvisible(false);
  };

  const DisableDate = () => {
    setChecked(false);
    setChecked2(false);
    dispatch({type: DATE_DELETE});
  };

  return (
    <View style={styles.container}>
      <View style={styles.Left}>
        <Text style={styles.Text2}>trié par date</Text>
        {checked || checked2 ? (
          <TouchableOpacity style={styles.IconBox} onPress={DisableDate}>
            <Icon name="close" color={COLORS.primary} size={15} />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>

      <>
        {!checked && !checked2 && (
          <View style={styles.Right}>
            <TouchableOpacity style={styles.button} onPress={open}>
              <Text style={styles.Text}>choisir date début ou fin </Text>
            </TouchableOpacity>
          </View>
        )}
      </>

      <>
        <View style={styles.Right}>
          {checked && <DateHandler />}
          {checked2 && <DateFin />}
        </View>
      </>

      <ModalDate
        Visible={visible}
        close={close}
        check2={check2}
        check={check}
        checked={checked}
        checked2={checked2}
        DisableDate={DisableDate}
      />
    </View>
  );
};

export default ChoiceDate;
