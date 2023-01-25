import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../../constants/theme';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white,
    alignSelf:'center'
  },

  Table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginTop: 10,
    height: 45,
  },
  Midi: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    marginTop: 10,
  },
});
