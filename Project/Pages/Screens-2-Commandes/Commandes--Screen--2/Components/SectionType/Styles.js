import {StyleSheet, Dimensions} from 'react-native';
import { useSelector } from 'react-redux';
import {COLORS} from '../../../../../constants/theme';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 0,
    backgroundColor:'#fff'
  },
  trie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    marginBottom: 1,
  },
  FlatList: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    height: 40,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  Text: {
    color: COLORS.black,
    fontWeight: '700',
  },
  NoCommandes: {
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  TextNoCommandes: {
    fontSize: 17,
    fontWeight: '600',
    color: '#f00',
    paddingVertical: 10,
  },
  LoadingBox: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    flex:1,
    paddingTop: 10,

  },
});
