import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({

  Articles:{
    display: 'flex',
    flexDirection: 'row',

  },
  TextArticles:{
    fontWeight:'700',
    paddingLeft:10
  },
  rowDetails:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10
  },
  TextBold:{
    fontWeight:'bold',
    fontSize:17

  },
  TextSemiBold:{
    fontWeight:'600',
    fontSize:17

  }

});
