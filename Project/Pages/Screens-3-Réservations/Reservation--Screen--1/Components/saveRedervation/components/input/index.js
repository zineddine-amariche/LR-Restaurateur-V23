import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../../../../../../constants/theme";
import omg from '../../../../../../../assets/Login/eyeclosed.png'
const PrimaryInput = ({
  Label,
  name,
  value,
  placeholder,
  onBlur,
  onChangeText,
  check,
  style,
  hidePass,
  isPassword,
  HandlehidePass,
  errors,
  touched,
  editable,
  keyboardType,
  icon,
  fontSize,
  openDrawerisReceivers,
  amount,
  cardNumber,
  isFocused,
  FocusHandeler,
}) => {
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      setInputFocus(false);
    }
  }, [isFocused]);

  return (
    <View style={{}}>
      <>
        {Label ? (
          <Text fontSize={fontSize} style={styles.label}>
            {Label}
          </Text>
        ) : null}
        <View
          onPress={openDrawerisReceivers}
          style={[
            styles.inputContainer,
            {
              borderColor: errors
                ? COLORS.red
                : isFocused
                ? COLORS.secondary
                : COLORS.primary,
              alignItems: "center",
              borderRadius: 6,
              backgroundColor: inputFocus ? COLORS.white : COLORS.white70,
            },
          ]}
        >
          <TextInput
            placeholderTextColor={!inputFocus ? COLORS.darkGris : COLORS.secondary}
            placeholder={placeholder}
            numberOfLines={1}
            name={name}
            id={name}
            value={value}
            onBlur={onBlur}
            onChangeText={onChangeText}
            {...style}
            secureTextEntry={hidePass ? true : false}
            editable={editable}
            keyboardType={keyboardType}
            onFocus={(item) => {
              FocusHandeler(true);
              setInputFocus(true);
            }}
          />

          {cardNumber ? (
            <View style={{ position: "absolute", left: 6, top: 13 }}>
              {/* <Image  source={cardimg}/> */}
            </View>
          ) : null}

          {check === "NonCheck" && (
            <View style={{ position: "absolute", right: 10 }}>
              <Text color={COLORS.coral}>Non Verify</Text>
            </View>
          )}

          {check === true && (
            <View style={{ position: "absolute", right: 10 }}>
              <Text color={COLORS.Sccess}>Verify</Text>
            </View>
          )}

          {isPassword == "pass" ? (
            hidePass ? (
              <TouchableOpacity onPress={HandlehidePass} style={styles.imp}>
                <Image source={omg}  style={{height:15 , width:15}}/>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity  style={styles.iconPass} onPress={HandlehidePass} >
                <Text >
                  👁
                </Text>
              </TouchableOpacity>
            )
          ) : null}

          {amount && (
            <TouchableOpacity onPress={HandlehidePass} style={styles.imp}>
              <Text>{amount}</Text>
            </TouchableOpacity>
          )}

          {icon && (
            <TouchableOpacity
              style={{ position: "absolute", right: 5, top: 16 }}
              onPress={openDrawerisReceivers}
            >
              <Image source={icon} />
            </TouchableOpacity>
          )}
        </View>
      </>
      {errors && touched ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.error}>{errors} </Text>
        </Animatable.View>
      ) : null}
    </View>
  );
};

export default PrimaryInput;

const styles = StyleSheet.create({
  containerForm: {
    
    marginRight: 10,
    
  },
  error: {
    color: COLORS.coral,
    fontSize: 13,
    marginVertical: 5,
  },

  iconPass: {
    fontSize: 20,
    position: "absolute",
    right: 10,
    zIndex: 100,
  },
  imp: {
    position: "absolute",
    right: 10,
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
  inputContainer: {
    height: 55,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
