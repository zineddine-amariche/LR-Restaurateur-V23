import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native';
import Commandes from '../../../assets/Accueil/Group157.png';
import Reservation from '../../../assets/Accueil/Group158.png';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../../constants/theme';
import {useRoute} from '@react-navigation/native';
import {getSecondLeft} from '../../../Redux/Actions/Timer';

const ButtonsTabsMenue = ({ToReservation, ToCommandes, navigation}) => {
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  let jusCont = IsTab ? 'center' : 'flex-start';

  const route = useRoute();

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.ButtonBox,
          {
            justifyContent: jusCont,
            backgroundColor:
              route.name === 'Commandes'
                ? COLORS.primary
                : COLORS.transparentPrimray,
          },
        ]}
        onPress={() => {
          getSecondLeft(dispatch, 'Commandes');
            ToCommandes();
        }}>
        <Image source={Commandes} />
        <Text style={styles.TextBtn1}>Commandes</Text>
        <BadgeCommandes />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.ButtonBoxReservation,
          {
            justifyContent: jusCont,
            backgroundColor:
              route.name === 'Reservation'
                ? COLORS.secondary
                : COLORS.transparentSecondary,
          },
        ]}
        onPress={() => {
          getSecondLeft(dispatch, 'Reservation');
            ToReservation();
        }}>
        <Image source={Reservation} />
        <Text style={styles.TextBtn1}>Réservation</Text>
        <BadgeReservation />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsTabsMenue;

const BadgeReservation = () => {
  const getReservations = useSelector(state => state.getReservations);

  return getReservations?.list_reservation_pending?.length ? (
    <View
      style={{
        position: 'absolute',
        top: -8,
        right: 0,
        backgroundColor: COLORS.red,
        borderRadius: 20,
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
      }}>
      <Text style={{color: COLORS.white, fontSize: 10}}>
        {getReservations?.list_reservation_pending?.length}
      </Text>
    </View>
  ) : null;
};

const BadgeCommandes = () => {
  const Commandes = useSelector(state => state.Commandes);

  return Commandes?.toComfirm?.length ? (
    <View
      style={{
        position: 'absolute',
        top: -8,
        right: 0,
        backgroundColor: COLORS.red,
        borderRadius: 20,
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
      }}>
      <Text style={{color: COLORS.white, fontSize: 10}}>
        {Commandes?.toComfirm?.length}
      </Text>
    </View>
  ) : null;
};
