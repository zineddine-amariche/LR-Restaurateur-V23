import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height:65,
    justifyContent:'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text: {
    fontSize: 17,
    fontWeight: '800',
  },
});
export default styles;
