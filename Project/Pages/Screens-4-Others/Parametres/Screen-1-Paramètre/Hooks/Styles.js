import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../constants/theme";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position:'relative'
    },
    card: {
      height: 130,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      marginTop: 25,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
      padding: 1,
    },
    Information:{
        backgroundColor:'#fff',
        flex:1/3,
        padding:25
    },  
    SectionInfo:{
        backgroundColor:'#fff'
    },
    btn:{
        backgroundColor:COLORS.secondary,
        height:45,
        alignItems:'center',
        width:'100%',
        borderRadius:6,
        marginVertical:5,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },  
    Divider:{
        width:'90%',
        alignSelf:'center',
    },  
    btn2:{
        backgroundColor:COLORS.primary,
        height:45,
        alignItems:'center',
        width:'100%',
        borderRadius:6,
        marginVertical:5,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        marginTop:25
    }, 
    TextBtn:{
        color:COLORS.white,
        fontSize:16,
        lineHeight:19
        
    },  
    ContainerRow:{
        flexDirection:'row',
        alignItems:'center'
    },  
    Title1:{
        marginVertical:10,
        fontFamily:'',
        fontSize:18,
        fontWeight:'bold',
    },
    Title2:{
        marginVertical:10,
        fontFamily:'',
        fontSize:16,
        fontWeight:'600',
    },

    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      padding: 15,
    },
    cardInfo: {
      flex: 2,
      padding: 15,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
    containerTitle: {
      backgroundColor: '#087',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      paddingHorizontal: 25,
    },
  
    titleH1: {
      fontSize: 30,
      color: '#fff',
      fontWeight: 'bold',
      marginLeft: 5,
    },
    titleH3: {
      fontSize: 13,
      color: '#fff',
      marginLeft: 10,
    },
    titleH4: {
      fontSize: 20,
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    cardItem: {
      margin: 5,
    },
  });
  export default styles 