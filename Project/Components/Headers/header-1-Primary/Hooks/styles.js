import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../constants/theme';

const {height, width} = Dimensions.get('window');

 const styles = StyleSheet.create({
  container: {
    height:'10%',
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:15,
    paddingLeft:15
  },
 Right:{
    flexDirection:"row",
    alignItems:'center'
 }
});
export default styles
