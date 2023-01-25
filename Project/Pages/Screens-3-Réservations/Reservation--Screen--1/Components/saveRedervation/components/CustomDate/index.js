import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { COLORS } from "../../../../../../../constants/theme";
import * as Animatable from "react-native-animatable";
import DateHandler from "../../../date";

const CustomDatePiker = ({
  label,
  name,
  errors,
  fontSize,
  setFieldValue,
}) => {
  const [IsTouched, setIsTouched] = useState(false);

  return (
    <>
      <View style={styles.containerForm}>
        {label ? <Text fontSize={fontSize} style={styles.label}>{label}</Text> : null}
        <View style={styles.inputContainer}>
          <DateHandler
            setFieldValue={setFieldValue}
            name={name}
            setIsTouched={setIsTouched}
          />
        </View>
      </View>

      {errors && IsTouched ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.error}>{errors} </Text>
        </Animatable.View>
      ) : null}
    </>
  );
};

export default CustomDatePiker;

const styles = StyleSheet.create({
  containerForm: {
   
  },
  error: {
    color: COLORS.coral,
    fontSize: 13,
    marginVertical: 5,
  },
  label: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: COLORS.secondary,
    fontFamily: "HelveticaBold",
    marginBottom: 10,
    fontWeight: "700",
    lineHeight: 20,
  },

  iconPass: {
    fontSize: 20,
    position: "absolute",
    right: 10,
    top: 9,
    zIndex: 100,
  },
  imp: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  inputContainer: {
    height: 55,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
