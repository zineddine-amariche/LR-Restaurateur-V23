import {View, Text, Image} from 'react-native';
import React from 'react';
import returnTo from '../../../../../../assets/paramètres/Vector(Stroke)(1).png';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
const HeaderPrinter = ({goBack}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={goBack} >
      <Image source={returnTo} style={{marginRight: 15}} />
        <Text style={styles.Text}>Retour aux paramètres</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderPrinter;
