import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import persone from "../../../../../assets/Info/Vector(1).png";
import phone from "../../../../../assets/Info/Group182.png";
import Articles from "../../../../../assets/Info/Vector(2).png";
import date from "../../../../../assets/Info/Calendrier.png";
import etat from "../../../../../assets/Info/Group155.png";
import group155 from "../../../../../assets/Info/Group151.png";
import group from "../../../../../assets/Info/Group.png";
import pay from "../../../../../assets/Info/pay.png";
import { COLORS } from "../../../../../constants/theme";

import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/fr";

const Info = ({ item }) => {
  // console.log("item", item);
  const color =
    item.kitchenstate_id === 20
      ? COLORS.red
      : item.kitchenstate_id === 30
      ? COLORS.Jaune
      : COLORS.prete;
  let image =
    item.kitchenstate_id === 20
      ? etat
      : item.kitchenstate_id === 30
      ? group155
      : group;
  let TextMesg =
    item.kitchenstate_id === 20
      ? "En attente"
      : item.kitchenstate_id === 30
      ? "En Cuisine"
      : "Commande prête";

  const Tablet = useSelector((state) => state.IsTab);
  let Sty = Tablet.IsTab ? styles.containerTab : styles.container;

  var dt = item.for_when
  return (
    <View style={Sty}>
      <View style={styles.row}>
        <View style={{ width: 30 }}>
          <Image source={persone} />
        </View>
        <Text style={styles.Text}>{item.bill.full_name}</Text>
      </View>
      <View style={styles.row}>
        <View style={{ width: 30 }}>
          <Image source={phone} />
        </View>
        <Text style={styles.Text}>{item.bill.phone}</Text>
      </View>
      {/* <View style={styles.row}>
        <View style={{ width: 30 }}>
          <Image source={Articles} />
        </View>
        <Text style={styles.Text}>{item.productsCount} articles</Text>
      </View> */}
      <View style={styles.row}>
        <View style={{ width: 30 }}>
          <Image source={date} />
        </View>
        <Text style={styles.Text}>{moment(dt).format('DD/MM/YYYY    H:mm')} </Text>
      </View>

      <View style={{flexDirection:"row" ,marginTop:10, alignItems:'stretch'}}>
        <View style={{ width: 30 }}>
          <Image source={pay} style={{ width:22 , height: 22 }} />
        </View>
        <View >

        <Text style={styles.Text}>Mode de paiement</Text>
        <View style={{paddingTop:3}}>
          {item.payments.map((i) => {
            return <Text style={{fontSize:14}}>- {i.title}</Text>
          })}
        </View>
        </View>

      </View>

      <View style={styles.row}>
        <View style={{ width: 30 }}>
          <Image source={image} />
        </View>
        <Text style={[styles.TextError, { color: color }]}> {TextMesg}</Text>
      </View>
    </View>
  );
};

export default Info;
