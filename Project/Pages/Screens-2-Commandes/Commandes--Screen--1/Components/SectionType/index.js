import {View, Text, FlatList, Image} from 'react-native';
import React, { useEffect } from 'react';
import {styles} from './Styles';
import {useCommandes} from '../../Hooks/useCommandes';
import {useSelector} from 'react-redux';
import FilterSelect from './Components/Select-By-Item';
import RenderItem from './Components/ItemRenderFlatList';
import {ScrollView} from 'react-native-gesture-handler';
import NoCommandes from '../../../../../Components/NoCommandes';
import CardLoader from '../../../../../Components/SelektonCards';

const SectionType = ({navigation}) => {
  const {mergedArray, status, textButtonFiltre, setStatus, width,GetProducts} =
    useCommandes();

  const Commandes = useSelector(state => state.Commandes);
  const {arr} = Commandes;

  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;

  // useEffect(() => {
  //   GetProducts()
  // }, [])

  return (
    <View style={styles.container}>
      <FilterSelect setStatus={setStatus} textButtonFiltre={textButtonFiltre} />
      <ScrollView>
        <View style={[styles.FlatList, {width: width}]}>

          {mergedArray.length ? (
            status === 'Toutes' ? (
              IsTab ? (
                <FlatList
                  key={'_'}
                  numColumns={2}
                  data={mergedArray}
                  renderItem={({item, index}) => {
                    return <RenderItem item={item} navigation={navigation} />;
                  }}
                  contentContainerStyle={[styles.wrapper, {width: width - 10}]}
                  keyExtractor={item => '_' + item.id}
                  columnWrapperStyle={{justifyContent: 'center'}}
                />
              ) : (
                <FlatList
                  key={'_'}
                  numColumns={1}
                  data={mergedArray}
                  renderItem={({item, index}) => {
                    return <RenderItem item={item} navigation={navigation} />;
                  }}
                  contentContainerStyle={[styles.wrapper, {width: width - 10,alignItems:'center'}]}
                  keyExtractor={item => '_' + item.id}
                />
              )
            ) : arr.length ? (
              IsTab ? (
                <FlatList
                  key={'#'}
                  data={arr}
                  numColumns={2}
                  renderItem={({item, index}) => {
                    return <RenderItem item={item} navigation={navigation} />;
                  }}
                  contentContainerStyle={[styles.wrapper2, {width: width - 10}]}
                  keyExtractor={item => '#' + item.id}
                  columnWrapperStyle={{justifyContent: 'center'}}
                />
              ) : (
                <FlatList
                  key={'#'}
                  data={arr}
                  numColumns={1}
                  renderItem={({item, index}) => {
                    return <RenderItem item={item} navigation={navigation} />;
                  }}
                  contentContainerStyle={[styles.wrapper2, {width: width - 10,alignItems:'center'}]}
                  keyExtractor={item => '#' + item.id}
                />
              )
            ) : (
              <NoCommandes />
            )
          ) : (
            <CardLoader />

          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SectionType;
