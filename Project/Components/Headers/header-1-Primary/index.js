import {View, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import image from '../../../assets/Accueil/logo-lV.png';
import I3 from '../../../assets/Accueil/V_2.png';
import {TouchableOpacity} from 'react-native';
import styles from './Hooks/styles';
import {useSelector} from 'react-redux';
import {useCommandes} from '../../../Pages/Screens-2-Commandes/Commandes--Screen--1/Hooks/useCommandes';
import MenueItems from '../Menue';
import {Avatar} from 'react-native-paper';

const HeaderCommandes = ({
  navigation,
  Color,
  openMenu,
  Visible,
  closeMenu,  
  openModel,
}) => {
  const {NavigatonTo} = useCommandes();
  const auth = useSelector(state => state.auth);
  const {height} = useWindowDimensions();
  const CustHeight = height <= 600 ? '15%' : '10%';
  return (
    <View
      style={[styles.container, {backgroundColor: Color, height: CustHeight}]}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image source={image} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.Right} onPress={openMenu}>
        <View>
          <Avatar.Image
            source={{
              uri: auth.user.img,
            }}
            size={35}
            style={{marginHorizontal: 10}}
          />
        </View>
        <Image source={I3} />
      </TouchableOpacity>
      <MenueItems
        visible={Visible}
        closeMenu={closeMenu}
        NavigatonTo={NavigatonTo}
        navigation={navigation}
        openModel={openModel}
      />
    </View>
  );
};

export default HeaderCommandes;
