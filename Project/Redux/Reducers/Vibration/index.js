import { START_VIB, STOP_VIB, VIB_ERROR } from "../../Types/Vibration";

const initialState = {
  error: null,
  vibreur: false,
};

const Vibration = (state = initialState, action) => {
  const {type, payload} = action;
  switch (action.type) {
    case START_VIB:
      return {
        ...state,
        vibreur: true,
      };
    case STOP_VIB:
      return {
        ...state,
        vibreur: false,
      };
    case VIB_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default Vibration;
