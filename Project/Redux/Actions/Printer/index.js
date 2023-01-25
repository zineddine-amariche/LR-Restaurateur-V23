import {ADD, DELETE} from '../../Types/Printer';

export const Add = val => {
  return {
    type: ADD,
    payload: val + 1,
  };
};
export const Minus = val => {
  return {
    type: DELETE,
    payload: val - 1,
  };
};



































// import {
//     BluetoothManager,
//     BluetoothEscposPrinter,
//     BluetoothTscPrinter,
//   } from '@brooons/react-native-bluetooth-escpos-printer';

//   import {
//     View,
//     Text,
//     Button,
//     TouchableOpacity,
//     ScrollView,
//     StatusBar,
//     Dimensions,
//     DeviceEventEmitter,
//     NativeEventEmitter,
//     Switch,
//     ActivityIndicator,
//   } from 'react-native';

//   const _listeners = [];
//   const _deviceAlreadPaired = rsp => {
//     var ds = null;
//     if (typeof rsp.devices == 'object') {
//       ds = rsp.devices;
//     } else {
//       try {
//         ds = JSON.parse(rsp.devices);
//       } catch (e) {}
//     }
//     if (ds && ds.length) {
//       let pared = pairedDs;
//       pared = pared.concat(ds || []);
//       setPairedDs(pared);
//     }
//   };
//   const _deviceFoundEvent = rsp => {
//     //alert(JSON.stringify(rsp))
//     var r = null;
//     try {
//       if (typeof rsp.device == 'object') {
//         r = rsp.device;
//       } else {
//         r = JSON.parse(rsp.device);
//       }
//     } catch (e) {
//       //alert(e.message);
//       //ignore
//     }
//     //alert('f')
//     if (r) {
//       let found = foundDs || [];
//       if (found.findIndex) {
//         let duplicated = found.findIndex(function (x) {
//           return x.address == r.address;
//         });
//         //CHECK DEPLICATED HERE...
//         if (duplicated == -1) {
//           found.push(r);
//           setFoundDs(found);
//         }
//       }
//     }
//   };

//   const impContext = React.useMemo(
//     () => ({
//       componentDidMount: () => {
//         BluetoothManager.checkBluetoothEnabled().then(
//           enabled => {
//             setBleOpend(Boolean(enabled));
//             setLoading(false);
//           },
//           err => {
//             err;
//           },
//         );

//         if (Platform.OS === 'ios') {
//           let bluetoothManagerEmitter = new NativeEventEmitter(
//             BluetoothManager,
//           );
//           _listeners.push(
//             bluetoothManagerEmitter.addListener(
//               BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
//               rsp => {
//                 _deviceAlreadPaired(rsp);
//               },
//             ),
//           );
//           _listeners.push(
//             bluetoothManagerEmitter.addListener(
//               BluetoothManager.EVENT_DEVICE_FOUND,
//               rsp => {
//                 _deviceFoundEvent(rsp);
//               },
//             ),
//           );
//           _listeners.push(
//             bluetoothManagerEmitter.addListener(
//               BluetoothManager.EVENT_CONNECTION_LOST,
//               () => {
//                 setName('');
//                 setBoundAddress('');
//               },
//             ),
//           );
//         } else if (Platform.OS === 'android') {
//           _listeners.push(
//             DeviceEventEmitter.addListener(
//               BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
//               rsp => {
//                 _deviceAlreadPaired(rsp);
//               },
//             ),
//           );
//           _listeners.push(
//             DeviceEventEmitter.addListener(
//               BluetoothManager.EVENT_DEVICE_FOUND,
//               rsp => {
//                 _deviceFoundEvent(rsp);
//               },
//             ),
//           );
//           _listeners.push(
//             DeviceEventEmitter.addListener(
//               BluetoothManager.EVENT_CONNECTION_LOST,
//               () => {
//                 setName('');
//                 setBoundAddress('');
//               },
//             ),
//           );
//           _listeners.push(
//             DeviceEventEmitter.addListener(
//               BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT,
//               () => {
//                 ToastAndroid.show(
//                   'Device Not Support Bluetooth !',
//                   ToastAndroid.LONG,
//                 );
//               },
//             ),
//           );
//         }
//       },
//       _scan: () => {
//         setLoading(true);
//         BluetoothManager.scanDevices().then(
//           s => {
//             var ss = s;
//             var found = ss.found;
//             try {
//               found = JSON.parse(found); //@FIX_it: the parse action too weired..
//             } catch (e) {
//               //ignore
//             }
//             var fds = foundDs;
//             if (found && found.length) {
//               fds = found;
//             }
//             setFoundDs(fds);
//             setLoading(false);
//           },
//           er => {
//             setLoading(false);
//             alert('error' + JSON.stringify(er));
//           },
//         );
//       },
//       _renderRow: rows => {
//         let items = [];
//         for (let i in rows) {
//           let row = rows[i];
//           if (row.address) {
//             items.push(
//               <TouchableOpacity
//                 key={new Date().getTime() + i}
//                 style={{backgroundColor: '#087'}}
//                 onPress={() => {
//                   setLoading(true);

//                   BluetoothManager.connect(row.address).then(
//                     s => {
//                       setLoading(false);
//                       setBoundAddress(row.address);
//                       setName(row.name) || 'UNKNOWN';
//                     },
//                     e => {
//                       setLoading(false);
//                       alert(e);
//                     },
//                   );
//                 }}>
//                 <View
//                   style={{
//                     padding: 5,
//                     backgroundColor: '#fff',
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     borderBottomWidth: 0.4,
//                     borderTopWidth: 0.3,
//                   }}>
//                   <View
//                     style={{
//                       backgroundColor: '#fff',
//                       flexDirection: 'row',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                     }}>
//                     <Icon
//                       name="bluetooth"
//                       color={'#087'}
//                       size={17}
//                       style={{marginTop: 2, marginLeft: 5}}
//                     />

//                     <Text
//                       style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
//                       {row.name || 'UNKNOWN'}
//                     </Text>
//                   </View>

//                   <Text style={styles.address}>{row.address}</Text>
//                 </View>
//               </TouchableOpacity>,
//             );
//           }
//         }
//         return items;
//       },
//       FfoundDs: () => {
//         if (foundDs) {
//           return {
//             foundDs,
//           };
//         } else {
//           return false;
//         }
//       },
//       FpairedDs: () => {
//         if (pairedDs) {
//           return pairedDs;
//         } else {
//           return false;
//         }
//       },
//       SwitchBle: () => {
//         setBleOpend(false);
//         setLoading(false);
//         setFoundDs([]);
//         setPairedDs([]);
//         if (!bleOpend && !loading && !foundDs && !pairedDs) {
//           return true;
//         }
//       },
//       LoadingSet: () => {
//         setLoading(true);
//         if (loading) return true;
//       },
//       PairdSet: p => {
//         setBleOpend(true);
//         setLoading(false);
//         setPairedDs(p);
//         if (bleOpend && !loading && pairedDs) {
//           return true;
//         }
//       },
//       LoadingFalse: () => {
//         setLoading(false);
//       },
//       BleOpend: () => {
//         setBleOpend(bleOpend);
//       },
//       plus: () => {
//         if (count <= 9) {
//           setCount(count++);
//         }
//       },
//       moin: () => {
//         if (count >= 1) {
//           setCount(count--);
//         }
//       },
//     }),
//     [],
//   );
