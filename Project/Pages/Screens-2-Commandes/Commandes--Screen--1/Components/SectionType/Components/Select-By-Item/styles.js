import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trie: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: COLORS.white,
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
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: COLORS.gray,
    overflow: 'visible',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: COLORS.white,
    // alignSelf: 'center',
    // marginLeft:15,
    // marginRight:5,
    // padding: 5,
    // alignItems: 'center',
  },
});
