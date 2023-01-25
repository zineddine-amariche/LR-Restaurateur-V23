import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxTimeActive: {
    backgroundColor: COLORS.gray,
    width: '100%',
  },
});
