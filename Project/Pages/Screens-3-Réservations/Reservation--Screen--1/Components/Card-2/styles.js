import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5DBCA330',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    width: '100%',
    marginVertical: 5,
    justifyContent: 'center',
    height:85,
    zIndex:5,
    marginTop:11,
    marginRight:10,

  },
  abs: {
    position: 'absolute',
    top: -11.5,
    right: 16,
    zIndex:15
  },
  BoxInfo: {
    backgroundColor: COLORS.transparent,
    width: '95%',
    height: '80%',
    paddingLeft:15,
    paddingRight:15,
   

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
    width:"100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },  

  TextArticle:{
    fontSize:15,
    color:COLORS.primary
  },
  TextRed:{
    fontSize:14,
    color:COLORS.secondary,
    paddingLeft:7,
    lineHeight: 16.1,
    fontFamily:'Helvetica'
  },
  btnToCuisine:{
    flexDirection:'row',
    height:28,
    borderRadius:20,
    backgroundColor:'#fff',
    width:"40%",
    alignSelf:'flex-end',
    alignItems:'center',
    justifyContent: 'center',

  },
  TextButton:{
    color:COLORS.primary
  },
  img:{
    marginRight:5
  },
  Touch:{
    // backgroundColor: "#ccc",
    alignItems:"center",
    justifyContent: 'center',
    width:'100%'
  }

});
