import { View, Text } from "react-native";
import React from "react";
import Close from "../../../../../assets/x.png";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

const HeaderInfo = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Commandes");
      }}
    >
      <Image source={Close} />
    </TouchableOpacity>
  );
};

export default HeaderInfo;
