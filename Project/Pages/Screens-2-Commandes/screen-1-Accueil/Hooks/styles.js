import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:COLORS.black,
      position:'relative'
  },
  Loading:{
    flex:1,
    backgroundColor:COLORS.light,
    alignItems:'center',
    justifyContent  :'center',
    flexDirection:'row'
  },
  TEXTSTYLES:{
    marginLeft:15,
    color:COLORS.red,
    fontSize:16
  }
});
