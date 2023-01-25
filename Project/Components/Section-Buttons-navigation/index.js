import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native';
import Commandes from '../../assets/Accueil/Group157.png';
import Reservation from '../../assets/Accueil/Group158.png';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {COLORS} from '../../constants/theme';
const SectionNavigation = ({ToCommandes, ToReservation}) => {
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  let jusCont = IsTab ? 'center' : 'flex-start';
  const {height} = useWindowDimensions();
  const CustHeight = height <= 600 ? (IsTab ? '15%' : '22%') : '10%';

  return (
    <View style={[styles.container, {height: CustHeight}]}>
      <TouchableOpacity
        style={[styles.ButtonBox, {justifyContent: jusCont}]}
        onPress={() => {
          ToCommandes();
        }}>
        <Image source={Commandes} />
        <Text style={styles.TextBtn1}>Commandes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.ButtonBoxReservation,
          {
            justifyContent: jusCont,
          },
        ]}
        onPress={() => {
          ToReservation();
        }}>
        <Image source={Reservation} />
        <Text style={styles.TextBtn1}>Réservation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionNavigation;
