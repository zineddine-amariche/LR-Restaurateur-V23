import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/theme";

 const styles = StyleSheet.create({
    containerH: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    time: {
      paddingVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      width: '30%',
      height: 45,
      backgroundColor: '#087',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 26,
    },
  
    titleH3: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    titleH1: {
      fontSize: 20,
      color: '#fff',
    },
    timeChose: {
      margin: 5,
      backgroundColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginVertical: 20,
      borderWidth: 1,
      borderColor: '#000',
    },
    TimeRowText:{
      flexDirection:'row',
      alignItems:'center',
    },
    TxtRed:{
      color:COLORS.red,
      fontSize:14
    }
  });
  export default styles