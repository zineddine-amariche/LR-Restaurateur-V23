import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width:"48%"
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    paddingHorizontal: 15,
    height:40,
    borderRadius:6,
  },
  Text:{
    fontSize:17,
    fontWeight:'700'
  }

});

