import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import { styles } from "./Hooks/style";
import { UsePrinter } from "./Hooks/UsePrinter";
import { COLORS } from "../../../../constants/theme";
import { useSelector } from "react-redux";
import HeaderPrinter from "./Components/Header";
import SwitchPrinter from "./Components/Connect-Switch";
import Connection from "./Components/Loading";
import SelectTicket from "./Components/Nombre-Ticket";
import Asssocie from "./Components/Connected-devices";
import SearchButton from "./Components/SearchButton";
import Disponible from "./Components/Disponible-devices";
import Header from "../../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native-gesture-handler";

const Imprission = ({ navigation: { goBack }, navigation }) => {
  const {
    pairedDs,
    foundDs,
    bleOpend,
    loading,
    componentDidMount,
    _scan,
    _renderRow,
    SwitchBle,
    LoadingSet,
    PairdSet,
    LoadingFalse,
  } = UsePrinter();

  useEffect(() => {
    console.log("enter printer");
    componentDidMount();
  }, []);

  const Printer = useSelector((state) => state.Printer);
  const [Visible, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };
  return (
    <View style={styles.Printer}>
      <StatusBar backgroundColor={COLORS.gray} barStyle="dark-content" />
      <Header
        navigation={navigation}
        Color={COLORS.gray}
        openMenu={openMenu}
        Visible={Visible}
        closeMenu={closeMenu}
      />
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
          <HeaderPrinter goBack={goBack} />
          <SwitchPrinter
            bleOpend={bleOpend}
            SwitchBle={SwitchBle}
            LoadingSet={LoadingSet}
            PairdSet={PairdSet}
            LoadingFalse={LoadingFalse}
          />
          <SelectTicket />
        </View>

        <View style={{ flex: 1,  }}>
          {Printer.loading_printer ? (
            <Connection />
          ) : (
            <View style={{ flex: 1, backgroundColor: "#FFF" }}>
              <ScrollView>
                <Asssocie
                  pairedDs={pairedDs}
                  loading={loading}
                  _renderRow={_renderRow}
                />
                <Disponible
                  foundDs={foundDs}
                  loading={loading}
                  _renderRow={_renderRow}
                />
                <SearchButton
                  _scan={_scan}
                  loading={loading}
                  bleOpend={bleOpend}
                />
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default Imprission;

{
  /* <View style={styles.Imprimante_connectée}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Imprimante connectée:
        </Text>
        <Text style={{color: '#ccc', fontSize: 18, marginLeft: 5}}>
          {!name ? "Pas d'appareils" : name}
        </Text>
      </View> */
}
