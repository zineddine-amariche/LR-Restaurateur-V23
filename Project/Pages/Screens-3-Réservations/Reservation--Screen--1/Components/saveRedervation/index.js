import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React,{useState} from 'react'
import Header from "../../../../../Components/Headers/header-1-Primary";
import { COLORS } from "../../../../../constants/theme";
import { styles } from "../../Hooks/styles";
import ButtonList from './components/Lists';
import SectionType from './components/SectionType';

const SaveReservation = ({navigation}) => {
    const [Visible, setVisible] = useState(false);

    const openMenu = () => {
      setVisible(true);
    };
  
    const closeMenu = () => {
      setVisible(false);
    };

    const [ActiveButton, setActiveButton] = useState(false);

    const toggleToWait = () => {
      setActiveButton(false);
    };
  
    const toggleToList = () => {
      setActiveButton(true);
    };
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={COLORS.secondary} barStyle="light-content" />
    <Header
      navigation={navigation}
      Color={COLORS.secondary}
      Visible={Visible}
      openMenu={openMenu}
      closeMenu={closeMenu}
    />
    
    <ButtonList
      toggleToWait={toggleToWait}
      toggleToList={toggleToList}
      ActiveButton={ActiveButton}
    />
    <SectionType
      navigation={navigation}
      ActiveButton={ActiveButton}
    />
  </View>
  )
}

export default SaveReservation