import {styles} from './Hooks/styles';
import React, {useEffect, useState} from 'react';
import {View, StatusBar} from 'react-native';
import Header from '../../../Components/Headers/header-1-Primary';
import {COLORS} from '../../../constants/theme';
import SectionButton from './Components/Buttons';
import ButtonListe from './Components/Lists';
import SectionType from './Components/SectionType';
import {useIsFocused, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useReservation} from './Hooks/useReservation';
import Sound from 'react-native-sound';
import moment from 'moment';
import {
  GetReservationsData,
  GetTokenReservations,
} from '../../../Redux/Actions/Reservations/reservationsActions';
import ModalInfo from './Components/Modals/Modal--Info';
import Laoder from '../../../Components/Laoder';
import ModalValidation from './Components/Modals/Modal--validation';
import {GetReservationsById} from '../../../Redux/Actions/Reservations/GetResrvation';
import ModalPrinter from './Components/Modals/model_card2/ModalPrinter';
import ButtonsTabsMenue from '../../../Components/Buttons/TabsButtons/ButtonsTabsMenue';
import DateHandler from '../../../Components/date';
import {isHomeFocused} from '../../../Redux/Actions/Timer';

const Reservation = ({navigation, route}) => {
  const auth = useSelector(state => state.auth);
  const getReservations = useSelector(state => state.getReservations);
  const getReservationsByDate = useSelector(
    state => state.getReservationsByDate,
  );
  const routes = useRoute();

  const {result_token, loading} = getReservations;
  const {establishment_id, pos_id, token} = result_token;

  // console.log(
  //   'getReservationsByDate.list_reservation_bydate',
  //   getReservationsByDate.list_reservation_bydate,
  // );
  // console.log('getReservationsB', getReservationsByDate.forDate);
  const {secondLeft, isHome_Focused} = useSelector(state => state.TimerSlice);

  const dateObject = moment(
    getReservationsByDate?.list_reservation[0]?.for_when,
    'YYYY-MM-DD HH:mm:ss',
  );

  // console.log('getReservationsB', dateObject.format('YYYY-M-D'));

  const {storage, Token} = auth;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {configHead, refresh} = useReservation();
  //  console.log('.............. 2 :',  routes.name);
  // console.log('-------------------- R ---- ', isHome_Focused);

  
  // useEffect(() => {
  //   isHomeFocused(dispatch, routes.name);
  // }, [isFocused, dispatch, route.name]);

  useEffect(() => {
    if (Token) {
      try {
        if (isFocused) {
          GetTokenReservations(dispatch, configHead);
        }
      } catch (e) {
        console.log('e', e);
      }
    }
  }, [Token, isFocused, refresh]);

  let configHeader = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'fr',
      accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  let object = {
    establishment_id,
    pos_id,
  };
  // console.log('getReservationsByDate.isPikerOpend', getReservationsByDate.isPikerOpend)
  useEffect(() => {
    if (!getReservationsByDate.isPikerOpend) {
      const interval = setInterval(() => {
        if (establishment_id) {
          GetReservationsData(dispatch, configHeader, object);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [establishment_id, token, getReservationsByDate.isPikerOpend]);

  const ToReservation = () => {
    navigation.navigate('Reservation');
  };

  const ToCommandes = () => {
    navigation.navigate('Commandes');
  };
  const [ActiveButton, setActiveButton] = useState(false);

  const toggleToWait = () => {
    setActiveButton(false);
  };

  const toggleToList = () => {
    setActiveButton(true);
  };
  const [Visible2, setVisible2] = useState(false);

  const openMenu = () => {
    setVisible2(true);
  };

  const closeMenu = () => {
    setVisible2(false);
  };

  const getReservationsById = useSelector(state => state.getReservationsById);
  const {result_ById, isLoading} = getReservationsById;

  const [VisibleV, setVisibleV] = useState(false);

  const AcitvePopUpV = id => {
    setVisibleV(true);
    GetReservationsById(dispatch, configHeader, id);
  };

  const DesAcitvePopUpV = () => {
    setVisibleV(false);
  };
  // card2
  const [Visible, setVisible] = useState(false);
  const AcitvePopUp = id => {
    setVisible(true);
    GetReservationsById(dispatch, configHeader, id);
  };
  const DesAcitvePopUp = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (getReservations?.list_reservation_pending.length !== 0) {
      const sound = new Sound('son.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound.play(() => {
          sound.release();
        });
      });
    }
  }, [getReservations?.list_reservation_pending]);

  let dataList = getReservationsByDate.list_reservation_bydate.length
    ? getReservationsByDate.list_reservation_bydate
    : dateObject.format('YYYY-MM-DD') === getReservationsByDate.forDate ||
      !getReservationsByDate.forDate
    ? getReservations.list_reservation
    : [];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.secondary} barStyle="light-content" />
      <Header
        navigation={navigation}
        Color={COLORS.secondary}
        Visible={Visible2}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <ButtonsTabsMenue
        ToReservation={ToReservation}
        ToCommandes={ToCommandes}
        navigation={navigation}
      />
      <ButtonListe
        toggleToWait={toggleToWait}
        toggleToList={toggleToList}
        ActiveButton={ActiveButton}
      />

      {loading || getReservations.length ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Laoder />
        </View>
      ) : (
        <>
          <View style={styles.trie}>
            {ActiveButton && dataList ? <DateHandler /> : null}
          </View>

          <SectionType
            navigation={navigation}
            ActiveButton={ActiveButton}
            dataList={
              getReservationsByDate.list_reservation_bydate.length
                ? getReservationsByDate.list_reservation_bydate
                : dateObject.format('YYYY-MM-DD') ===
                    getReservationsByDate.forDate ||
                  !getReservationsByDate.forDate
                ? getReservations.list_reservation
                : []
            }
            pending={getReservations.list_reservation_pending}
            openMenu={openMenu}
            AcitvePopUpV={AcitvePopUpV}
            AcitvePopUp={AcitvePopUp}
          />
        </>
      )}

      <ModalInfo
        DesAcitvePopUp={DesAcitvePopUp}
        Visible={Visible}
        loading={isLoading}
        result_ById={result_ById}
      />
      <ModalValidation
        DesAcitvePopUp={DesAcitvePopUpV}
        Visible={VisibleV}
        loading={isLoading}
        result_ById={result_ById}
      />

      {result_ById && (
        <ModalPrinter
          DesAcitvePopUp={DesAcitvePopUp}
          Visible={Visible}
          item={result_ById}
          loading={isLoading}
          result_ById={result_ById}
        />
      )}
    </View>
  );
};

