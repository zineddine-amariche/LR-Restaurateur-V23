import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal:20,
    paddingVertical:10,
    
  },
  containerTab: {
    backgroundColor: '#fff',
    paddingHorizontal:20,
    paddingVertical:10,
    width:'60%',
    alignSelf:'center'
  },
  row:{
    display:'flex',
    flexDirection: 'row',
    paddingVertical:10,
    alignItems:"center"
  },

  Text:{
    fontWeight:'700',
    },
    TextError:{
      fontWeight:'700',
    }
});
