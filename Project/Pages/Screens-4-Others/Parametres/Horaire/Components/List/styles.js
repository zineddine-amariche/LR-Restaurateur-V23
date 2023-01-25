import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.Jaune,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop:10
  },
  Midi:{
    width:"33%",
    height:30,
    alignItems:'center',
    justifyContent:'center'
  }, 
});
