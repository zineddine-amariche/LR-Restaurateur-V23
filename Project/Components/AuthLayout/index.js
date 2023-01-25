import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { Children, useState } from "react";
import Bacimage from "../../assets/img/bg_login.png";
import Bacimage1 from "../../assets/img/bg_login1.png";
import Space from "../../Components/Space";
 
import { StatusBar } from "react-native";
import { SIZES } from "../../constants/theme";


const AuthLayout = ({ children, isFocused }) => {
 

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <StatusBar backgroundColor={'transparent'}   barStyle='dark-content'  />

      <Image
        style={styles.ImageBackground}
        source={isFocused ? Bacimage : Bacimage1}
        resizeMode="stretch"
      />
      <Space space={30} />

      <View
        style={{
          flex: 1 / 4,
          justifyContent: "flex-end",
        }}
      >
        <Text style={styles.headerTitle}>
          Je me connecte à mon espace restaurateur
        </Text>
      </View>
      {children}

      {/* <View style={{ flex: 1 / 3,  }}></View> */}
    </SafeAreaView>
  );
};

export default AuthLayout;


const styles = StyleSheet.create({
  container: {
      flex:1,
      margin:20
  },

  image:{
      justifyContent: 'center',
  },
  containerABS:{
      backgroundColor: "#F0987D",
      alignSelf:'center',
      flex:1
  },
  headerTitle:{
      fontSize:24,
      fontWeight:'700',
      color:"#fff",
      width:'70%'
  },
  ImageBackground: {
      ...StyleSheet.absoluteFillObject,
      width: SIZES.width,
    },
});

{
  /* {error && <ToastMessages type={type} error={error} />} */
}
{
  /* 
      <View
        style={[
          // styles.containerABS,
        ]}
      >
        <Text style={styles.headerTitle}>
        Je me connecte à mon espace Livreur
        </Text>
          <FormLogin /> 
      </View> */
}
