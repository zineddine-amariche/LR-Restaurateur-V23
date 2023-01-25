import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  Logo: {
    width: 83,
    height: 80,
  },
  ViewAll: {
    justifyContent: 'space-evenly',
  },
  Title: {
    backgroundColor: COLORS.white,
    width:'90%',
    alignSelf:"center"
  },
  TextTitel: {
    fontSize: 27,
    color: COLORS.primary,
  },
  TextTitel2: {
    fontSize: 27,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  Body: {
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    alignItems: 'center',
  },
  ButtonsContainer: {
    width: '90%',
    backgroundColor: COLORS.g,
    alignSelf: 'center',
    alignItems: 'center',
  },
  btn1: {
    backgroundColor: COLORS.primary,
    width: '70%',
    alignItems: 'center',
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
  },
  TextBtn1: {
    color: COLORS.white,
    fontWeight: '700',
    fontFamily: '',
    fontSize: 16,
  },
});
export default styles;
