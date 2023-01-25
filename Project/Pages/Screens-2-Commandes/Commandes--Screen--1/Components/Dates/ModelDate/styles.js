import {Col} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../../../constants/theme';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
  },
  Text: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 15,
  },
  BoxCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    margin: 5,
    paddingLeft: 15,
    // backgroundColor: '#ccc',

  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#ccc',
    paddingHorizontal:15
  },
  Btn1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    height: 40,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor:COLORS.primary
  },
  Btn2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    height: 40,
    width: 95,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textbtn2: {
    color: COLORS.white,
    paddingLeft: 10,
  },

  Textbtn1: {
    color: COLORS.primary,
    paddingLeft: 10,
  },
});
