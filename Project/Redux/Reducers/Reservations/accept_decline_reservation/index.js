 

import { LOADING_BYID_POST, POST_RESRBYID_SUCCESS, POST_RESRBYID_FAILED } from "../../../Types/Reservations";

  
const initialState = {
  error: null,
  loadingPost: false,
  result: [],
};

const postReservations = (state = initialState, action) => {
  const {type, payload} = action;
  switch (action.type) {
    case LOADING_BYID_POST:
      return {
        ...state,
        loadingPost: true,
      };
    case POST_RESRBYID_SUCCESS:
      return {
        ...state,
        result: payload,
        loadingPost: false,

      };
    case POST_RESRBYID_FAILED:
      return {
        ...state,
        error: payload,
        loadingPost: false,

      };

    default:
      return state;
  }
};

export default postReservations;
