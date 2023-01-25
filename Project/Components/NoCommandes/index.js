import { View, Text, Image } from "react-native";
import React from "react";
import Commandes from '../../assets/Info/Group188.png';
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const NoCommandes = () => {
  return (
    <View style={styles.NoCommandes}>
      <Image source={Commandes} />
      <Text style={styles.TextNoCommandes}>Pas de commandes</Text>
    </View>
  );
};

export default NoCommandes;
const styles = StyleSheet.create({
  NoCommandes: {
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  TextNoCommandes: {
    fontSize: 17,
    fontWeight: '600',
    color: '#f00',
    paddingVertical: 10,
  },
})
