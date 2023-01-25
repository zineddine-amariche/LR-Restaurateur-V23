import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AAC84030',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginVertical: 5,
    justifyContent: 'center',
    height:85,
    zIndex:5,
    marginTop:11,
    marginRight:15,

  },
  abs2: {
    position: 'absolute',
    top: -13,
    right: 46,
    zIndex:15
  },
  abs3: {
    position: 'absolute',
    top: -13,
    right: 49,
    zIndex:15,
    backgroundColor:COLORS.white,
    height:25,
    width:25,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    borderWidth:1,
    borderColor:COLORS.primary
  },
  abs: {
    position: 'absolute',
    top: -13,
    right: 16,
    zIndex:15
  },
  BoxInfo: {
    backgroundColor: COLORS.transparent,
    width: '95%',
    height: '80%',
    paddingLeft:15

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
    color:COLORS.prete,
    paddingLeft:7,
    fontWeight:"600"
  },
  btnToCuisine:{
    flexDirection:'row',
    height:28,
    borderRadius:20,
    backgroundColor:COLORS.primary,
    width:"40%",
    alignSelf:'flex-end',
    alignItems:'center',
    justifyContent: 'center',

  },
  TextButton:{
    color:COLORS.white
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
