import {View, StatusBar} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Header from '../../../Components/Headers/header-1-Primary';
import {COLORS} from '../../../constants/theme';
import {useCommandeTerminé} from './Hooks/useCommandeTerminé';
import {styles} from './Hooks/styles';
import ChoiceDate from './Components/Dates';
import SectionType from './Components/SectionType';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {GetCommandesByDate} from '../../../Redux/Actions/Commandes';
import SectionNavigation from '../../../Components/Section-Buttons-navigation';
import ToastMessages from '../../../Components/ToastMessages';
import KeepAwake from 'react-native-keep-awake';
import ButtonsTabsMenue from '../../../Components/Buttons/TabsButtons/ButtonsTabsMenue';

const CommandesTerminer = ({navigation}) => {
  const {dispatch, configHead} = useCommandeTerminé();
  const isFocused = useIsFocused();
  const Dates = useSelector(state => state.Dates);
  const Printer = useSelector(state => state.Printer);

  const {error, type} = Printer;

  const {debut, fin} = Dates;
  const ToReservation = () => {
    navigation.navigate('Reservation');
  };
  const ToCommandes = () => {
    navigation.navigate('Commandes');
  };
  useLayoutEffect(() => {
    if (debut || fin) {
      try {
        if (isFocused) {
          GetCommandesByDate(dispatch, configHead, debut, fin);
        }
      } catch (e) {
        console.log('----55---', e);
      }
    }
  }, [fin, debut]);

  const [Visible, setVisible] = useState(false);
  const openMenu = () => {
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
  };

  const KeepAwakeApp = () => {
    const interval = setInterval(() => {
      if (isFocused) {
        KeepAwake.activate();
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  };
  useEffect(() => {
    KeepAwakeApp();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Header
        navigation={navigation}
        Color={COLORS.primary}
        Visible={Visible}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      {error && <ToastMessages type={type} error={error} />}
      {/* 
      <SectionNavigation
        ToReservation={ToReservation}
        ToCommandes={ToCommandes}
      /> */}

      <ButtonsTabsMenue
        ToCommandes={ToCommandes}
        ToReservation={ToReservation}
        navigation={navigation}
      />
      <>
        <ChoiceDate />
        <SectionType navigation={navigation} />
      </>
    </View>
  );
};

export default CommandesTerminer;
