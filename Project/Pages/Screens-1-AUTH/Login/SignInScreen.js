import React, { useEffect, useState } from "react";
import styles from "./Hooks/Styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
  Platform,
} from "react-native";
// import Bacimage from "../../../assets/Login/background.png";
import FormLogin from "./Components/Form";
import { COLORS } from "../../../constants/theme";
import ToastMessages from "../../../Components/ToastMessages";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_MESSAGES } from "../../../Redux/Types/Login";
import { isTablet } from "../../../Redux/Actions/isTab";
import { PERMISSIONS, requestMultiple } from "react-native-permissions";
import DeviceInfo from "react-native-device-info";
import { PermissionsAndroid } from "react-native";
import { ScrollView } from "react-native";
// import { KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthLayout from "../../../Components/AuthLayout";
import Space from "../../../Components/Space";
const SignInScreen = () => {
  const [isFocused, setIsFocused] = useState(false);

  const FocusHandeler = (item) => {
    setIsFocused(item);
  };

  const requestPermissions = async (cb) => {
    if (Platform.OS === "android") {
      const apiLevel = await DeviceInfo.getApiLevel();

      if (apiLevel < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "LiveResto requires Location",
            buttonNeutral: "Ask Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        cb(granted === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        const result = await requestMultiple([
          PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
          PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ]);

        const isGranted =
          result["android.permission.BLUETOOTH_CONNECT"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result["android.permission.BLUETOOTH_SCAN"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result["android.permission.ACCESS_FINE_LOCATION"] ===
            PermissionsAndroid.RESULTS.GRANTED;

        cb(isGranted);
      }
    } else {
      cb(true);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const auth = useSelector((state) => state.auth);
  const { error, type } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: DELETE_MESSAGES });
    }, 5000);
  }, [error]);

  useEffect(() => {
    isTablet(dispatch);
  }, []);

  const { height, width } = useWindowDimensions();
  const Tablet = useSelector((state) => state.IsTab);

  const CustWILog = !Tablet.IsTab ? "90%" : width >= 1200 ? "30%" : "60%";
  return (
    <AuthLayout isFocused={isFocused}>
    {error && <ToastMessages type={type} error={error} />}
      <Space space={30} />
      <View style={{ flex: 1 }}>
        <FormLogin FocusHandeler={FocusHandeler} isFocused={isFocused} />
      </View>
      <Space space={30} />
    </AuthLayout>
  );
};

export default SignInScreen;

// <View style={styles.container}>
// <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

// <ImageBackground
//   source={Bacimage}
//   resizeMode="cover"
//   style={[styles.image, { height: height }]}
// >
//   {error && <ToastMessages type={type} error={error} />}
//   <View
//     style={[
//       styles.containerABS,
//       { width: CustWILog, position: "absolute",  },
//     ]}
//   >
//     <Text style={styles.headerTitle}>
//       Je me connecte à mon espace Restaurateur
//     </Text>

//     <KeyboardAwareScrollView>
//       <FormLogin FocusHandeler={FocusHandeler} isFocused={isFocused} />
//     </KeyboardAwareScrollView>
//   </View>
// </ImageBackground>
// </View>
