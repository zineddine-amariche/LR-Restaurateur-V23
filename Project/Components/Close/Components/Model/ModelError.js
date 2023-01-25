import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import UseModelTimer from './UseModel';
import {styles} from './Styles';
import imgClose from '../../../../assets/Info/x(1).png';
import imgBody from '../../../../assets/models/Group1732.png';
import { COLORS } from '../../../../constants/theme';
import { useDispatch } from 'react-redux';
import { OpenCommandes } from '../../../../Redux/Actions/Commandes';

const ErrorModel = ({visible, close}) => {
  const dispatch = useDispatch();
  
  return (
    <UseModelTimer visible={visible}>
      <View style={styles.ConatinerClose}>
        <TouchableOpacity onPress={close}>
          <Image source={imgClose} color={'#078'} size={35} />
        </TouchableOpacity>
      </View>

      <View style={styles.Title}>
        <Text style={styles.TextTitle}>Cette opération ne peut pas être effectuée</Text>
      </View>
      <View style={styles.ImageContainer} >
          <Image source={imgBody} color={'#078'} size={35} />
        </View>
      <View style={styles.BoxText}>
          <Text style={styles.TextBody}>Ouvrez le restaurant pour terminer </Text>
      </View>
      <View style={styles.ButtonsFooter}>
        <TouchableOpacity style={[styles.ButtonDiscar,{borderWidth:1,borderColor:COLORS.primary}]} onPress={close}  >
          <Text style={[styles.TextButtonTouch,{color:COLORS.primary}]}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonValid}
            onPress={()=>{
                close() 
                OpenCommandes(dispatch)
            }

            }
        >
          <Text style={styles.TextButtonTouch}>Ouvrir</Text>
        </TouchableOpacity>
      </View>
    </UseModelTimer>
  );
};

export default ErrorModel;
