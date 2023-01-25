import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    position: "relative",
  },
  trie: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:"flex-end",
    marginTop:10,
    paddingHorizontal:20
  },
});
