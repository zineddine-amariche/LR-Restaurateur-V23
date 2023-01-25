import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trie: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    backgroundColor: COLORS.green,
  },

  button: {
    height: 40,
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
  FlatList: {
    alignItems:'center',
  },
  wrapper: {
    // alignSelf: 'center',
    // paddingTop: 10,
    // justifyContent:'space-around',
    flex:1,
    paddingTop: 10,

  },
  wrapper2: {
    alignSelf: 'center',
    paddingTop: 10,
    marginBottom: 15,
  },
});
