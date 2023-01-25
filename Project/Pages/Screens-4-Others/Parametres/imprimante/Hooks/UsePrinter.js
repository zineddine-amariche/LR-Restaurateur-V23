import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import {BluetoothManager} from '@brooons/react-native-bluetooth-escpos-printer';
import {
  View,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
  NativeEventEmitter,
} from 'react-native';
import {
  NBR_TICKET,
  PRINTER_CONNECTED,
  PRINTER_FAILED,
  PRINTER_LOADING,
} from '../../../../../Redux/Types/Printer';
import {COLORS} from '../../../../../constants/theme';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function UsePrinter() {
  const [pairedDs, setPairedDs] = useState([]);
  const [foundDs, setFoundDs] = useState([]);
  const [bleOpend, setBleOpend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [boundAddress, setBoundAddress] = useState('');
  const [name, setName] = useState('');
  let [count, setCount] = useState(1);
  const _listeners = [];

  const dispatch = useDispatch();

  const _deviceAlreadPaired = rsp => {
    var ds = null;
    if (typeof rsp.devices == 'object') {
      ds = rsp.devices;
    } else {
      try {
        ds = JSON.parse(rsp.devices);
      } catch (e) {}
    }
    if (ds && ds.length) {
      let pared = pairedDs;
      pared = pared.concat(ds || []);
      setPairedDs(pared);
    }
  };
  const _deviceFoundEvent = rsp => {
    alert(JSON.stringify(rsp))
    var r = null;
    try {
      if (typeof rsp.device == 'object') {
        r = rsp.device;
      } else {
        r = JSON.parse(rsp.device);
      }
    } catch (e) {
      //alert(e.message);
      //ignore
    }
    //alert('f')
    if (r) {
      let found = foundDs || [];
      if (found.findIndex) {
        let duplicated = found.findIndex(function (x) {
          return x.address == r.address;
        });
        //CHECK DEPLICATED HERE...
        if (duplicated == -1) {
          found.push(r);
          setFoundDs(found);
        }
      }
    }
  };


  const componentDidMount = () => {
    BluetoothManager.checkBluetoothEnabled().then(
      enabled => {
        setBleOpend(Boolean(enabled));
        setLoading(false);
      },
      err => {
        err;
      },
    );

    if (Platform.OS === 'ios') {
      let bluetoothManagerEmitter = new NativeEventEmitter(BluetoothManager);
      _listeners.push(
        bluetoothManagerEmitter.addListener(
          BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
          rsp => {
            _deviceAlreadPaired(rsp);
          },
        ),
      );
      _listeners.push(
        bluetoothManagerEmitter.addListener(
          BluetoothManager.EVENT_DEVICE_FOUND,
          rsp => {
            _deviceFoundEvent(rsp);
          },
        ),
      );
      _listeners.push(
        bluetoothManagerEmitter.addListener(
          BluetoothManager.EVENT_CONNECTION_LOST,
          () => {
            setName('');
            setBoundAddress('');
          },
        ),
      );
    } else if (Platform.OS === 'android') {
      _listeners.push(
        DeviceEventEmitter.addListener(
          BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
          rsp => {
            _deviceAlreadPaired(rsp);
          },
        ),
      );
      _listeners.push(
        DeviceEventEmitter.addListener(
          BluetoothManager.EVENT_DEVICE_FOUND,
          rsp => {
            console.log('rsp', rsp)
            _deviceFoundEvent(rsp);
          },
        ),
      );
      _listeners.push(
        DeviceEventEmitter.addListener(
          BluetoothManager.EVENT_CONNECTION_LOST,
          () => {
            setName('');
            setBoundAddress('');
          },
        ),
      );
      _listeners.push(
        DeviceEventEmitter.addListener(
          BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT,
          () => {
            ToastAndroid.show(
              'Device Not Support Bluetooth !',
              ToastAndroid.LONG,
            );
          },
        ),
      );
    }
  };
  const _scan = async() => {


     await BluetoothManager.scanDevices()
     .then(
      s => {
        console.log('s', s)
        var ss = s;
        var found = ss.found;
        try {
          found = JSON.parse(found); //@FIX_it: the parse action too weired..
        } catch (e) {
          //ignore
        }
        var fds = foundDs;
        if (found && found.length) {
          fds = found;
        }
        console.log('fds', fds)
        setFoundDs(fds);
        setLoading(false);
      },
      er => {
        setLoading(false);
        // alert('error' + JSON.stringify(er));

      console.log('error' + JSON.stringify(er))
      // alert('error' + JSON.stringify(er));
      },
    );
  };


  const _renderRow = rows => {
    let items = [];
    for (let i in rows) {
      let row = rows[i];
      if (row.address) {
        items.push(
          <TouchableOpacity
            key={new Date().getTime() + i}
            style={{
              backgroundColor:boundAddress === row.address ? COLORS.primary :  COLORS.gray,
              height: 30,
              marginVertical: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 6,
              alignItems: 'center',
              paddingHorizontal: 10,
              width:'100%'
            }}
            onPress={() => {
              setLoading(true);
              dispatch({type: PRINTER_LOADING});

              BluetoothManager.connect(row.address).then(
                s => {
                  setLoading(false);
                  setBoundAddress(row.address);
                  setName(row.name) || 'UNKNOWN';
                  AsyncStorage.setItem("lastDevice", JSON.stringify(row.address)); 
                  dispatch({type: PRINTER_CONNECTED, payload: row.address});
                },
                e => {
                  dispatch({type: PRINTER_FAILED, payload: e});
                  setLoading(false);
                  alert(e);
                },
              );
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              
              }}>
              <Icon
                name="bluetooth" 
                color={COLORS.primary}
                size={17}
                style={{marginTop: 2, marginRight:5}}
              />

              <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
                {row.name || 'UNKNOWN'}
              </Text>
            </View>

           { boundAddress === row.address ? <Text style={styles.address}>{'connected'}</Text> : null}
          </TouchableOpacity>,
        );
      }
    }
    return items;
  };
  const FfoundDs = () => {
    if (foundDs) {
      return {
        foundDs,
      };
    } else {
      return false;
    }
  };
  const FpairedDs = () => {
    if (pairedDs) {
      return pairedDs;
    } else {
      return false;
    }
  };
  const SwitchBle = () => {
    setBleOpend(false);
    setLoading(false);
    setFoundDs([]);
    setPairedDs([]);
    if (!bleOpend && !loading && !foundDs && !pairedDs) {
      return true;
    }
  };
  const LoadingSet = () => {
    setLoading(true);
    if (loading) return true;
  };
  const PairdSet = p => {
    setBleOpend(true);
    setLoading(false);
    setPairedDs(p);
    if (bleOpend && !loading && pairedDs) {
      return true;
    }
  };
  const LoadingFalse = () => {
    setLoading(false);
  };
  const BleOpend = () => {
    setBleOpend(bleOpend);
  };
  const plus = () => {
    if (count <= 9) {
      setCount(count++);
      dispatch({type: NBR_TICKET, payload: count});
    }
  };
  const moin = () => {
    if (count >= 1) {
      setCount(count--);
      dispatch({type: NBR_TICKET, payload: count});
    }
  };

  return {
    pairedDs,
    foundDs,
    bleOpend,
    loading,
    boundAddress,
    name,
    count,
    componentDidMount,
    _scan,
    _renderRow,
    FfoundDs,
    FpairedDs,
    SwitchBle,
    LoadingSet,
    PairdSet,
    LoadingFalse,
    BleOpend,
    plus,
    moin,
    _deviceAlreadPaired,
    _deviceFoundEvent,
  };
}
