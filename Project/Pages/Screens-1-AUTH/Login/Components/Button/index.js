import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../../../constants/theme';
import {useSelector} from 'react-redux';

const ButtonLogin = ({handleSubmit, isSubmitting, dipa}) => {
  const backgroundColor = isSubmitting ? COLORS.gray : COLORS.primary;
  const auth = useSelector(state => state.auth);
  const {loading} = auth;

  return (
    <TouchableOpacity
      style={[styles.Button, {backgroundColor}]}
      onPress={!isSubmitting ? handleSubmit : null}>
      {!isSubmitting && <Text style={[styles.TextBtn]}>Connexion</Text>}
      {!isSubmitting ? <ActivityIndicator color={COLORS.primary}  /> : null }
    </TouchableOpacity>
  );
};

export default ButtonLogin;
