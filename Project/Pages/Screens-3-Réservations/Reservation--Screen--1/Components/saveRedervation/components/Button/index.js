import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../../../../../constants/theme';


const ButtonValidate = ({handleSubmit, isSubmitting}) => {
  const backgroundColor = isSubmitting ? COLORS.gray : COLORS.primary;
 

  return (
    <TouchableOpacity
      style={[styles.Button, {backgroundColor}]}
      onPress={!isSubmitting ? handleSubmit : null}>
      {!isSubmitting && <Text style={[styles.TextBtn]}>Valider</Text>}
      {!isSubmitting ? <ActivityIndicator color={COLORS.primary}  /> : null }
    </TouchableOpacity>
  );
};

export default ButtonValidate;
