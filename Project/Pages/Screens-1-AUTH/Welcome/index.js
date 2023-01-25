import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../../../assets/Login/images/logo-live-resto1.png';
import styles from './styles';
import Title from '../../../assets/Login/images/RESTAURANTS.png';
import ImgBody from '../../../assets/Login/images/cook1.png';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {isTablet} from '../../../Redux/Actions/isTab';
import {ScrollView} from 'react-native-gesture-handler';


const Welcome = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    isTablet(dispatch);
  }, []);
  const Tablet = useSelector(state => state.IsTab);
  // console.log('Tablet', Tablet);

  let WithBtn = Tablet.IsTab ? '70%' : '100%';
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image source={Logo} style={styles.Logo} />
      </View>
      <ScrollView>
        <View style={styles.ViewAll}>
          <View style={styles.Title}>
            <Image source={Title} />
          </View>
          <View style={styles.Body}>
            <Image source={ImgBody} />
          </View>
          <View style={[styles.ButtonsContainer]}>
            <TouchableOpacity
              style={[styles.btn1, {width: WithBtn}]}
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}>
              <Text style={[styles.TextBtn1]}>Se connecter</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.btn2, {width: WithBtn}]}>
              <Text style={[styles.TextBtn2]}>S'inscrire</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Welcome;
