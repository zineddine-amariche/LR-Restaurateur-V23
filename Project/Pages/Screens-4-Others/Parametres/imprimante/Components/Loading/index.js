import {View, Text} from 'react-native';
import React from 'react';
import { COLORS } from '../../../../../../constants/theme';

const Connection = () => {
  return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex:1,
          padding:30

        }}>
        <Text style={{color: COLORS.primary, fontWeight: '700'}}>
          Connection ...
        </Text>
      </View>
  );
};

export default Connection;
