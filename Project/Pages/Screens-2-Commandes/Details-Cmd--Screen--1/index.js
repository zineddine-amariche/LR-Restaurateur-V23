import { View, Text } from "react-native";
import React, { useEffect } from "react";
import HeaderInfo from "./Components/header";
import { styles } from "./Hooks/Styles";
import Info from "./Components/TopInfo";
import TabOrder from "./Components/TabOrder";
import PrintButton from "./Components/button";
import Total from "./Components/Total";
import { useSelector } from "react-redux";
import ToastMessages from "../../../Components/ToastMessages";
import ModalPrinter from "../Commandes--Screen--1/Components/Card-1/Components/PopUp/ModalPrinter";
import { ScrollView } from "react-native-gesture-handler";
import { useInfo } from "./Hooks/UseInfo";
import { useIsFocused } from "@react-navigation/native";
import KeepAwake from "react-native-keep-awake";

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  const Printer = useSelector((state) => state.Printer);
  const { error, type } = Printer;

  const {
    GetOrderMenue,
    ActiveDone,
    ActiveChange,
    orders,
    width,
    OnPrint,
    productData,
    Visible,
    DesAcitvePopUp,
    Loading,
  } = useInfo();

  useEffect(() => {
    GetOrderMenue(item.id);
  }, [item?.id]);

  const Tablet = useSelector((state) => state.IsTab);
  let Sty = Tablet.IsTab ? styles.BoxOrdersTab : styles.BoxOrders;

  useEffect(() => {
    ActiveDone();
    ActiveChange();
  }, []);

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

  return (
    <View style={styles.container}>
      <HeaderInfo navigation={navigation} />
      {error && <ToastMessages type={type} error={error} />}
      <ScrollView>
        <View style={styles.containerId}>
          <Text style={styles.TextId}>#{item.id}</Text>
        </View>
        <View style={styles.ContainerBodyTab}>
          <Info item={item} />
          <View style={Sty}>
            <TabOrder item={item} orders={orders} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.BottomItems}>
        <PrintButton
          OnPrint={OnPrint}
          item={item}
          productData={productData}
          Loading={Loading}
        />
        <Total item={item} width={width} orders={productData} />
      </View>
      <ModalPrinter DesAcitvePopUp={DesAcitvePopUp} Visible={Visible} />
    </View>
  );
};

export default Details;
