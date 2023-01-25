import {View, Text, Switch} from 'react-native';
import React from 'react';
import {styles} from '../../Hooks/style';
import {BluetoothManager} from '@brooons/react-native-bluetooth-escpos-printer';
import {COLORS} from '../../../../../../constants/theme';

const SwitchPrinter = ({
  bleOpend,
  SwitchBle,
  LoadingSet,
  PairdSet,
  LoadingFalse,
}) => {
  return (
    <View style={styles.container_bluetooth}>
      <View style={{}}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
          Activer le bluetooth de l’appareil
        </Text>
      </View>
      <Switch
        trackColor={{false: COLORS.gray, true: COLORS.primary}}
        thumbColor={bleOpend ? COLORS.white : COLORS.Jaune}
        ios_backgroundColor="#3e3e3e"
        value={bleOpend}
        onValueChange={v => {
          LoadingSet();
          if (!v) {
            BluetoothManager.disableBluetooth().then(
              () => {
                SwitchBle();
              },
              err => {
                alert(err);
              },
            );
          } else {
            BluetoothManager.enableBluetooth().then(
              r => {
                var paired = [];
                if (r && r.length > 0) {
                  for (var i = 0; i < r.length; i++) {
                    try {
                      paired.push(JSON.parse(r[i]));
                    } catch (e) {
                      //ignore
                    }
                  }
                }
                PairdSet(paired);
              },
              err => {
                LoadingFalse();
                alert(err);
              },
            );
          }
        }}
      />
    </View>
  );
};

export default SwitchPrinter;
