import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useCommandes} from '../../../../Hooks/useCommandes';
import CommandesImg from '../../../../../../../assets/models/VectorDown.png';
import SelectDropdown from 'react-native-select-dropdown';
import Icona from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../../../../../../constants/theme';
import {STATUS_ACTIVE} from '../../../../../../../Redux/Types/Commandes';

const FilterSelect = ({textButtonFiltre, setStatus}) => {
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  const Disp = IsTab ? 'flex-start' : 'space-between';
  const custWidh = IsTab ? '18%' : 'auto';
  const dispatch = useDispatch();
const paddingCust = IsTab ? 0 : 15
  return (
    <View style={[styles.trie, {justifyContent: Disp,paddingHorizontal:paddingCust}]}>
      <View style={[styles.button, {width: custWidh}]}>
        <Text style={styles.Text}>Trier Par :</Text>
      </View>
      <View
        style={{
          width: IsTab ? '30%' : '60%',
          overflow: 'hidden',
          position: 'relative',
        }}>
        <View
          style={{
            position: 'absolute',
            right: 10,
            top: '45%',
            zIndex: 60,
          }}>
          <Image source={CommandesImg} />
        </View>

        <SelectDropdown
          label="myLIST"
          defaultValue="Toutes"
          dropdownStyle={{
            backgroundColor: COLORS.gray,
            marginVertical: 5,
          }}
          showArrowIcon={true}
          rowStyle={{
            backgroundColor: '#fff',
            borderColor: COLORS.white,
            borderWidth: 1,
            borderRadius: 1,
            marginVertical: 0.5,
            height: 35,
          }}
          ArrowDownIconComponent={({style}) => (
            <Icona name="close" style={style} />
          )}
          rowTextStyle={{color: COLORS.black}}
          buttonStyle={{
            backgroundColor: COLORS.white,
            height: 40,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 1,
            width: '100%',
            borderRadius: 4,
          }}
          buttonTextStyle={{color: COLORS.black}}
          data={textButtonFiltre}
          onSelect={(selectedItem, index) => {
            setStatus(selectedItem);
            dispatch({type: STATUS_ACTIVE, payload: selectedItem});
            // filterData()
          }}
        />
      </View>
    </View>
  );
};

export default FilterSelect;
