import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import profile from "../../../../../../assets/Info/Vector22.png";
import persone from "../../../../../../assets/Info/Vector366.png";
import phone from "../../../../../../assets/Info/Group366.png";
import aide from "../../../../../../assets/Info/Aide.png";
import sale from "../../../../../../assets/Info/Vector(3).png";
import date from "../../../../../../assets/Info/Calendrier366.png";
import close from "../../../../../../assets/Info/x.png";
import PrinterModal from "../../Modals/ModalValidation";
import { styles } from "./style";
import { useEffect } from "react";
import moment from "moment";
import "moment/locale/fr";

import {Linking} from 'react-native'

const ModalPrinter = ({
  DesAcitvePopUp,
  Visible,
  item,
  loading,
  getInfoById,
}) => {
  var dt = item?.for_when
  return (
    <PrinterModal visible={Visible}>
      {item ? (
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
              <Text style={styles.Textbold}>
                {item?.customer?.name} {item?.customer?.surname}
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={date} />
              </View>
              <Text style={[styles.TextSemibold, { fontSize: 15 }]}>
              {moment(dt).format('DD/MM/YYYY  H:mm')}{" "}
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={persone} />
              </View>

              {item.persons == 1 ? (
            <Text style={styles.TextSemibold}>{item.persons} personne</Text>
          ):(
            <Text style={styles.TextSemibold}>{item.persons} personnes</Text>
          )}
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={phone} />
              </View>

              <Text style={styles.TextSemibold}onPress={()=>{Linking.openURL(`tel:${item?.customer?.phone}`);}}>{item?.customer?.phone}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={aide} />
              </View>

              <Text style={styles.TextSemibold}>
                {item?.customer_comment
                  ? item?.customer_comment
                  : "pas de commentaire"}
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={sale} />
              </View>

              <Text style={styles.TextSemibold}>Salle demandé : 2</Text>
            </View>
          </View>
        </>
      ) : (
        <View>
<Text
>
  loading ...
</Text>
        </View>
      )}
    </PrinterModal>
  );
};

export default ModalPrinter;
