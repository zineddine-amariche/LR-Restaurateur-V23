import DeviceInfo from 'react-native-device-info';

import { GET_TYPE_DEVICE } from '../../Types/IsTab';

export const isTablet = (dispatch) => {
  let isTablet = DeviceInfo.isTablet();
  // console.log('isTablet', isTablet);
  dispatch({type: GET_TYPE_DEVICE, payload: isTablet});
};
