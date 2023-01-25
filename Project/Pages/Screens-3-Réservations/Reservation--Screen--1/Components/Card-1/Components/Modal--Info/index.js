import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import profile from "../../../../../../../assets/Info/Vector22.png";
import persone from "../../../../../../../assets/Info/Vector366.png";
import phone from "../../../../../../../assets/Info/Group366.png";
import aide from "../../../../../../../assets/Info/Aide.png";
import sale from "../../../../../../../assets/Info/Vector(3).png";
import date from "../../../../../../../assets/Info/Calendrier366.png";
import close from "../../../../../../../assets/Info/x.png";
import Modal from "../../../Modals/ModalValidation";
import { styles } from "./style";
import { COLORS } from "../../../../../../../constants/theme";

import moment from "moment";
import "moment/locale/fr";

import {Linking} from 'react-native'

const ModalPrinter = ({ DesAcitvePopUp, Visible, loading ,result_ById}) => {
  var dt = result_ById?.for_when
 
  return (
    <Modal visible={Visible}>
      {loading || !result_ById ? (
        <View style={{height:200 , alignItems:'center' ,justifyContent:'center'}}>

        <Text style={{fontSize:17 , color:COLORS.Jaune}}>Chargement ...</Text>
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={DesAcitvePopUp}
          >
            <Image source={close} />
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={profile} />
              </View>
              <Text style={styles.Textbold}>{result_ById?.customer?.name} {result_ById?.customer?.surname}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={date} />
              </View>
              <Text style={styles.TextSemibold}>{moment(dt).format('DD/MM/YYYY    H:mm')} </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={persone} />
              </View>
              {result_ById?.persons == 1 ? (
                 <Text style={styles.TextSemibold}>
                 {result_ById?.persons} personne
               </Text>
              ):(
                <Text style={styles.TextSemibold}>
                {result_ById?.persons} personnes
              </Text>
              )}

              
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={phone} />
              </View>

              <Text style={styles.TextSemibold} onPress={()=>{Linking.openURL(`tel:${result_ById?.customer?.phone}`);}} >
                {result_ById?.customer?.phone}
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={aide} />
              </View>

              <Text numberOfLines={1} style={styles.TextSemibold}>{result_ById?.customer_comment ? result_ById?.customer_comment  :'Pas de commentaire' }</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={sale} />
              </View>

              <Text style={styles.TextSemibold}>Salle demandé : {result_ById?.room_requested}</Text>
            </View>
          </View>
        </>
      )}
    </Modal>
  );
};

export default ModalPrinter;
