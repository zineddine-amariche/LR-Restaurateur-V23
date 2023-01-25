import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  BoxTime: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor:'#fff'
  },
  Row: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 15,
    backgroundColor:'#ccc',
    height:50
  },
  TextMode: {
    fontSize: 17,
    fontWeight: '600',
  },
  BoxTimeActive: {
    backgroundColor: COLORS.gray,
    width: '100%',
  },
});
