import { GET_SECOND_LEFT, IS_TIMER_ACTIVE} from '../../Types/Timer';

export const startTimer = (dispatch, payload) => {
  dispatch({type: IS_TIMER_ACTIVE, payload});
};


export const getSecondLeft = (dispatch, payload) => {
  dispatch({type: GET_SECOND_LEFT, payload});
};