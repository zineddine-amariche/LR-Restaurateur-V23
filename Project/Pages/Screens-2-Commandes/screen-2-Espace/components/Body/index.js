import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TextImg from '../../../../../assets/Accueil/text.png';
import TextImg1 from '../../../../../assets/Accueil/Frame1.png';
import TextImg2 from '../../../../../assets/Accueil/Frame2.png';
import Eclips from '../../../../../assets/Accueil/Ellipse.png';
import ImageText from '../../../../../assets/Accueil/imgText.png';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
const Body = ({navigation}) => {
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  // console.log('IsTab', IsTab);
  const toCommandes = () => {
    navigation.navigate('Commandes');
  };
  const toResrvation = () => {
    navigation.navigate('Reservation');
  };
  let CustomWidth = IsTab ? 370 : 330;
  let CustomHeight = IsTab ? 159 : 159;
  return (
    <View style={[styles.container]}>
      <View style={styles.FirstBox}>
        {!IsTab ? <Image source={TextImg} /> : <Image source={ImageText} />}
      </View>
      <View style={{flexDirection: IsTab ? 'row' : 'column'}}>
        <TouchableOpacity
          style={[
            styles.secondBox,
            {
              width: CustomWidth,
              height: CustomHeight,
              marginRight: IsTab ? 50 : 0,
            },
          ]}
          onPress={toCommandes}>
          <View style={styles.abso}>
            <ImageBackground source={Eclips} style={styles.bacGround}>
              <Text style={styles.TextEclips}>2</Text>
            </ImageBackground>
          </View>
          <Image source={TextImg1} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.thirdBox, {width: CustomWidth, height: CustomHeight}]}
          onPress={toResrvation}>
          <View style={styles.abso}>
            <ImageBackground source={Eclips} style={styles.bacGround}>
              <Text style={styles.TextEclips}>2</Text>
            </ImageBackground>
          </View>
          <Image source={TextImg2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Body;
