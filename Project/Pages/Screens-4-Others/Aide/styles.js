
import { StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

    },
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    containerRowBig: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        padding: 10,
    },

    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    head: { height: 40, backgroundColor: '#f1f8ff' },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    containerTitle: {
        backgroundColor: '#087',
        width: "100%",
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 23,

    },

    titleH1: {
        fontSize: 26,
        color: "#fff",
        fontWeight: 'bold',
        marginLeft: 1,

    },
    titleH3: {
        fontSize: 15,
        color: "#000",
        paddingHorizontal: 8,
        fontWeight: '700'

    },
    titleH3s: {
        fontSize: 15,
        color: "#fff",
        padding: 5,
        fontWeight: '700'
    },
    containerRowS: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bigtitre: {
        fontSize: 30,
        color: '#000',
        margin: 10,
        fontWeight: '700',

    },
    containerRowTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    textInput: {


        width: '80%',
        backgroundColor: '#ccc',
        color: '#000',
    },


});
