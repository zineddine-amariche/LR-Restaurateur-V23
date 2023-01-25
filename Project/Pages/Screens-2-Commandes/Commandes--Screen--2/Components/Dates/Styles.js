import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingLeft: 10,
  },
  containerTab: {
    backgroundColor: COLORS.white,
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  Left: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
    justifyContent: 'space-between',
    height: 40,
  },
  Right: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-around',
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
    marginRight: 20,
  },
  Text: {
    color: COLORS.black,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  IconBox: {},
});
