import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({

  abs: {
    position: 'absolute',
    top: -4,
    right: 16,
    zIndex:15
  },
  BoxInfo: {
    backgroundColor: COLORS.transparent,
  },

  btnToCuisine:{
    flexDirection:'row',
    height:28,
    borderRadius:20,
    backgroundColor:'#fff',
    alignSelf:'flex-end',
    alignItems:'center',
    marginTop:10,
    justifyContent:"space-around",
    paddingHorizontal:10

  },
  TextButton:{
    color:COLORS.primary,
    fontSize:13,

  },



  client: {
    paddingBottom: 5,
  },
  clientText: {
    fontWeight: '700',
    fontSize:17
  },
  price: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical:5
  },
  etat:{
    flexDirection:'row',
    marginVertical:5,
    alignItems:"center"
  },

  TextArticle:{
    fontSize:15,
    color:COLORS.primary
  },
  TextRed:{
    fontSize:17,
    color:COLORS.Jaune,
    paddingLeft:7,
    fontWeight:"600"
  },

  img:{
    marginRight:5
  },
  Touch:{
    // backgroundColor: "#ccc",
    alignItems:"center",
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  LoadingButton:{
    flexDirection: 'row',
    height: 28,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
    width:100,
    marginRight:10, marginTop:10
  }

});
