import { View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderAccueil from "../../../Components/Headers/header-1-Primary";
import { styles } from "./Hooks/styles";
import { COLORS } from "../../../constants/theme";
import Body from "./components/Body";
import { useIsFocused } from "@react-navigation/native";
import KeepAwake from "react-native-keep-awake";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BluetoothManager } from "@brooons/react-native-bluetooth-escpos-printer";
import {
  PRINTER_CONNECTED,
  PRINTER_FAILED,
  PRINTER_INFO,
} from "../../../Redux/Types/Printer";
import { useDispatch } from "react-redux";
import Update from "./components/Update";

const Accueil = ({ navigation }) => {
  const [Visible, setVisible] = useState(false);
  const openMenu = () => {
    setVisible(true);
  };
  const dispatch = useDispatch();

  const closeMenu = () => {
    setVisible(false);
  };
  const isFocused = useIsFocused();
  const KeepAwakeApp = () => {
    const interval = setInterval(() => {
      if (isFocused) {
        KeepAwake.activate();
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  };
  useEffect(() => {
    KeepAwakeApp();
  }, [isFocused]);

  // KeepAwake.activate();
  const reconnectDevice = () => {
    new Promise((resolve, reject) => {
      AsyncStorage.getItem("lastDevice")
        .then((res) => {
          if (res !== null) {
            resolve(true);

            BluetoothManager.connect(JSON.parse(res).address).then(
              (s) => {
                // this.setState({
                // loading:false,
                // boundAddress:JSON.parse(res).address,
                // name:JSON.parse(res).name || JSON.parse(res).address
                // })
                // dispatch({type: PRINTER_CONNECTED, payload: JSON.parse(res).address});
                dispatch({ type: PRINTER_INFO, payload: JSON.parse(res) });

                /*for debugging*/
                alert(
                  "Connected again! Device: " +
                    s +
                    ", name is: " +
                    JSON.parse(res).name +
                    ", address is: " +
                    JSON.parse(res).address
                );
              },
              (e) => {
                dispatch({ type: PRINTER_FAILED, payload: e });

                // this.setState({
                //   loading: false,
                // });
                // alert(e);
                // alert("Hi :" + e);
                console.log(e);
              }
            );

            // this.setState({
            //   deviceAddress: JSON.parse(res).address,
            //   isLoading_reconnect: false,
            // });
            dispatch({
              type: PRINTER_CONNECTED,
              payload: JSON.parse(res).address,
            });

            // alert("Result reconnect is: " + res);
            // console.log("Result reconnect is: " + res) 
          } else {
            resolve(false);
            // alert("Result reconnect is: " + res);
            // console.log("Result reconnect is: " + res) 

          }
        })
        .catch((err) => {
          reject(err);
          alert("Failed to get data. Contact admin");
        });
    });
  };
  useEffect(() => {
    reconnectDevice();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.gray} barStyle="dark-content" />
      <HeaderAccueil
        navigation={navigation}
        Color={COLORS.gray}
        openMenu={openMenu}
        Visible={Visible}
        closeMenu={closeMenu}
      />
      <Body navigation={navigation} />
      {/* <Update/> */}
    </View>
  );
};

export default Accueil;
