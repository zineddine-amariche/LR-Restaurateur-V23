import {
  ADD_SECONDS,
  CHANGE_STYLES,
  DELETE_SECONDS,
  GET_SECOND_LEFT,
  IS_TIMER_ACTIVE,
} from '../../Types/Timer';

const initialState = {
  secondLeft: null,
  isTimerActive: false,
  second_selected: null,
  changeStyles: false,
  isModelOpen: false,
};

const TimerSlice = (state = initialState, action) => {
  const {type, payload} = action;
  switch (action.type) {
    case ADD_SECONDS:
      return {
        ...state,
        second_selected: payload,
      };
    case DELETE_SECONDS:
      return {
        ...state,
        secondLeft: null,
      };
    case IS_TIMER_ACTIVE:
      return {
        ...state,
        isTimerActive: payload,
      };
    case GET_SECOND_LEFT:
      return {
        ...state,
        secondLeft: payload,
      };
    case CHANGE_STYLES:
      return {
        ...state,
        changeStyles: payload,
      };
    default:
      return state;
  }
};

export default TimerSlice;
