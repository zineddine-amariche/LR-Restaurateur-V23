import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import UseModelTimer from './UseModelTimer';
import {styles} from './Styles';
import imgClose from '../../../../assets/Info/x(1).png';
import imgBody from '../../../../assets/models/Group214.png';
import { COLORS } from '../../../../constants/theme';
import { dispatchClosingRestaurant } from '../../../../Redux/Actions/closingRestaurant';
import {useDispatch, useSelector} from 'react-redux';

const OtherTimer = ({visible, ActiveTimer, timerOn, close}) => {
  const auth = useSelector((state) => state.auth);
  const { Token } = auth;

  const dispatch = useDispatch();

  let configHead = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'fr',
      Authorization: "Bearer " + Token,
    },
  };
  return (
    <UseModelTimer visible={visible}>
      <View style={styles.ConatinerClose}>
        <TouchableOpacity onPress={close}>
          <Image source={imgClose} color={'#078'} size={35} />
        </TouchableOpacity>
      </View>

      <View style={styles.Title}>
        <Text style={styles.TextTitle}>Saisir mon temps d’abscence</Text>
      </View>
      <View style={styles.body}>
        <Image source={imgBody} color={'#078'} />
      </View>
      <View style={styles.ButtonTime}>
        <TouchableOpacity style={styles.ButtonTouch}>
          <Text style={styles.TextButtonTouch}>35 Min</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonsFooter}>
        <TouchableOpacity style={[styles.ButtonDiscar,{borderWidth:1,borderColor:COLORS.primary}]} onPress={close}  >
          <Text style={[styles.TextButtonTouch,{color:COLORS.primary}]}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonValid}
            onPress={()=>{
              dispatchClosingRestaurant(dispatch, configHead, {"time":"endofday"});
              close() 
            }

            }
        >
          <Text style={styles.TextButtonTouch}>Valider</Text>
        </TouchableOpacity>
      </View>
    </UseModelTimer>
  );
};

export default OtherTimer;
