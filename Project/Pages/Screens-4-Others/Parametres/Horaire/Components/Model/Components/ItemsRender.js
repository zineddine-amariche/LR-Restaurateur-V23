import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../Styles'

const ItemsRender = ({item}) => {
  return (
    <View style={styles.boxItemRender}>
      <Text style={styles.TextFlat}>{item}</Text>
    </View>
  )
}

export default ItemsRender