import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    position: "relative",
    // width:'width*1'
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
