import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  InteractionManager,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import group from "../../../../../assets/Accueil/Group190.png";
import group155 from "../../../../../assets/Accueil/Group1155.png";
import group156 from "../../../../../assets/Accueil/Group2.png";
import { COLORS } from "../../../../../constants/theme";
import ModalInfo from "./Components/Modal--Info/index";
import { useReservation } from "../../Hooks/useReservation";
import ModalValidation from "./Components/Modal--validation";
import { useSelector } from "react-redux";

import moment from "moment";
import "moment/locale/fr";
import Space from "../../../../../Components/Space";

const CardAtt = ({ item, navigation,AcitvePopUpV }) => {
  const {
    orders,
    Loading,
    Visible,
    DesAcitvePopUp,
    AcitvePopUp,
    VisibleV,
    // AcitvePopUpV,
    // DesAcitvePopUpV,
  } = useReservation();

  let totaleQuantity = 0;
  if (orders) {
    orders.forEach((item) => {
      totaleQuantity += item._joinData.quantity;
    });
  }
  const Tablet = useSelector((state) => state.IsTab);
  const { IsTab } = Tablet;
  let CustomWidth = IsTab ? 375 : 330;
  let marginLeftCus = IsTab ? 0 : 5;

  const getReservationsById = useSelector((state) => state.getReservationsById);
  const { result_ById, loading } = getReservationsById;

  // console.log("getReservationsById", getReservationsById.result_ById);

  // console.log('result_ById.lenght', result_ById.customer)

  var dt = item.for_when;
  return (
    <TouchableOpacity
      onPress={() => {
        AcitvePopUpV(item.id);

      }}
    >
      <View
        style={[
          styles.container,
          { width: CustomWidth, marginLeft: marginLeftCus },
        ]}
      >
        {/* <TouchableOpacity
        style={styles.abs}
        onPress={() => {
          AcitvePopUp(item.id);
        }}>
        <Image source={group} />
      </TouchableOpacity> */}
        <View style={styles.BoxInfo}>
          <View style={styles.client}>
            <Text style={styles.clientText}>
              {item.customer.name} {item.customer.surname}
            </Text>
          </View>
          <View style={styles.price}>
            <Space space={15}/>
          <View style={styles.etat}>
            
            <Text style={styles.TextRed}>
              {moment(dt).format("DD/MM/YYYY     ")}
            </Text>
              <Image source={group155} />
              <Text style={styles.TextRed}>
              {moment(dt).format(" H:mm")}
            </Text>
          </View>
            {/* <Text style={styles.TextArticle}>{item.customer.sum} Articles</Text> */}
            {/* <Text style={styles.TextArticle}>Total : {item.id} €</Text> */}
            {item.persons == 1 ? (
              <Text style={styles.TextArticle}>{item.persons} personne</Text>
            ) : (
              <Text style={styles.TextArticle}>{item.persons} personnes</Text>
            )}
          </View>
          
          <View style={styles.Touch}>
            {/* <TouchableOpacity
            style={styles.btnToCuisine}
            onPress={() => {
              AcitvePopUpV(item.id);

            }}>
            {!Loading && <Image source={group156} style={styles.img} />}

            {Loading ? (
              <ActivityIndicator color={COLORS.primary} animating={true} />
            ) : (
              <Text style={styles.TextButton}>Détails</Text>
            )}
          </TouchableOpacity> */}
          </View>
        </View>
        {/* <ModalInfo
          DesAcitvePopUp={DesAcitvePopUp}
          Visible={Visible}
          loading={loading}
          result_ById={result_ById}
        /> */}
        {/* <ModalValidation
          DesAcitvePopUp={DesAcitvePopUpV}
          Visible={VisibleV}
          loading={loading}
          result_ById={result_ById}
        /> */}
      </View>
    </TouchableOpacity>
  );
};

export default CardAtt;
