import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native'
import Commandes from "../../../../../assets/Accueil/Group157.png"
import Reservation from "../../../../../assets/Accueil/Group158.png"
import { useSelector } from 'react-redux'
const SectionButton = ({ToReservation,ToCommandes}) => {
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
    let jusCont  = IsTab ? 'center' :'flex-start'
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.ButtonBox,{justifyContent:jusCont}]}   onPress={ToCommandes} >
          <Image source={Commandes} />
          <Text style={styles.TextBtn1}>Commandes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.ButtonBoxReservation,{justifyContent:jusCont}]} onPress={ToReservation} >
          <Image source={Reservation} />
          <Text style={styles.TextBtn1}>Réservation</Text>
          <Text>2</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SectionButton