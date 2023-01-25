import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },

  FlatList: {

    height:"70%",
    backgroundColor: COLORS.white,
    width:'100%',
    overflow:'visible',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  wrapper:{
 
    justifyContent:"center",
    backgroundColor:COLORS.white,
    width:'100%',
    alignSelf:'center',
    paddingBottom:90

}
});
