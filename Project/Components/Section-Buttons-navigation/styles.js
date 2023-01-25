import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20
  },
  ButtonBox:{
    backgroundColor:COLORS.primary,
    flexDirection:'row',
    height:45,
    paddingHorizontal:10,
    alignItems:'center',
    borderRadius:6,
    width:"48%",
    marginRight:5

  },
  ButtonBoxReservation:{
    flexDirection:'row',
    height:45,
    paddingHorizontal:10,
    alignItems:'center',
    borderRadius:6,
    width:"48%"
  },
  TextBtn1:{
    color:COLORS.white,
    fontSize:16,
    fontWeight:'700',
    paddingLeft:10
  }
});
