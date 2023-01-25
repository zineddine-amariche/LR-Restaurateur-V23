import {START_VIB, STOP_VIB} from '../../Types/Vibration';

export const StartVib = () => {
  return {
    type: START_VIB,
  };
};

export const StoptVib = () => {
  return {
    type: STOP_VIB,
  };
};
