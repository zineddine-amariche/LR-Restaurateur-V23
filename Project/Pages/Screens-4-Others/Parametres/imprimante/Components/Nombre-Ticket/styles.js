import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../../../constants/theme';
;

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    Container: {
        width: '100%',
        backgroundColor:COLORS.transparentPrimray ,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth:1,
        borderColor:COLORS.primary,
        borderRadius:6,
        marginTop:10,
        padding:10
      },
      Text:{
          fontSize:16,
          fontWeight:'700',
          marginHorizontal:5
      }
 
})