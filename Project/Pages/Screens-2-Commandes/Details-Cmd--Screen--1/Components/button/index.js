import { View, Text, Image, ActivityIndicator } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import printer from "../../../../../assets/Info/Vector1.png";
import { useSelector } from "react-redux";
import { COLORS } from "../../../../../constants/theme";
const PrintButton = ({ item, OnPrint, productData,Loading }) => {
  const Tablet = useSelector((state) => state.IsTab);
  const { IsTab } = Tablet;
  const container = {
    backgroundColor: COLORS.white,
    height: IsTab ? 26 : 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  };

  return (
    <View style={container}>
      {!Loading ? (
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            OnPrint(item, productData);
          }}
        >
          <Image source={printer} />
          <Text style={styles.TextButon}>Imprimer le reçu</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.LoadingButton}>
          <ActivityIndicator color={COLORS.primary} animating={true} />
        </View>
      )}
    </View>
  );
};

export default PrintButton;
