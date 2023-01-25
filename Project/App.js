/**
 * Created by Amariche zineedine on 2021/11/03.
 * Modified by Amariche zineedine on 2022/03/15.
 */
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import RootLiveRestoApp from "./src/AppStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import { COLORS } from "./constants/theme";
import { dispatchLoginStorage } from "./Redux/Actions/Login";
import { isTablet } from "./Redux/Actions/isTab";
import { LOGIN_FAILED } from "./Redux/Types/Login";

import { QueryClientProvider, QueryClient } from "react-query";
import { persistStore } from "redux-persist";
import store from "./Redux/Store";


const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { Token } = auth;

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      accept: "application/json",
      Authorization: "Bearer " + Token,
    },
  };

  // const {secondLeft,isHome_Focused} = useSelector((state)=>state.TimerSlice)

  // console.log('-------------------- is ---- isHomeFocused', isHome_Focused)


  const [checkAsyc, setcheckAsyc] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      try {
        let login = await AsyncStorage.getItem("login");
        let password = await AsyncStorage.getItem("password");
        if (login && password) {
          dispatchLoginStorage(dispatch, configHead, login, password);
          isTablet(dispatch);
        }
        setcheckAsyc(true);
      } catch (error) {
        error,
          dispatch({ type: LOGIN_FAILED, payload: "échec de connexion !" }),
          console.log("error.message", error.message);
        console.log("------33-", error);
      }
    }, 4000);
  }, []);

  // let persistor = persistStore(store);
  const queryClient = new QueryClient();

  const Loading = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color={COLORS.primary} />
      </View>
    );
  };
  return (
    <PaperProvider>
      <NavigationContainer>
      <QueryClientProvider client={queryClient}>

      {/* <PersistGate loading={null} persistor={persistor}> */}

        {checkAsyc ? <RootLiveRestoApp /> : <Loading />}
        {/* </PersistGate> */}

        </QueryClientProvider>

      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
