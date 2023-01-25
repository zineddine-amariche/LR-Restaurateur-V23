import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';

import styles from './Hooks/styles';
import ImgBody from '../../../assets/Login/images/cook1.png';
import Logo from '../../../assets/Login/images/logo-live-resto1.png';
import {COLORS} from '../../../constants/theme';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import _BackgroundTimer from 'react-native-background-timer';
import KeepAwake from 'react-native-keep-awake';

const Espace = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  const Tablet = useSelector(state => state.IsTab);
  let WithBtn = Tablet.IsTab ? '70%' : '100%';
  const {IsTab} = Tablet;
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
      <StatusBar backgroundColor={COLORS.gray} barStyle="dark-content" />
      <View style={{height: 90, justifyContent: 'center'}}>
        <Image source={Logo} style={styles.Logo} />
      </View>
      <ScrollView>

      <View style={[styles.Title, {height:IsTab ? 125 : 70, justifyContent: 'center'}]}>
        <Text style={styles.TextTitel}>Bonjour</Text>
        <Text style={styles.TextTitel2}>{auth.user.title}</Text>
      </View>
        <View style={{marginTop: IsTab ? 25 : 10 }}>
          <View>
            <View style={styles.ViewAll}>
              <View style={styles.Body}>
                <Image source={ImgBody} />
              </View>
            </View>
          </View>

          <View style={[styles.ButtonsContainer,{marginVertical:IsTab ? 45 : 25}]}>
            <TouchableOpacity
              style={[styles.btn1, {width: WithBtn}]}
              onPress={() => {
                navigation.navigate('Accueil');
              }}>
              <Text style={styles.TextBtn1}>Accéder à mon espace</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Espace;
