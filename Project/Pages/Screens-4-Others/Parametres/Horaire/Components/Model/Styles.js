import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../../../constants/theme';

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
    alignSelf:'center'
  },
  TextTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign:'center',
    opacity:0.5
  },
  BoxFermer:{
    flexDirection:'row',
    backgroundColor:COLORS.white,
    justifyContent:'space-around',
    marginVertical:15,
    alignItems:'center'
    
  },  
  TextFlat:{
    color:COLORS.black
  },  
  body:{
      backgroundColor:COLORS.gray,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
  },
  timeChose:{
      backgroundColor:COLORS.transparentPrimray5,
      marginVertical:8,
      width:80,
      paddingVertical:5,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center'
  },
  TextBtn:{
      color:COLORS.white
  },
  ButtonTime:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  ButtonTouch:{
    backgroundColor:COLORS.primary,
    width:70,
    height:25,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    marginVertical:10
  },
  TextButtonTouch:{
    color:COLORS.white,
    fontWeight:'700'
  },
  ButtonsFooter:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:5,
    marginBottom:10
  },
  ButtonDiscar:{
    width:116,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:6
    
  },
  ButtonValid:{
    backgroundColor:COLORS.primary,
    width:116,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:6


  },row:{
    flexDirection:'row',
    alignItems:'center'
  },  
  wrapper:{
    backgroundColor:COLORS.white,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10
  },
  boxItemRender:{
   
    backgroundColor:'#fff',
    marginVertical:3
  },
  TextFlat:{
    color:COLORS.primary,
    fontWeight:'700',
    marginTop:7,
    fontSize:16
  },
  TextBtn:{
    color:COLORS.black
  },
  rowBoxes:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  }
});
