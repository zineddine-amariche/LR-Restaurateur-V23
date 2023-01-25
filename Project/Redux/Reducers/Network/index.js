import {
  CONNECTION_FAILED,
  CONNECTION_SUCCESS,
  LOADING_NETWORK,
} from '../../Types/NEtwork';

const initialState = {
  Connection: null,
  loading: false,
  message: null,
  typeConnect: null,
};

const Connect = (state = initialState, action) => {
  const {type, payload} = action;
  switch (action.type) {
    case LOADING_NETWORK:
      return {
        ...state,
        loading: true,
      };
    case CONNECTION_SUCCESS:
      return {
        ...state,
        Connection: true,
        loading: false,
        message: payload,
        typeConnect: 'succes',
      };
    case CONNECTION_FAILED:
      return {
        ...state,
        Connection: false,
        loading: false,
        message: payload,
        typeConnect: 'error',
      };

    default:
      return state;
  }
};

export default Connect;
