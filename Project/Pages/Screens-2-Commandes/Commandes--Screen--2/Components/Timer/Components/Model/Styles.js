import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  ConatinerClose: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  Title: {
    backgroundColor: COLORS.white,
    width: '90%',
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf:'center'
  },
  TextTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign:'center'
  },
  body:{
      backgroundColor:COLORS.gray,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
  },
  timeChose:{
      backgroundColor:COLORS.transparentPrimray5,
      marginVertical:8,
      width:80,
      paddingVertical:5,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center'
  },
  TextBtn:{
      color:COLORS.white
  }
});
