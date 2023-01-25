import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import pinter from '../../../../../../assets/Accueil/Group173.png';
import closeImg from '../../../../../../assets/Info/x.png';
import valider from '../../../../../../assets/Info/Group3666.png';
import Decline from '../../../../../../assets/Accueil/Group1832.png';
import DateModal from '../../Modals/ModelDate';
import {styles} from './styles';
import {Checkbox} from 'react-native-paper';
import {COLORS} from '../../../../../../constants/theme';
const ModalDate = ({close, Visible, checked, checked2, check, check2,DisableDate}) => {

  const decline = ()=>{
    DisableDate()
    close()
  }
  return (
    <DateModal visible={Visible}>
      <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={close}>
        <Image source={ closeImg} />
      </TouchableOpacity>
      <View style={{alignSelf: 'center'}}>
        <Image source={pinter} />
      </View>
      <View style={styles.container}>
        <Text style={styles.Text}>choisir une date :</Text>
        <View style={styles.body}>
          <View style={styles.BoxCheck}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={check}
              uncheckedColor={COLORS.black}
              color={COLORS.primary}
            />
            <Text>date Debut</Text>
          </View>
          <View style={styles.BoxCheck}>
            <Checkbox
              uncheckedColor={COLORS.black}
              color={COLORS.primary}
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={check2}
            />
            <Text>date Fin</Text>
          </View>
        </View>
      </View>
      <View style={styles.rowBtn}>
        <TouchableOpacity style={styles.Btn1} onPress={decline}>
          <Image source={Decline} width={5} height={5} />
          <Text style={styles.Textbtn1}>Décliner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn2} onPress={close}>
          <Image source={valider} />
          <Text style={styles.Textbtn2}>Valider</Text>
        </TouchableOpacity>
      </View>
    </DateModal>
  );
};

export default ModalDate;
