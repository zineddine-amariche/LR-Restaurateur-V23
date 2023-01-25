import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: '10%',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
  },
  BoxTime: {
    // backgroundColor: COLORS.Jaune,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attente: {
    backgroundColor: '#fff',
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1.5,
    height: 40,
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  List: {
    backgroundColor: '#fff',
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1.5,
    height: 40,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    fontSize:17,
    fontWeight:"700",
    color:COLORS.secondary
  }
});
