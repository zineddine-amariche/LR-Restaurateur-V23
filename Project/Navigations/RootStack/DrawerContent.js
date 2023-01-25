import React, {useEffect, useState, useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer, Text, Switch} from 'react-native-paper';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import jour from '../../assets/Drawer/Calendrier.png';
import terminer from '../../assets/Drawer/Terminée.png';
import params from '../../assets/Drawer/Parametres.png';
import deconner from '../../assets/Drawer/Deconnexion.png';
import aide from '../../assets/Drawer/Aide.png';
import { LOGOUT } from '../../Redux/Types/Login';
import { async } from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function DrawerContent(props) {

  const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = openData ? toggleOpen : toggleOff;
  const auth = useSelector(state => state.auth);
  // console.log('user', auth.user.title);


  let key =[
    'password',
    'login',
  ]





const dispatch = useDispatch()
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={{
                  uri: auth.user.img,
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{auth.user.title}</Title>
                <Caption
                  style={[
                    styles.caption,
                    {width: '80%', lineHeight: 18, color: '#000'},
                  ]}>
                  {auth.user.subtitle}
                </Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => <Image source={jour} />}
              label="Commandes du jour "
              onPress={() => {
                props.navigation.navigate('Commandes');
              }}
            />

            <DrawerItem
              icon={({color, size}) => <Image source={terminer} />}
              labelStyle={{color: '#000'}}
              label="Commandes terminées"
              style={{color: '#fff'}}
              onPress={() => {
                props.navigation.navigate('CommandesTerminer');
              }}
            />

            <DrawerItem
              icon={({color, size}) => <Image source={params} />}
              label="Paramètres"
              onPress={() => {
                props.navigation.navigate('Parametre');
              }}
            />

            <DrawerItem
              icon={({color, size}) => <Image source={aide} />}
              label="Besoin d’aide ? "
              onPress={() => {
                props.navigation.navigate('Parametre');
              }}
            />
          </Drawer.Section>
          {/* 0491404040 */}

  
        </View>
      </DrawerContentScrollView>
      <View style={{alignSelf: "center"}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  color: '#000',
                }}>
                Contactez nous :
              </Text>
              <TouchableOpacity>
                <View
                  style={{marginLeft: 10, fontWeight: 'bold', fontSize: 17}}>
                  <Text
                    style={{
                      color: '#087',
                      fontSize: 16,
                      fontWeight: 'bold',
                      textDecorationStyle: 'solid',
                      textDecorationLine: 'underline',
                    }}>
                    0491404040
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      <Drawer.Section name="Preferences">
        <View style={styles.preferences}>
          <Text style={styles.titleH1}>Fermer Le Restaurant</Text>
          <Switch
            trackColor={{false: '#ccc', true: '#000'}}
            thumbColor={isEnabled ? '#087' : '#000'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              // toggleOff();
              props.navigation.navigate('Commandes');
            }}
            value={isEnabled}
          />
        </View>
      </Drawer.Section>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Image source={deconner} />
          )}
          label="Se deconnecter"
          onPress={async() => {
            // signOut();
           dispatch({type :LOGOUT}) 
           await AsyncStorage.multiRemove(key)
          }}
        />
      </Drawer.Section>
    </View>
  );
}

{
  /* <DrawerItem
icon={({ color, size }) => (
    <Icon
        name="watch-later"
        color={color}
        size={size}
    />
)}
label="Horaire D'ouvertures"
onPress={() => { props.navigation.navigate('HoraireScreen') }}
/> */
}
{
  /* <DrawerItem
icon={({ color, size }) => (
    <Icon
        name="calendar-today"
        color={color}
        size={size}
    />
)}
label="Fermetures Exceptionelles"
onPress={() => { props.navigation.navigate('FermetureScreen') }}
/> */
}

{
  /* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="help"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Aide"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        /> */
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    alignSelf:'center',
    backgroundColor: '#fff',
    width:'100%'
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#000',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
    marginBottom: 10,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  preferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf:'center'
  },
  titleH1: {
    color: '#000',
    fontWeight: 'bold',
    paddingRight:20
  },
});
