import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import RootStackScreen from './RootStackScreens';
import AuthStackScreen from './AuthStackScreens';
const RootStack = createStackNavigator();

const RootLiveRestoApp = () => {
  const auth = useSelector(state => state.auth);
  const {Token, isLogged} = auth;
  return (
    <RootStack.Navigator headerMode="none">
      {isLogged ? (
        <RootStack.Screen
          name="RootStackScreen"
          component={RootStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="AuthStackScreen"
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};
export default RootLiveRestoApp;

