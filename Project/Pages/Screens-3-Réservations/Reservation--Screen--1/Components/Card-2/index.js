import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import group from "../../../../../assets/Accueil/Group190.png";
import group155 from "../../../../../assets/Accueil/Group1155.png";
import { useReservation } from "../../Hooks/useReservation";
import ModalPrinter from "./Components/ModalPrinter";
import { useDispatch, useSelector } from "react-redux";
import { GetReservationsById } from "../../../../../Redux/Actions/Reservations/GetResrvation";
import moment from "moment";
import "moment/locale/fr";

const CardEn = ({ item, AcitvePopUp }) => {
  const {
    Token,
    Visible,
    Loading,
    orders,
    OnPrete,
    DesAcitvePopUp,
    set,
  } = useReservation();

  let totaleQuantity = 0;
  const { configHead, refresh } = useReservation();

  const getReservationsById = useSelector((state) => state.getReservationsById);
  const { result_ById, loading } = getReservationsById;

  // console.log("getReservationsById", getReservationsById);

  // console.log('result_ById.lenght', result_ById.customer)

  // useEffect(() => {
  //   if (result_ById.customer) {
  //     set();
  //   }
  // }, [result_ById]);

  if (orders) {
    orders.forEach((item) => {
      totaleQuantity += item._joinData.quantity;
    });
  }
  const Tablet = useSelector((state) => state.IsTab);
  const { IsTab } = Tablet;
  let CustomWidth = IsTab ? 375 : 330;
  let marginLeftCus = IsTab ? 0 : 5;
  var dt = item.for_when
  return (
    <TouchableOpacity
        
        onPress={() => {
          AcitvePopUp(item.id);
        }}
      >
    <View
      style={[
        styles.container,
        ,
        { width: CustomWidth, marginLeft: marginLeftCus },
      ]}
    >
    
      <View style={styles.BoxInfo}>
        <View style={styles.client}>
          <Text style={styles.clientText}>{item.customer.surname} {item.customer.name}</Text>
        </View>

        <View style={styles.etat}>
          <View style={styles.row}>
            <Image source={group155} style={styles.img} />
            <Text style={styles.TextRed}>{moment(dt).format('HH:mm')}</Text>
          </View>

          <View>
          {item.persons == 1 ? (
            <Text style={styles.TextRed}>{item.persons} personne</Text>
          ):(
            <Text style={styles.TextRed}>{item.persons} personnes</Text>
          )}
          </View>
        </View>
      </View>
      {/* {result_ById && (
        <ModalPrinter
          DesAcitvePopUp={DesAcitvePopUp}
          Visible={Visible}
          item={result_ById}
          loading={loading}
          result_ById={result_ById}
        />
      )} */}
      
    </View>
    </TouchableOpacity>
    
  );
};

export default CardEn;
