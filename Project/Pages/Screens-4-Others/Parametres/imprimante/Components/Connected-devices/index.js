import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {UsePrinter} from '../../Hooks/UsePrinter';
import {styles} from './styles';
import {COLORS} from '../../../../../../constants/theme';

const Asssocie = ({pairedDs, loading, _renderRow}) => {

  console.log('pairedDs', pairedDs)
  return (
    <View style={styles.Dis}>
      <View style={styles.container_Appareils_Disponible}>
        <Text style={styles.text_appareils_dispo}>Appareils Associés :</Text>
        <Text style={styles.scondText_appareil_dispo}>
          (appuyez pour vous reconnecter)
        </Text>
      </View>
      {loading ? (
        <View style={{paddingVertical: 35}}>
          <ActivityIndicator color={COLORS.Jaune} animating={true} />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <ScrollView>{_renderRow(pairedDs)}</ScrollView>
        </View>
      )}
    </View>
  );
};

export default Asssocie;
