import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import group from "../../../../../assets/Accueil/Group149.png";
import group155 from "../../../../../assets/Accueil/Group155.png";
import group156 from "../../../../../assets/Accueil/Group156.png";
import { useCommandes } from "../../Hooks/useCommandes";
import { COLORS } from "../../../../../constants/theme";
import ModalPrinter from "./Components/PopUp/ModalPrinter";
import { useSelector } from "react-redux";
import { iif } from "rxjs";

const CardAtt = ({ item, navigation }) => {
  const {
    Loading,
    OnClick,
    Visible,
    DesAcitvePopUp,
    ActiveChange,
    ActiveDone,
    width,
    height,
  } = useCommandes();

  let totaleQuantity = 0;

  useEffect(() => {
    ActiveDone();
    ActiveChange();
  }, []);
  const Tablet = useSelector((state) => state.IsTab);
  const { IsTab } = Tablet;
  let marginLeftCus = IsTab ? 0 : 5;

  const Card = {
    backgroundColor: "#AAC84030",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginVertical: 5,
    justifyContent: "center",
    height: width <= 770 ? 148 : 152,
    marginTop: 10,
    marginHorizontal: 5,
    width: IsTab ? (width <= 770 ? "49%" : "45%") : 330,
    overflow: "hidden",
    marginBottom: 10,
  };

  return (
    <>
 
      <View style={Card}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
          }}
          onPress={() => {
            navigation.navigate("Details", {
              item,
              totaleQuantity,
              marginLeft: marginLeftCus,
            });
          }}
        >
          <LeftCard item={item} />
          <RightCard
            item={item}
            Loading={Loading}
            OnClick={OnClick}
            marginLeftCus={marginLeftCus}
            totaleQuantity={totaleQuantity}
            navigation={navigation}
          />
        </TouchableOpacity>

        <ModalPrinter DesAcitvePopUp={DesAcitvePopUp} Visible={Visible} />
      </View>
    </>
  );
};

export default CardAtt;

 

const LeftCard = ({ item }) => {
  return (
    <View
      style={{
        width: "50%",
        height: "100%",
        paddingTop: 10,
        paddingLeft: 15,
      }}
    >
      <View style={styles.client}>
        <Text style={styles.clientText}>{item.bill.full_name}</Text>
      </View>
      {/* <Text style={styles.TextArticle}>{item.productsCount}produits</Text> */}
      <View style={styles.etat}>
        <Image source={group155} />
        <Text style={styles.TextRed}>En attente</Text>
      </View>
    </View>
  );
};

const RightCard = ({
  item,
  Loading,
  navigation,
  totaleQuantity,
  marginLeftCus,
  OnClick,
}) => {
  return (
    <View
      style={{
        width: "50%",
        height: "100%",
        paddingTop: 30,
        paddingHorizontal: 15,
        alignItems: "flex-end",
      }}
    >
      <View style={styles.client}>
        {/* {item.payments.length <= 2 ? (
          <View>
            {item.payments.map((i) => {
              return (
                <Text
                  numberOfLines={1}
                  style={[
                    styles.TextArticle,
                    { fontSize: 12, fontWeight: "400" },
                  ]}
                >
                  
                  {i.title}
                </Text>
              );
            })}
          </View>
        ) : (
          <View>
            <Text
              numberOfLines={1}
              style={[styles.TextArticle, { fontSize: 12, fontWeight: "400" }]}
            >
              {item.payments[0].title}
            </Text>
          </View>
        )} */}
        <View style={{ alignItems: "flex-end" }}>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                item,
                totaleQuantity,
                marginLeft: marginLeftCus,
              });
            }}
          >
            <Text style={{ fontSize: 11, color: COLORS.transparentBlack7 }}>
              voir plus...
            </Text>
          </TouchableOpacity> */}
          <Text style={styles.TextArticle}>Total : {item.total} €</Text>
        </View>
      </View>
      {!Loading ? (
        <TouchableOpacity
          style={styles.btnToCuisine}
          onPress={() => {
            OnClick(item.id, item);
          }}
        >
          <Image source={group156} style={styles.img} />
          <Text numberOfLines={1} style={styles.TextButton}>
            Envoyer en cuisine
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.LoadingButton}>
          <ActivityIndicator color={COLORS.primary} animating={true} />
        </View>
      )}
    </View>
  );
};
