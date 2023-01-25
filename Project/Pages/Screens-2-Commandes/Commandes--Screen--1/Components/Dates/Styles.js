import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    paddingHorizontal: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Left: {
    width: '40%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:30
  },

  Right: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#fff',
    height: 40,
  },
  button: {
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  Text2: {
    color: COLORS.black,
    fontWeight: '700',
    paddingLeft:10
  },
  Text: {
    color: COLORS.black,
    fontWeight: '600',
    textDecorationLine:'underline'
  },
  IconBox:{
  }
});
