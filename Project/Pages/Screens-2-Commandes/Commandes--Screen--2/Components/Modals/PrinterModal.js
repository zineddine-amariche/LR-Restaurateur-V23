import {View, Animated, Modal, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../constants/theme';

const {width, height} = Dimensions.get('screen');

const PrinterModal = ({visible, children}) => {
  const [ShowModal, setShowModal] = React.useState(visible);

  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    } else {
       setShowModal(false)
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={ShowModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.9,
    height: height * 0.3,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 20,
    position: 'absolute',
    borderColor: COLORS.white,
    borderWidth: 1,
  },
});

export default PrinterModal;
