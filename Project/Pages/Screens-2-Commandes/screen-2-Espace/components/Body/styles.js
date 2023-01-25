import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: '90%',
    backgroundColor: COLORS.black,
    alignItems: 'center',
    padding: 25,
    paddingTop: 130,
  },
  FirstBox: {
    height: '15%',
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent:'center'
  },
  secondBox: {
    height: '30%',
    backgroundColor: COLORS.primary,
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15
  },
  thirdBox: {
    height: '30%',
    backgroundColor: COLORS.secondary,
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 27,
    color: COLORS.white,
  },
  abso: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 25,
    height: 25,
  },
  bacGround: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextEclips:{
    fontWeight:'700',
    color:COLORS.white
  }
});
