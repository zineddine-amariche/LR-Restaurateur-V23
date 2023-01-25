import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    width:"50%"

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    width:'100%'
  },

});

