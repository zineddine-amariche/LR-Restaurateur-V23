import React, { useState, useContext, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import ModelContainer from "../../../../../Components/Modals/ModelContainer";
import Bacimage from "../../../../../assets/Accueil/popup.png";
import { COLORS } from "../../../../../constants/theme";
import Icon from "react-native-vector-icons/Entypo";

const Update = () => {
  const [visible, setVisible] = useState(true);
  const { height, width } = useWindowDimensions();

  return (
    <ModelContainer transparent visible={visible}>
      <ImageBackground
        source={Bacimage}
        resizeMode="cover"
        style={[styles.image, { height: height }]}
      >
        <View style={{ alignItems: "center", width: "100%" }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require("../../../../../assets/Accueil/x.png")}
                style={{ marginRight: 5, marginTop: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "70%",
          }}
        >
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Image
              source={require("../../../../../assets/Accueil/logo-lV.png")}
              style={{ marginBottom: 30 }}
            />
            <Text
              mode={true}
              style={{
                marginBottom: 20,
                fontSize: 25,
                color: COLORS.white,
                textAlign: "center",
                paddingHorizontal: 20,
                fontWeight: "700",
                lineHeight: 29,
                textShadowColor: COLORS.primary,
              }}
            >
              Nouvelle mise à jour disponible ! Télécharger l'application pour
              l'utiliser
            </Text>
          </View>

          <View>
            <Text
              mode={true}
              style={{
                marginBottom: 20,
                fontSize: 17,
                color: COLORS.white,
                textAlign: "center",
                paddingHorizontal: 25,
                fontWeight: "600",
                lineHeight: 29,
                textShadowColor: COLORS.primary,
              }}
            >
              Nous mettons régulièrement LiveResto à jour dans un effort
              d'amélioration continue. Pour etre sur de ne rien manquer,
              télécharger la nouvelle mise à jour.
            </Text>
          </View>

          <View style={{ width:"100%" }}>
            <TouchableOpacity style={[styles.Button]}>
              {true && (
                <Text style={[styles.TextBtn]}>Aller sur PlayStore</Text>
              )}

              <Icon
                name="google-play"
                color={COLORS.white}
                size={23}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ModelContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 5,
  },
  Button: {
    marginTop: 15,
    width: "90%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#aac840",
    borderRadius: 6,
    flexDirection: "row",
    alignSelf:"center"
  },
  TextBtn: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});

export default Update;
