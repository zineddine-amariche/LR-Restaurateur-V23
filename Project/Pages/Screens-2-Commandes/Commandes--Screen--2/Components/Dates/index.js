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
import {useDispatch, useSelector} from 'react-redux';
import { GetAllCommandes } from '../../../../../Redux/Actions/Commandes';
import { useCommandeTerminé } from '../../Hooks/useCommandeTerminé';

const ChoiceDate = () => {
const {NavigatonTo,dispatch,configHead} = useCommandeTerminé();

  const DisableDate = () => {
    dispatch({type: DATE_DELETE});
    GetAllCommandes(dispatch,configHead)
  };

  const Dates = useSelector(state => state.Dates);
  const {debut, fin} = Dates;

  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;

  let Sty = IsTab ? styles.containerTab : styles.container
  let mtop = IsTab ? 0 : 5
  return (
    <View style={Sty}>
      <View style={styles.Left}>
        <Text style={styles.Text2}>trié par date</Text>
      {debut || fin ?  <TouchableOpacity style={styles.IconBox} onPress={DisableDate}>
          <Icon name="close" color={COLORS.primary} size={15} />
        </TouchableOpacity>
        :
        <View></View>
        }
      </View>

      <>
    
        <View style={[styles.Right,{marginTop:mtop}]}>
          <DateHandler />
          <DateFin />
        </View>
      </>
    </View>
  );
};

export default ChoiceDate;

{
  /* <>
        {!checked && !checked2 && (
          <View style={styles.Right}>
            <TouchableOpacity style={styles.button} onPress={open}>
              <Text style={styles.Text}>choisir date début ou fin </Text>
            </TouchableOpacity>
          </View>
        )}
      </> */
}

{
  /* <ModalDate
        Visible={visible}
        close={close}
        check2={check2}
        check={check}
        checked={checked}
        checked2={checked2}
        DisableDate={DisableDate}
      /> */
}
