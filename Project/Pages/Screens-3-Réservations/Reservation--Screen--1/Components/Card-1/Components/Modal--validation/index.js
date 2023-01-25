import { View, Text, TouchableOpacity, Image ,ActivityIndicator,} from "react-native";
import React from "react";
import pinter from "../../../../../../../assets/Info/Group173(2).png";
import close from "../../../../../../../assets/Info/x.png";
import ModalV from "../../../Modals/ModalValidationInfo";
import profile from "../../../../../../../assets/Info/Vector22.png";
import persone from "../../../../../../../assets/Info/Vector366.png";
import phone from "../../../../../../../assets/Info/Group366.png";
import aide from "../../../../../../../assets/Info/Aide.png";
import sale from "../../../../../../../assets/Info/Vector(3).png";
import date from "../../../../../../../assets/Info/Calendrier366.png";
import valider from "../../../../../../../assets/Info/Group3666.png";
import decline from "../../../../../../../assets/Info/Group83.png";
import { styles } from "./Styles";
import { useSelector } from "react-redux";
import { COLORS } from "../../../../../../../constants/theme";
import { useReservation } from "../../../../Hooks/useReservation";
// import { postReservations } from "../../../../../../../Redux/Actions/Reservations/accepte_decline_reservations";
import VectorStroke from "../../../../../../../assets/paramètres/VectorStroke.png";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";

import moment from "moment";
import "moment/locale/fr";

import {Linking} from 'react-native'
import { postReservations } from "../../../../../../../Redux/Actions/Reservations/accepte_decline_reservations";

const ModalValidation = ({ DesAcitvePopUp, Visible, result_ById }) => {
  const [IsVisible, setIsVisible] = useState(false);
  const [Select, setSelect] = useState(null);

  // reanimated styles
  const rStyels = useAnimatedStyle(() => ({
    height: IsVisible ? withTiming(60, 1000) : withTiming(0, 1000),
    backgroundColor:'#FFF', 
    paddingHorizontal: IsVisible ? withTiming(10, 1000) : withTiming(0, 1000),
  }));

  const Tablet = useSelector((state) => state.IsTab);
  const { IsTab } = Tablet;
  let CustomWidth = IsTab ? "60%" : "100%";

  const getReservations = useSelector((state) => state.getReservations);
  const { result_token } = getReservations;
  const { establishment_id, pos_id, token } = result_token;
  // console.log("result_ById", result_ById);

  const { configHeader, dispatch } = useReservation();

  let objectAccept = {
    establishment_id,
    booking_id: result_ById.id,
    status: 3,
    room_assigned: Select ? Select : result_ById.room_requested,
  };

  let objectDecline = {
    establishment_id,
    booking_id: result_ById.id,
    status: 4,
  };

  const accept = () => {
    postReservations(dispatch, configHeader, objectAccept,DesAcitvePopUp);
  };

  const declinebtn = () => {
    postReservations(dispatch, configHeader, objectDecline,DesAcitvePopUp);
  };
  var dt = result_ById?.for_when


  const Reservations = useSelector((state) => state.resReservations);
  const { loadingPost } = Reservations;


// console.log('Reservations', Reservations)
  return (
    <ModalV visible={Visible}>
      {loadingPost || !result_ById ? (
        <View
          style={{
            height: 200,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 17, color: COLORS.Jaune }}>
            Chargement ...
          </Text>
        </View>
      ) : (
        <View style={{ position: "relative" }}>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={DesAcitvePopUp}
          >
            <Image source={close} />
          </TouchableOpacity>
          <View style={{ alignSelf: "center" }}>
            <Image source={pinter} />
          </View>
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={profile} />
              </View>
              <Text style={styles.Textbold}>
                {result_ById?.customer?.name} {result_ById?.customer?.surname}
              </Text>
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

              <Text style={styles.TextSemibold} onPress={()=>{Linking.openURL(`tel:${result_ById?.customer?.phone}`);}}>
                {result_ById?.customer?.phone}
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={aide} />
              </View>

              <Text numberOfLines={1} style={styles.TextSemibold}>
                {result_ById?.customer_comment
                  ? result_ById?.customer_comment
                  : "Pas de commentaire"}
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.imageBox}>
                <Image source={sale} />
              </View>

              <Text style={styles.TextSemibold}>
                Salle demandé :{" "}
                {Select ? (
                  <Text style={{ color: COLORS.green }}>{Select}</Text>
                ) : (
                  result_ById?.room_requested
                )}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setIsVisible(!IsVisible);
                }}
                style={{ marginLeft: 10 }}
              >
                <Image source={VectorStroke} />
              </TouchableOpacity>
            </View>
            <Animated.View style={[styles.select, rStyels]}>

            <TouchableOpacity
                onPress={() => {
                  setIsVisible(!IsVisible);
                  setSelect("Intérieur");
                }}
              >
                <Text>Intérieur</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsVisible(!IsVisible);
                  setSelect("Extérieur");
                }}
              >
                <Text style={{ cursor: "pointer" }}>Extérieur</Text>
              </TouchableOpacity>

            </Animated.View>
          </View>

          <View style={[styles.rowBtn, { width: CustomWidth }]}>
            <TouchableOpacity
              style={styles.Btn1}
              onPress={() => {
                // DesAcitvePopUp();
                declinebtn();
                
              }}
            >
              <Image source={decline} />
              <Text style={styles.Textbtn1}>Décliner</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Btn2}
              onPress={() => {
                // DesAcitvePopUp();
                accept();
                
              }}
            >
              <Image source={valider} />
              <Text style={styles.Textbtn2}>Valider</Text>
              {/* {loading ? (
              <ActivityIndicator color={COLORS.primary} animating={loading} />
            ) : (
              <Text style={styles.Textbtn2}>Valider</Text>
            )} */}
            {/* {!loading &&<Text style={styles.Textbtn2}>Valider</Text>}
            {!loading ? <ActivityIndicator color={COLORS.white} animating={true} /> : null } */}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ModalV>
  );
};

export default ModalValidation;
