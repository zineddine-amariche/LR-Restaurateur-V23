import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    backgroundColor:COLORS.white,
  },
  row:{
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingHorizontal:5,
    borderRadius:6,
    height:40,
  },
  rowItem:{
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
  },
  textTab:{
    color:COLORS.white,
    fontWeight:"700",
    paddingLeft:6,
    width:'70%'
  },
  textQty:{
    color:COLORS.white,
    fontWeight:"700",
    width:30
  },
  textPrice:{
    color:COLORS.white,
    fontWeight:"700",
  },
  BoxPlus:{
    alignItems:'center'
  },
  buttonPlus:{
    backgroundColor:'#ccc',
    width:'100%',
    alignItems:'flex-end',
    padding:5
  }


});
