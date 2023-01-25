import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {Add, Minus} from '../../../../../../Redux/Actions/Printer';
import Moin from '../../../../../../assets/paramètres/Group220.png';
import Plus from '../../../../../../assets/paramètres/Group219.png';
import { COLORS } from '../../../../../../constants/theme';

const SelectTicket = () => {
  const dispatch = useDispatch();
  const Printer = useSelector(state => state.Printer);
  const {nombreTicket} = Printer;
  const Tablet = useSelector(state => state.IsTab);
  let customWidth = Tablet.IsTab ? '80%' : '70%';
  let customWidth2 = Tablet.IsTab ? '15%' : '20%';

  let Custom = Tablet.IsTab ? 70 : 90;
  let CustomMrgin = Tablet.IsTab ? 0 : 5;

  const SpanNubr = ({nombreTicket}) => {
    return <Text style={{color:COLORS.primary , fontWeight:'bold'}}>{nombreTicket}</Text>;
  };
  return (
    <View style={[styles.Container,  ]}>
      <Text style={{fontSize: 17, width: customWidth}}>
        Lors d’une nouvelle commande je souhaite imprimer{' '}
        <SpanNubr nombreTicket={nombreTicket} /> tickets
      </Text>
      <View style={{width: customWidth2, marginRight: CustomMrgin}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              if (nombreTicket > 1) {
                dispatch(Minus(nombreTicket));
              }
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={Moin} />
          </TouchableOpacity>
          <Text style={styles.Text}>{nombreTicket}</Text>
          <TouchableOpacity
            onPress={() => {
              if (nombreTicket < 9) {
                dispatch(Add(nombreTicket));
              }
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={Plus} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectTicket;

{
  /* <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginHorizontal: 20,
            marginTop: 5,
          }}>
          Impression{' '}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#000',
            opacity: 0.3,
            width: '80%',
            marginLeft: 25,
            fontWeight: 'bold',
          }}>
          choisissez le nombre de ticket que vous voulez imprimer
        </Text>
      </View> */
}
{
  /* nombr ticket */
}
