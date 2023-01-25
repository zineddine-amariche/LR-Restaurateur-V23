
import React, {useEffect, useRef, useState} from 'react';

import {Animated, Button, Text, View,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {COLORS} from '../../constants/theme';
import styles from './styles';
import info from '../../assets/info2.png'
const Message = props => {
  const opacity = useRef(new Animated.Value(0)).current;
  const backgroundColor =
    props.type === 'error' ? COLORS.redTranspaent : COLORS.green;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.onHide();
    });
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.messages,
        {
          opacity,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
          backgroundColor,
        },
      ]}>
      <Text style={styles.Text}>{props.message}</Text>
      <Image  source={info} style={{height:18 , width:18}}  />
    </Animated.View>
  );
};

export default ({error, type}) => {
  const [messages, setMessages] = useState();

  return (
    <>
       <View
        style={{
          position: 'absolute',
          top: -5,
          left: 0,
          right: 0,
        }}>
        {Object.keys(error)?.map(message => (
          <Message
            key={message}
            message={error}
            type={type}
            onHide={() => {
              setMessages(messages =>
                messages?.filter(currentMessage => currentMessage !== message),
              );
            }}
          />
        ))}
      </View>
     
    </>
  );
};

{
  /* <Button
          title="Add message"
          onPress={() => {
            const message = getRandomMessage();
            setMessages([...messages, message]);
          }}
        /> */
}

//   const getRandomMessage = () => {
//     const number = Math.trunc(Math.random() * 10000);
//     return 'Random message ' + number;
//   };

// import { View, Text, Animated } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'

// const messagesC = (props)=>{

// }
// const ToastMessages = () => {
//     const [messages, setmessages] = useState([])
//     const opacity = useRef(new Animated.Value(0)).current
//     useEffect(() => {
//      Animated.sequence([
//          Animated.timing(opacity,{
//              toValue:1,
//              duration:500,
//              useNativeDriver:true
//          }),
//          Animated.delay(2000),
//          Animated.timing(opacity,{
//              toValue:0,
//              duration:500,
//              useNativeDriver:true
//          })
//      ]).start()
//     }, [])
//   return (

//     <Animated.View style={[styles.messages,{opacity,transform:[{
//         translateY:opacity.interpolate({
//             inputRange:[0,1],
//             outputRange:[-20,0]
//         })
//     }]}]}>

//         {messages.map((m)=>{
//             return (
//                 <Text style={styles.Text}>styles</Text>

//             )
//         })}

//     </Animated.View>
//   )
// }

// export default ToastMessages
