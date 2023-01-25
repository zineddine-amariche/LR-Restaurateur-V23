import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import image from '../../../../../assets/Accueil/logo-lV.png';
import I2 from '../../../../../assets/Accueil/i_1.png';
import I3 from '../../../../../assets/Accueil/V.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
const HeaderAccueil = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} />
      </View>
      <View style={styles.Right}>
        <TouchableOpacity>
          <Image source={I2} style={{marginHorizontal: 10}} />
        </TouchableOpacity>
        <Image source={I3} />
      </View>
    </View>
  );
};

export default HeaderAccueil;
