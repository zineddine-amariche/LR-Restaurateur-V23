import {
  GET_RESR_SUCCESS,
  GET_RESR_FAILED,
  LOADING,
  GET_RESR_DATA_SUCCESS,
  GET_RESR_DATA_FAILED,
  GET_RESR_DATA_LOADING,
} from "../../Types/Reservations";

const initialState = {
  error: null,
  loading: false,
  result_token: "",
  list_reservation: [],
  list_reservation_pending:[],
  summary:[],
  list_error: null,
  loading_list: false,
};

const getReservations = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_RESR_SUCCESS:
      return {
        ...state,
        result_token: payload.data,
        loading: false,
      };
    case GET_RESR_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_RESR_DATA_SUCCESS:
      return {
        ...state,
        list_reservation: payload.other,
        list_reservation_pending: payload.pending,
        summary:payload.summary,
        loading_list: false,
      };
    case GET_RESR_DATA_FAILED:
      return {
        ...state,
        list_error: payload,
        loading_list: false,
      };
    case GET_RESR_DATA_LOADING:
      return {
        ...state,
        loading_list: true,
      };

    default:
      return state;
  }
};

export default getReservations;
