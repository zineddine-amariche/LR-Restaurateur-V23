import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {styles} from '../../Hooks/style';
import printer from '../../../../../../assets/Accueil/Group150.png';
import {COLORS} from '../../../../../../constants/theme';
const SearchButton = ({bleOpend, loading, _scan}) => {
  const Printer = useSelector(state => state.Printer);

  return (
    <View style={{padding:10 , }}>
      {!Printer.loading_printer &&
        bleOpend &&
        (!loading  ? (
          <TouchableOpacity
            onPress={() => {
              if (bleOpend) {
                _scan();
              }
            }}
            style={styles.container_bluetooth_btn}>
            <Image source={printer} />
            <Text
              style={{
                color: bleOpend ? COLORS.primary : COLORS.black,
                fontSize: 17,
                fontWeight: '600',
                paddingLeft: 5,
              }}>
              Recherche des imprimante
            </Text>
          </TouchableOpacity>
        ) : null)}
    </View>
  );
};

export default SearchButton;
