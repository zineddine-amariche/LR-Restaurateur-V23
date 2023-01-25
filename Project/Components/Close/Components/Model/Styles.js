import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  ConatinerClose: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  Title: {
    backgroundColor: COLORS.white,
    width: '90%',
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  TextTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.red,
    textAlign: 'center',
  },
  ImageContainer: {
    alignSelf: 'center',
    marginVertical: 15,
  },
  BoxText: {
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
    alignSelf:'center'
  },
  TextBody:{
    textAlign:'center',
    fontSize:16,
    color:COLORS.black,
    paddingBottom:15
  },  
  body: {
    backgroundColor: COLORS.gray,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  timeChose: {
    backgroundColor: COLORS.transparentPrimray5,
    marginVertical: 8,
    width: 80,
    paddingVertical: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextBtn: {
    color: COLORS.white,
  },
  ButtonTime: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonTouch: {
    backgroundColor: COLORS.primary,
    width: 70,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  TextButtonTouch: {
    color: COLORS.white,
    fontWeight: '700',
  },
  ButtonsFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom:15
  },
  ButtonDiscar: {
    width: 116,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  ButtonValid: {
    backgroundColor: COLORS.primary,
    width: 116,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
