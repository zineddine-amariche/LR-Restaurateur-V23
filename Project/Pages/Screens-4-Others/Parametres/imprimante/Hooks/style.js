import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../../constants/theme';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container_bluetooth: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  padding:15
  },
  Printer: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  title: {
    backgroundColor: '#eee',
    color: '#232323',
    paddingLeft: 8,
    paddingVertical: 4,
    textAlign: 'left',
  },
  wtf: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {},
  address: {},
  container_bluetooth_btn: {
    marginVertical: 15,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: COLORS.primary,
    elevation: 1,
    flexDirection: 'row',
  },
  container_bluetooth_name: {
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_bluetooth_name_item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bluetooth_name_item_text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  Imprimante_connectée: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    paddingVertical: 5,
    backgroundColor: '#fff',
  },

  scondText_appareil_dispo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#c0c0c0',
  },
});
