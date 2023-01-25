import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height:'10%',
    backgroundColor: COLORS.gray,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:15,
  },
 Right:{
    flexDirection:"row",
    alignItems:'center'
 }
});
