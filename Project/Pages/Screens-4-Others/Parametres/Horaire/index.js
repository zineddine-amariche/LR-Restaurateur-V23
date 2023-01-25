import React, {useState} from 'react';

import {styles} from './Components/Hooks/styles';

import {View, Text, StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import HeaderPrinter from '../imprimante/Components/Header';
import DaysList from './Components/List';
import {COLORS} from '../../../../constants/theme';
import Header from '../../../../Components/Headers/header-1-Primary';
import {UseHoraire} from './Components/Hooks/UseHoraire';
import SelectHoraire from './Components/Model/OtherTimer';

const Horaires = ({navigation: {goBack}, navigation}) => {
  const {horaireData, visibleMod, open, close, data,Minutes} = UseHoraire();
  const [Visible, setVisible] = useState(false);
  const openMenu = () => {
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.gray} barStyle="light-content" />
      <Header
        navigation={navigation}
        Color={COLORS.gray}
        openMenu={openMenu}
        Visible={Visible}
        closeMenu={closeMenu}
      />

      <View style={{padding: 20, backgroundColor: '#fff'}}>
        <HeaderPrinter goBack={goBack} />

        <View style={styles.Table}>
          <View style={styles.Midi}></View>
          <View style={styles.Midi}>
            <Text
              style={{fontSize: 17, fontWeight: 'bold', color: COLORS.primary}}>
              Midi
            </Text>
          </View>
          <View style={styles.Midi}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                paddingRight: 25,
                color: COLORS.primary,
              }}>
              Soir
            </Text>
          </View>
        </View>
          <FlatList
            data={horaireData.day}
            renderItem={({item, index}) => (
              <DaysList days={item} index={index} open={open} />
            )}
            contentContainerStyle={styles.wrapper}
          />
      </View>

      <SelectHoraire visible={visibleMod} close={close} data={data} Minutes={Minutes}/>
    </View>
  );
};
export default Horaires;

{
  /* <ModelContainer
transparent
visible={visible}
>
<View style={{justifyContent:'space-evenly',backgroundColor:"#fff",height:height*.28}}>


    <View style={{ alignItems: 'center' }}>
        <Text style={[styles.titleH5, {}]}>
            Choisissez L'heure
        </Text>

    </View>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 20 }}>
        <DatePicker
        date={debu}
        mode="time"
        onDateChange={setHoraireData.debutj}

        style={{ alignSelf: 'center', }}
    />
        <TextInput
            placeholder={"Entrer l'heur debut "}
            keyboardType="numeric"
            onChangeText={text => setHoraireData({
               ...horaireData ,
               debutj:{text}
            })}

        />
        <TextInput
            placeholder={"Entrer l'heur fin "}
            keyboardType="numeric"

        />
    </View>

    <TouchableOpacity style={[styles.btnPiker,]}
        onPress={() => setVisible(false)}>
        <Text style={[{ textAlign: "center", fontSize: 18, fontWeight: 'bold', color: '#fff' }]}>
            Modifier
        </Text>
    </TouchableOpacity>
</View>

</ModelContainer> */
}

{
  /* <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          bottom: 25,
          marginHorizontal: 20,
          height: 50,
          width: 50,
          backgroundColor: '#fff',
          borderColor: COLORS.primary,
          borderWidth: 1,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Accueil');
        }}>
        <View>
          <Icon name="ios-home" color={COLORS.primary} size={32} />
        </View>
      </TouchableOpacity> */
}
