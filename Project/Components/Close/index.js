import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Alert from '../../assets/Drawer/Group1732.png';
import {TouchableOpacity} from 'react-native';
import {OpenCommandes} from '../../Redux/Actions/Commandes';
import {useDispatch, useSelector} from 'react-redux';
import HeaderCommandes from '../Headers/header-1-Primary';
import {COLORS} from '../../constants/theme';
import SectionNavigation from '../Section-Buttons-navigation';
import ErrorModel from './Components/Model/ModelError';
import {UseClose} from './Components/hooks/UseCloseApp';
const RestaurantsFerme = ({navigation}) => {
  const dispatch = useDispatch();
  const Commandes = useSelector(state => state.Commandes);
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  const {isOpen} = Commandes;



  const {visibleModel, openModel, closeModel} = UseClose();
  const [Visible, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };
  const ToReservation = () => {
    // navigation.navigate('Reservation');
   if (!isOpen){
    openModel()
   }
  };
  const ToCommandes = () => {
    // navigation.navigate('Commandes');
    if (!isOpen){
      openModel()
     }
  };
  return (
    <View style={styles.container}>
      <HeaderCommandes
        navigation={navigation}
        Color={COLORS.primary}
        openMenu={openMenu}
        closeMenu={closeMenu}
        Visible={Visible} 
        openModel={openModel}
      />

      <SectionNavigation
        ToCommandes={ToCommandes}
        ToReservation={ToReservation}
      />
      <View style={styles.containerBox}>
        <Image source={Alert} style={styles.image} />
        <View style={styles.Box}>
          <Text style={styles.Txt1}>Votre restaurant est fermé</Text>

          <Text style={styles.T2}>
            N’oubliez pas d’ouvrir pour le prochain service demain à 12h00
          </Text>
          <TouchableOpacity
            style={styles.B1}
            onPress={() => {
              OpenCommandes(dispatch);
            }}>
            <Text style={styles.BT1}>Ouvrir maintenant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.B2}>
            <Text style={styles.BT2}>Modifier les horaires d’ouverture</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ErrorModel visible={visibleModel}  close={closeModel} />
    </View>
  );
};

export default RestaurantsFerme;
