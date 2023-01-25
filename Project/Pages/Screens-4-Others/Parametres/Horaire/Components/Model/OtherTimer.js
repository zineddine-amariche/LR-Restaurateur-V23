import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ModalSelect from './UseModelTimer';
import {styles} from './Styles';
import imgClose from '../../../../../../assets/Info/x(1).png';
import imgBody from '../../../../../../assets/models/Group214.png';
import {COLORS} from '../../../../../../constants/theme';
import {Switch} from 'react-native-paper';
import {FlatList} from 'react-native';
import ItemsRender from './Components/ItemsRender';

const SelectHoraire = ({visible, ActiveTimer, data, timerOn, close,Minutes}) => {
  return (
    <ModalSelect visible={visible}>
      <View style={styles.ConatinerClose}>
        <TouchableOpacity onPress={close}>
          <Image source={imgClose} color={'#078'} size={35} />
        </TouchableOpacity>
      </View>

      <View style={styles.rowBoxes}>

      <View style={styles.row} >
        <View style={styles.row}>
          <Text style={styles.TextBtn}>De</Text>
          <View style={{height: 40, width: 50}}>
            <FlatList
              key={'_#'}
              horizontal={false}
              data={data}
              renderItem={({item, index}) => {
                return <ItemsRender item={item} />;
              }}
              contentContainerStyle={styles.wrapper}
              keyExtractor={item => '_#' + item}
              scrollEnabled
            />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.TextBtn}>h</Text>
          <View style={{height: 40, width: 50}}>
            <FlatList
              key={'#'}
              horizontal={false}
              data={Minutes}
              renderItem={({item, index}) => {
                return <ItemsRender item={item} />;
              }}
              contentContainerStyle={styles.wrapper}
              keyExtractor={item => '#' + item}
              scrollEnabled
            />
          </View>
        </View>
      </View>
      <View style={styles.row} >
        <View style={styles.row}>
          <Text style={styles.TextBtn}>à</Text>
          <View style={{height: 40, width: 50}}>
            <FlatList
              key={'__'}
              horizontal={false}
              data={data}
              renderItem={({item, index}) => {
                return <ItemsRender item={item} />;
              }}
              contentContainerStyle={styles.wrapper}
              keyExtractor={item => '__' + item}
              scrollEnabled
            />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.TextBtn}>h</Text>
          <View style={{height: 40, width: 50}}>
            <FlatList
              key={'_'}
              horizontal={false}
              data={Minutes}
              renderItem={({item, index}) => {
                return <ItemsRender item={item} />;
              }}
              contentContainerStyle={styles.wrapper}
              keyExtractor={item => '_' + item}
              scrollEnabled
            />
          </View>
        </View>
      </View>
      </View>


      <View style={styles.BoxFermer}>
        <Switch />
        <Text style={styles.TextTitle}>Le restaurant est fermé</Text>
      </View>

      <View style={styles.ButtonsFooter}>
        <TouchableOpacity
          style={[
            styles.ButtonDiscar,
            {borderWidth: 1, borderColor: COLORS.primary},
          ]}
          onPress={close}>
          <Text style={[styles.TextButtonTouch, {color: COLORS.primary}]}>
            Annuler
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonValid}
          onPress={() => {
            close();
          }}>
          <Text style={styles.TextButtonTouch}>Valider</Text>
        </TouchableOpacity>
      </View>
    </ModalSelect>
  );
};

export default SelectHoraire;
