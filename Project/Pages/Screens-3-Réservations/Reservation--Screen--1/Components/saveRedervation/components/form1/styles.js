import {StyleSheet,Dimensions} from 'react-native';
import { COLORS } from '../../../../../../../constants/theme';

const styles = StyleSheet.create({
  containerForm: {
    marginTop: 15,
    width: Dimensions.get('window').width,
    paddingHorizontal: 15,
    
  },
  
 

  error: {
    color: '#ff0000',
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 13,
  },
 



  containerButtons:{
    backgroundColor:'transparent'
  },
  Input: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 8,
    color: COLORS.darkGris,
    fontSize: 16,
    fontFamily: "RobotoBold",
    flex: 1,
    paddingLeft: 2,
  },

});

export default styles;
