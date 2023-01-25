import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerId: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  TextId: {
    fontSize: 50,
    fontWeight: '700',
  },
  ContainerBodyTab: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ContainerBody:{

  },
  BoxOrders: {
    width: '100%',
    alignSelf: 'center',
    height: '40%',
    backgroundColor: '#fff',
    flex: 1,
  },
  BoxOrdersTab:{
    width: '60%',
    alignSelf: 'center',
    height: '40%',
    backgroundColor: '#fff',
    flex: 1,
  },
  BottomItems: {
   
  },
});
