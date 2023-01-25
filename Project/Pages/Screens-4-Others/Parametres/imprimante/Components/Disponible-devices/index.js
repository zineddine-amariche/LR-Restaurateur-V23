import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import React from 'react';
import {UsePrinter} from '../../Hooks/UsePrinter';
import {COLORS} from '../../../../../../constants/theme';
import {styles} from './styles';

const Disponible = ({foundDs, loading, _renderRow}) => {
  // console.log('foundDs', foundDs) 
  return (
    <View style={styles.Dis}>
      <View style={styles.container_Appareils_Disponible}>
        <Text style={styles.text_appareils_dispo}>Appareils Disponible :</Text>
        <Text style={styles.scondText_appareil_dispo}>
          (appuyez pour vous connecter)
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
          }}>
       {  foundDs&& <ScrollView>{_renderRow(foundDs)}</ScrollView>}
        </View>
      )}
    </View>
  );
};

export default Disponible;
