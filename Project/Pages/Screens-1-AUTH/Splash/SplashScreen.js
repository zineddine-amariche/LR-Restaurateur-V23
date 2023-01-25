import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Button, Fab} from 'native-base';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../constants/theme';
import  Loadin  from '../../../assets/Login/images/Component.png';

const SplashScreen = ({navigation}) => {
  //const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5dbca3" barStyle="light-content" />

      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../../assets/Login/images/logo-live-resto1.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Image source={Loadin} style={{position:'absolute', bottom:65}}/>
      </View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'black',
    fontWeight: 'bold',
  },
});

{
  /* <Animatable.View 
            style={[styles.footer, {
                backgroundColor: "#eee"
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: "#000"
            }]}>Restez connectez sur Live Resto</Text>
            <Text style={styles.text}>Connectez vous </Text>
            <View style={styles.button}>
           
               <Button block success >
                <Text style={styles.textSign}>Commencer</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="black"
                            size={20}
                        />
               </Button>
               
      
            </View>
        </Animatable.View> */
}