export default Reservation;

// const myHeaders = new Headers();
// const donne = useContext(DataContext);
// const token = donne.establishment.token;
// myHeaders.append('Content-Type', 'application/json');
// myHeaders.append('Authorization', 'Bearer ' + token);
//context
// const openData = useContext(ShowDataOpen);
// const {toggleOpen, toggleOffAlert, toggleOpenAlertOpen} =
// useContext(AuthContext);
//  states

// const [count, setCount] = useState(0);

// useEffect(() => {
// openData.ferme &&
//   ToastAndroid.showWithGravityAndOffset(
//     'Votre restaurant est Fermé',
//     ToastAndroid.LONG,
//     ToastAndroid.BOTTOM,
//     0,
//     220,
//   );
// }, []);
// <View>
// <View style={styles.containerTowT}>
//   <View style={styles.containerV}>
//     <Icon
//       name="order-bool-descending-variant"
//       color={'#087'}
//       size={32}
//       style={{marginVertical: 10}}
//     />
//     <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
//       {' '}
//       Aucune Commandes{' '}
//     </Text>
//   </View>
//   <Text style={{color: '#ccc', fontSize: 16}}>
//     {' '}
//     Les Commandes S'affficheront Ici .{' '}
//   </Text>
// </View>
// </View>
// <View>
// <View style={styles.containerMsg}>
//   <View style={[styles.containerM, {marginHorizontal: 5}]}>
//     <Icon
//       name="book-information-variant"
//       color={'#087'}
//       size={45}
//       style={{marginTop: 8, marginLeft: -25}}
//     />
//     <View>
//       <Text style={[{fontWeight: 'bold', color: '#fff', fontSize: 20}]}>
//         {/* {openData.msg} */}
//       </Text>
//       <Text style={[{fontSize: 17, marginVertical: 3, color: '#ccc'}]}>
//         {/* {openData.heur}{' '} */}
//       </Text>
//     </View>
//   </View>
//   <TouchableOpacity
//     style={[
//       styles.buttonContainer,
//       {marginVertical: 10, borderRadius: 25},
//     ]}
//     onPress={() => {
//       navigation.navigate('ListCommandeScreen');
//       // toggleOpen();
//       // console.log(mergedArray)
//     }}>
//     <View>
//       <Text
//         style={[
//           {
//             fontSize: 23,
//             color: '#fff',
//             textAlign: 'center',
//             fontWeight: 'bold',
//           },
//         ]}>
//         {' '}
//         Ouvrir Maintenant{' '}
//       </Text>
//     </View>
//   </TouchableOpacity>
// </View>
// </View>
// <ModelContainer
// transparent
// // visible={openData.ferme}
// visible={false}>
// <View style={{alignItems: 'flex-end'}}>
//   <View style={styles.header}>
//     <TouchableOpacity
//     // onPress={() => toggleOffAlert(false)}
//     >
//       <Icon name="close-circle" color={'#078'} size={40} />
//     </TouchableOpacity>
//   </View>
// </View>
// <View style={{alignItems: 'center'}}>
//   <Image
//     source={require('../../../assets/x.jpg')}
//     style={{height: width * 0.25, width: width * 0.45}}
//   />
// </View>
// <Text
//   style={{
//     marginVertical: 30,
//     fontSize: 20,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   }}>
//   {/* {openData.msg} */}
// </Text>
// </ModelContainer>
// <View style={styles.HeaderContainer}>
// <View
//   style={{
//     backgroundColor: '#f4f4f4',
//     borderColor: '#087',
//     borderWidth: 0.8,
//     borderRadius: 5,
//   }}>
//   {/* <Icon.Button name="menu" color="#087" size={30}  onPress={() => navigation.toggleDrawer()}></Icon.Button> */}
//   <Icon
//     name="menu"
//     color={'#087'}
//     size={35}
//     style={{paddingHorizontal: 5, paddingVertical: 2}}
//     onPress={() => navigation.toggleDrawer()}
//   />
// </View>

// <View style={{flexDirection: 'row', alignItems: 'center'}}>
//   {/* <Text style={styles.TitelHeader}> {donne.establishment.title}</Text> */}
//   <TouchableOpacity
//     style={{
//       flexDirection: 'row',
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     }}
//     onPress={() => {
//       // RefreshCommande()
//       setCount(count + 1);
//     }}>
//     <Icons
//       name="restaurant-outline"
//       color={'#087'}
//       size={25}
//       style={{marginHorizontal: 15}}
//     />
//     <Icon
//       name="bike-fast"
//       color={'#087'}
//       size={25}
//       style={{marginHorizontal: 15}}
//     />
//   </TouchableOpacity>
// </View>
// </View>
