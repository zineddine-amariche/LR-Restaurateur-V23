import {
  View,
  Text,
  Image,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { styles } from "./styles";
import TextImg from "../../../../../assets/Accueil/text.png";
import TextImg1 from "../../../../../assets/Accueil/Frame1.png";
import TextImg2 from "../../../../../assets/Accueil/Frame2.png";
import Eclips from "../../../../../assets/Accueil/Ellipse.png";
import ImageText from "../../../../../assets/Accueil/imgText.png";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useCommandes } from "../../../Commandes--Screen--1/Hooks/useCommandes";
import { useIsFocused } from "@react-navigation/native";
import { GetAllCommandes } from "../../../../../Redux/Actions/Commandes";
import { LOADING } from "../../../../../Redux/Types/Commandes";
import { ActivityIndicator } from "react-native-paper";
import { COLORS } from "../../../../../constants/theme";
const Body = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const Tablet = useSelector((state) => state.IsTab);
  const { IsTab } = Tablet;
  const auth = useSelector((state) => state.auth);
  const { Token } = auth;

  const toCommandes = () => {
    navigation.navigate("Commandes");
  };
  const toResrvation = () => {
    navigation.navigate("Reservation");
  };
  let CustomWidth = IsTab ? (width <= 770 ? "50%" : "40%") : 330;
  let CustomHeight = IsTab ? 159 : 159;

  const dispatch = useDispatch();
  const { mergedArray, refresh, configHead } = useCommandes();

  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (Token) {
        try {
          if (isFocused) {
            if (!Commandes?.toComfirm) {
              dispatch({ type: LOADING });
            }
            if (!Commandes?.others) {
              dispatch({ type: LOADING });
            }

            GetAllCommandes(dispatch, configHead);
          }
        } catch (e) {
          console.log("-----432--", e);
        }
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [Token, isFocused, refresh]);

  const Commandes = useSelector((state) => state.Commandes);
  const { loading } = Commandes;

  // console.log('Commandes.lenght',Commandes?.toComfirm ,Commandes?.Commandes?.others?.length)
  const Loading = () => {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator animating={true} color={COLORS.primary} />
        <Text style={styles.TEXTSTYLES}>Chargement ...</Text>
      </View>
    );
  };

  const [first, setfirst] = useState(0);

  const Counter = () => {
    Commandes.others.map((i) => {
      if (i.state_id === 30) {
        return setfirst(-1), console.log("first", first);
      }
    });
  };


  useEffect(() => {
    if (Commandes?.Commandes?.others?.length) {
      setTimeout(() => {
        Counter();
      }, 5000);
    }
  }, [refresh, isFocused]);

  const WidthCut = width <= 800 ? "100%" : "80%";


  const getReservations = useSelector(state => state.getReservations);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (

        <ScrollView contentContainerStyle={{backgroundColor:COLORS.black}}>

        <View style={[styles.container]}>
          <View style={[styles.FirstBox, { width: WidthCut }]}>
            <Text style={styles.TextHomeTitle}>
              Que souhaitez vous gérer ?
            </Text>
          </View>
          <View style={{ flexDirection: IsTab ? "row" : "column" }}>
            <TouchableOpacity
              style={[
                styles.secondBox,
                {
                  width: CustomWidth,
                  height: CustomHeight,
                  marginRight: IsTab ? 10 : 0,
                },
              ]}
              onPress={toCommandes}
            >
              <View style={styles.abso}>
                {Commandes?.toComfirm?.length ? (
                  <ImageBackground source={Eclips} style={styles.bacGround}>
                    <Text style={styles.TextEclips}>
                      {Commandes?.toComfirm?.length}
                    </Text>
                  </ImageBackground>
                ) : null}
              </View>
              <Image source={TextImg1} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.thirdBox,
                { width: CustomWidth, height: CustomHeight },
              ]}
              onPress={toResrvation}
            >
                 <View style={styles.abso}>
                {getReservations?.list_reservation_pending?.length ? (
                  <ImageBackground source={Eclips} style={styles.bacGround}>
                    <Text style={styles.TextEclips}>
                    {getReservations?.list_reservation_pending?.length}
                    </Text>
                  </ImageBackground>
                ) : null}
              </View>
              <Image source={TextImg2} />
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>

      )}
    </>
  );
};

export default Body;
