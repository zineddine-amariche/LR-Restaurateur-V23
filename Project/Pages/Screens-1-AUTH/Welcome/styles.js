import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  Logo: {
    width: 83,
    height: 80,
  },
  ViewAll: {
    flex:1,
  },
  Title: {
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
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
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    paddingVertical: 15,
    alignItems: 'center',
  },
  btn1: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    alignItems: 'center',
    marginVertical: '3%',
    borderRadius: 6,
  },
  btn2: {
    backgroundColor: COLORS.white,
    padding: 10,
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 6,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    overflow: 'hidden',
  },
  TextBtn1: {
    color: COLORS.white,
    fontWeight: '700',
    fontFamily: '',
    fontSize: 16,
  },
  TextBtn2: {
    color: COLORS.secondary,
    fontWeight: '700',
    fontFamily: '',
    fontSize: 16,
  },
});
export default styles;
