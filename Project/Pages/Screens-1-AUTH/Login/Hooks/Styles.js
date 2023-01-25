import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        margin: 10
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingHorizontal: 20,
        marginHorizontal: 21,
        marginVertical: 20


    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        height: 40,
        backgroundColor: "#08d4c4",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image:{
        width:'100%',
        justifyContent: 'center',
    },
    containerABS:{
        zIndex:5,
        // backgroundColor: "#ccc",
        alignSelf:'center',
        backgroundColor:'transparent'
        // backgroundColor:'#eee'
    },
    headerTitle:{
        fontSize:24,
        fontWeight:'700',
        color:"#fff",
        lineHeight:27.6
    }
});

export default styles