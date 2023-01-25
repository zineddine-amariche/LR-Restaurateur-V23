import {View, Text} from 'react-native';
import React from 'react';
import ToastMessages from '../../../../../Components/ToastMessages';

const ChildrenCop = ({error,type}) => {
  // {error,type}

    // console.log('error,type----------------------------', error,type)

  return (
    <View
      style={{
        height: 70,
        width:'100%',
        backgroundColor: "transparent",
        position: "absolute",
        zIndex:15,
        top:-330,
        elevation:0
      }}>
              {error && <ToastMessages type={type} error={error} />}

    </View>
  );
};

export default ChildrenCop;
