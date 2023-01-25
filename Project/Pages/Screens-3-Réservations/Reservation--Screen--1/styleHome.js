import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  preferences: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    backgroundColor: '#f4f4f4',
    borderRadius: 26,
    width: width * 0.95,
    alignSelf: 'center',
    borderColor: '#087',
    borderWidth: 4,
    alignItems: 'center',
    height: height * 0.07,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },

  ModeOccupe: {
    fontSize: 20,
    color: '#700',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TitelHeader: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  buttonContainer: {
    width: '90%',
    height: 40,
    backgroundColor: '#087',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  containerTimer: {},
  containerMsg: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 15,
  },

  containerM: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor: '#fff',
    marginBottom: 5,
    padding: 10,
    width: '100%',
  },

  titleH3: {
    fontSize: 20,
    color: '#fff',
  },
  titleH4: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 11,
  },

  titleH4s: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },

  btn2: {
    width: 85,
    height: 40,
    backgroundColor: '#087',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    alignSelf: 'center',
  },

  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    shadowColor: '#ccc',
    elevation: 12,
    shadowRadius: 30,
    shadowOffset: {width: 156, height: 13},
    alignSelf: 'center',
    width: width * 1,
    paddingLeft: 20,
    height: height * 0.085,
    justifyContent: 'space-between',
  },
  btn3: {
    width: 95,
    height: 45,
    backgroundColor: '#087',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 12,
    alignSelf: 'center',
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#eee',
  },

  containerTowT: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  containerV: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  containerH: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ccc',

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
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleH1: {
    fontSize: 20,
    color: '#000',
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
  btnTab: {
    borderRadius: 20,
    backgroundColor: '#087',
    paddingVertical: 10,
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 1,
  },
  btnActive: {
    backgroundColor: '#ccc',
    borderColor: '#087',
    borderWidth: 2,
  },
  listeBtn: {
    backgroundColor: '#000',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 14,
  },
  tabTextBtn: {
    color: '#fff',
    fontSize: 14,
  },
  tabTextBtnActive: {
    color: '#087',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
