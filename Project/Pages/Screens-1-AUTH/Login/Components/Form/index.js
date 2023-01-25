import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { UseLogin } from "../../Hooks/UseLogin";
import styles from "./styles";
import CheckBox from "react-native-check-box";
import ButtonLogin from "../Button";
// import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import PrimaryInput from "../../../../../Components/Input/index.js";
import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../constants/theme";
import Space from "../../../../../Components/Space";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const FormLogin = ({ FocusHandeler, isFocused }) => {
  const {
    loginValues,
    validationSchema,
    isSelected,
    hadelChnageCheck,
    hidePass,
    HandlehidePass,
    onSubmit,
  } = UseLogin();

  return (
    <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
      <Formik
        initialValues={loginValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          onSubmit(values);
          formikAction.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
        }) => {
          const { login, password } = values;
          return (
            <KeyboardAwareScrollView style={{ }} showsVerticalScrollIndicator={false}>
                <PrimaryInput
                  Label={"Identifiant"}
                  placeholder="Saisissez votre identifiant"
                  numberOfLines={1}
                  style={styles.Input}
                  name={login}
                  id={login}
                  value={login}
                  onBlur={handleBlur("login")}
                  onChangeText={handleChange("login")}
                  FocusHandeler={FocusHandeler}
                  isFocused={isFocused}
                />
                {errors.login && touched.login ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.login}</Text>
                  </Animatable.View>
                ) : null}

                <Space space={20} />
                  <PrimaryInput
                    Label={"Mot de passe"}
                    placeholderTextColor="#aac840"
                    placeholder="Saisissez votre mot de passe"
                    maxLength={10}
                    underlineColor="#fff"
                    numberOfLines={1}
                    style={styles.Input}
                    name={password}
                    id={password}
                    value={password}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    secureTextEntry={!hidePass ? true : false}
                    FocusHandeler={FocusHandeler}
                    isFocused={isFocused}
                    isPassword={'pass'}
                    HandlehidePass={HandlehidePass}
                    hidePass={hidePass}
                  />

                  {/* <Icon
                  name={hidePass ? "eye-slash" : "eye"}
                  size={15}
                  color="grey"
                  onPress={HandlehidePass}
                  style={styles.iconPass}
                /> */}

                {errors.password && touched.password ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.password}</Text>
                  </Animatable.View>
                ) : null}
                <View style={styles.left}>
                  <CheckBox
                    isChecked={isSelected}
                    onClick={hadelChnageCheck}
                    style={styles.checkbox}
                    checkBoxColor={"#fff"}
                  />
                  <Text style={styles.labelText}>Se souvenir de moi?</Text>
                </View>
                <View style={styles.containerButtons}>
                  <ButtonLogin
                    handleSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                  />
                </View>

                <View style={styles.Identifiants}>
                  <View style={styles.leftLink}>
                    <Text style={styles.textRight}>Mot de passe oublié?</Text>
                  </View>
                  <View style={styles.rightLink}>
                    <Text style={styles.textRight}>Contacter Live Resto?</Text>
                  </View>
                </View>
          
            </KeyboardAwareScrollView>
          );
        }}
      </Formik>
    </Animatable.View>
  );
};

export default FormLogin;
