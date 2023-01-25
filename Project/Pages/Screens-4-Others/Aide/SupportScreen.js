// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// // import HeaderAPP from '../../../Components/HeaderAPP/HeaderAPP';
// import Swiper from "react-native-swiper"
// import { styles } from './styles';
// const { width, height } = Dimensions.get('screen')

// const SupportScreen = ({ navigation: { goBack }, navigation }) => {
//   const list = [
//     {
//       title: 'Retarder la commande',
//       icon: 'calendar-times-o'
//     },
//     {
//       title: 'Ajustement du prix',
//       icon: 'eur'
//     },
//     {
//       title: 'Contacter le client',
//       icon: 'user'
//     },
//     {
//       title: 'Annuler la commande',
//       icon: 'angle-right'
//     },

//   ]
//   return (

//     <View>


//       <View style={{ height: height * .9, backgroundColor: '#fff' }}>

       
//         <HeaderAPP  title={" Live Resto Aide"} navigation={navigation}/>

//         <View style={styles.sliderContainer}>

//           <Swiper autoplay horizental={false} height={200} activeDotColor="#5dbca3" >
//             <View style={styles.slide}>
//               <Image
//                 source={require('../../assets/banners/food-banner1.jpg')}
//                 resizeMode='cover'
//                 style={styles.sliderImage}
//               />

//             </View>
//             <View style={styles.slide}>
//               <Image
//                 source={require('../../assets/banners/food-banner2.jpg')}
//                 resizeMode='cover'
//                 style={styles.sliderImage}
//               />
//             </View>
//             <View style={styles.slide}>
//               <Image
//                 source={require('../../assets/banners/food-banner3.jpg')}
//                 resizeMode='cover'
//                 style={styles.sliderImage}
//               />
//             </View>

//           </Swiper>


//         </View>



//         <View>
//           <TouchableOpacity style={styles.containerRowTitle}>
//             <Icon name="md-restaurant" color={'#087'} size={34} />
//             <Text style={styles.bigtitre}>Live Resto</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{ width: '98%', marginLeft: 7, padding: 10 }}>
//           <Text style={styles.bigtitre}> Conseils et réponses de l'équipe <Text style={{ color: '#087' }}> Live Resto</Text> </Text>
//         </View>
//         <View
//           style={{
//             height: 50,
//             width: '80%',
//             backgroundColor: '#ccc',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignSelf: 'center',
//             marginTop: 10,

//           }}>
//           <View style={{ margin: 10, marginLeft: 20 }}>
//             <Icon name="md-search" color={'#078'} size={24} />
//           </View>

//           <TextInput

//             placeholder={'recherche des repense'}
//             style={styles.textInput}
//             placeholderTextColor='#000'


//           />
//         </View>









//       </View>

//       <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: -60 }}>
//         <View style={styles.containerRowBig}>
//           <TouchableOpacity style={styles.containerRow}>
//             <Icon name="ios-open-outline" color={'#078'} size={24} />
//             <Text style={styles.titleH3}>Aller sur Resto Live</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//     </View>

//   );
// };

// export default SupportScreen;

