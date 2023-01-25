import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Commandes from './DrawerContent';
import SettingsScreen from "./SettingsScreen"
import ProfileScreen from './ProfileScreen';
import { View } from 'native-base';

const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => (

  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"

  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Accueil',
        tabBarColor: '#087',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={CommandeDuJour}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#aac840',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#078',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Paramétres',
        tabBarColor: '#087',
        tabBarIcon: ({ color }) => (
          <Icon name="settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (

  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#087',
    },
    headerTintColor: '#333',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>

    <HomeStack.Screen name="Home" component={Commandes} options={{
      title: '',
      headerLeft: () => (
        <View>
          <Icon.Button name="ios-menu" color="#000" size={29} backgroundColor="#087" onPress={() => navigation.toggleDrawer()}></Icon.Button>
        </View>
      ),

    }} />
    </HomeStack.Navigator>
);

