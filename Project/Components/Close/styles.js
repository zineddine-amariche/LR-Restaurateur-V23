import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex:1
  },
  Box: {
    alignItems: 'center',
  },
  containerBox:{
flex:1,
justifyContent:'center',
alignItems:'center'
  },
  Txt1: {
    height: 45,
    marginVertical: 15,
    alignItems: 'center',
    fontSize: 20,
  },
  T2: {
    height: 45,
    marginVertical: 15,
    alignItems: 'center',
    fontSize: 14,
    width:328,
    textAlign:'center'
  },
  image:{
    alignSelf:'center',
 
  },  
  B1: {
    backgroundColor: COLORS.primary,
    height: 45,
    width: 328,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 15,
  },
  BT1: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight:'700'

  },
  B2: {
    backgroundColor: COLORS.white,
    height: 45,
    width: 328,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 15,
    borderWidth:1,
    borderColor:COLORS.primary
  },
  BT2: {
    color: COLORS.primary,
    fontSize: 17,
    fontWeight:'700'
  },
});
export default styles;
