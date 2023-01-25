import React from 'react';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import {View, Text, Image} from 'react-native';
import {Logout} from '../../../Redux/Actions/Login';
import {useDispatch, useSelector} from 'react-redux';
import {CloseCommandes, OpenCommandes} from '../../../Redux/Actions/Commandes';
import img1 from '../../../assets/MenueIcons/SwitchOff.png';
import img2 from '../../../assets/Drawer/Red_Color.jpg';
import {COLORS} from '../../../constants/theme';

const MenueItems = ({visible, closeMenu, NavigatonTo, navigation,openModel}) => {
  const dispatch = useDispatch();
  const Commandes = useSelector(state => state.Commandes);
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  const {isOpen} = Commandes;
  let tit = isOpen ? 'Fermer le restaurant' : 'ouvrir le restaurant';
  let ImageRset = isOpen ? img1 : img2;
  let Margin = IsTab ? 100 : 70;
  return (
    <View style={{position: 'absolute', top: Margin, right: 10}}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{}}
        anchor={<Button style={{height: 1}}></Button>}>
        <Menu.Item
          icon={() => (
            <Image
              source={require('../../../assets/MenueIcons/Calendrier.png')}
              style={{tintColor: COLORS.primary}}
            />
          )}
          onPress={() => {
            if (isOpen) {
              NavigatonTo(navigation, 'Commandes');
              closeMenu();
            } else {
              console.log('open popup');
              closeMenu();
              openModel()

            }
          }}
          title="Commandes du jour"></Menu.Item>
        <Menu.Item
          icon={() => (
            <Image
              source={require('../../../assets/MenueIcons/Terminée.png')}
              style={{tintColor: COLORS.primary}}
            />
          )}
          onPress={() => {
            if (isOpen) {
              NavigatonTo(navigation, 'CommandesTerminer');
              closeMenu();
            } else {
              console.log('open popup');
              closeMenu();
              openModel()


            }
          }}
          title="Commandes terminées"></Menu.Item>
        <Menu.Item
          icon={() => (
            <Image
              source={require('../../../assets/MenueIcons/Vector.png')}
              style={{tintColor: COLORS.Jaune}}
            />
          )}
          onPress={() => {
            if (isOpen) {
              NavigatonTo(navigation, 'Parametre');
              closeMenu();
            } else {
              console.log('open popup');
              closeMenu();
              openModel()


            }
          }}
          title="Paramètres"></Menu.Item>
        <Menu.Item
          icon={() => (
            <Image
              source={require('../../../assets/MenueIcons/Deconnexion.png')}
              style={{tintColor: COLORS.red}}
            />
          )}
          onPress={() => {
            Logout(dispatch);
          }}
          title="Se déconnecter"></Menu.Item>
        <Menu.Item
          icon={() => (
            <Image
              source={require('../../../assets/MenueIcons/Vector2.png')}
              style={{tintColor: COLORS.Jaune}}
            />
          )}
          onPress={() => {
            if (isOpen) {
              NavigatonTo(navigation, '');
              closeMenu();
            } else {
              console.log('open popup');
              closeMenu();
              openModel()


            }
          }}
          title="Besoin d'aide? 04 91 40 40 "></Menu.Item>
        <Divider />
        {/* <Menu.Item
          style={{backgroundColor: '#fff', flex: 1}}
          icon={() => (
            <Image
              source={ImageRset}
              style={{
                tintColor: isOpen ? COLORS.primary : COLORS.red,
                width: 15,
                height: 15,
                borderRadius: 10,
                marginTop: 5,
              }}
            />
          )}
          onPress={() => {
            closeMenu();
            if (isOpen) {
              CloseCommandes(dispatch);
            } else {
              OpenCommandes(dispatch);
            }
          }}
          title={tit}></Menu.Item> */}
      </Menu>
    </View>
  );
};

export default MenueItems;
