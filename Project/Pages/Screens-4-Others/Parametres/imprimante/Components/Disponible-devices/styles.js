import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../../constants/theme';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  space: {
    height: 0.8,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  container_Appareils_Disponible: {
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text_appareils_dispo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
  },
  scondText_appareil_dispo: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.black,
    paddingLeft:2
  },
  
  Dis:{
    flex:1/2,
    marginTop:10,
    borderRadius:6,
    overflow:'hidden',

  }
});
