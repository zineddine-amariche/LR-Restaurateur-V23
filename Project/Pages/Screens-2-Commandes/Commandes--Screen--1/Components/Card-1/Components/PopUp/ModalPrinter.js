import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import pinter from '../../../../../../../assets/Info/Group173.png';
import close from '../../../../../../../assets/Info/x.png';
import PrinterModal from '../../../Modals/PrinterModal';


const ModalPrinter = ({DesAcitvePopUp,Visible}) => {

    const Span = () => {
        return (
          // <TouchableOpacity>
          <Text style={{textDecorationLine: 'underline'}}>paramètres</Text>
          // </TouchableOpacity>
        );
      };

  return (
    <PrinterModal visible={Visible}>
    <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={DesAcitvePopUp}>
      <Image source={close} />
    </TouchableOpacity>
    <View style={{alignSelf: 'center'}} >
      <Image source={pinter} />
    </View>
    <Text
      style={{
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 10,
      }}>
      Imprimante non connectée
    </Text>
    <View style={{paddingTop:10,alignItems:'center',display: 'flex',justifyContent: 'center',}}>
      <Text
        style={{
          fontWeight: '600',
          textAlign:'center'
        }}>
        Accédez aux <Span /> pour connecter votre imprimante
      </Text>
    </View>
  </PrinterModal>
  )
}

export default ModalPrinter