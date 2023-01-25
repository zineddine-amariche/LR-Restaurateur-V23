 

import { GET_RESRBYID_FAILED, GET_RESRBYID_SUCCESS, LOADING_BYID } from "../../../Types/Reservations";

  
  const initialState = {
    error: null,
    isLoading: false,
    result_ById: [],
  };
  
  const getReservationsById = (state = initialState, action) => {
    const {type, payload} = action;
    switch (action.type) {
      case LOADING_BYID:
        return {
          ...state,
          isLoading: true,
        };
      case GET_RESRBYID_SUCCESS:
        return {
          ...state,
          result_ById: payload,
          isLoading: false,

        };
      case GET_RESRBYID_FAILED:
        return {
          ...state,
          error: payload,
          isLoading: false,

        };
 
      default:
        return state;
    }
  };
  
  export default getReservationsById;
  