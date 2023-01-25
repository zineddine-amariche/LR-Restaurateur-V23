import {
  GET_RESR_BYDATE_FAILED,
  GET_RESR_BYDATE_SUCCESS,
  GET_RESR_DATA_FAILED,
  GET_RESR_DATA_LOADING,
  GET_RESR_DATA_SUCCESS,
  GET_RESR_FAILED,
  GET_RESR_SUCCESS,
  IS_DATE_PIKER_OPEND,
  LOADING,
  SELECTED_DATE,
} from '../../../Types/Reservations';

const initialState = {
  error: null,
  loading: false,
  result_token: '',
  list_reservation: [],
  list_reservation_pending: [],
  summary: [],
  list_error: null,
  loading_list: false,
  list_reservation_bydate: [],
  list_reservation_pending__bydate: [],
  forDate:'',
  isPikerOpend:false
};

const getReservationsByDate = (state = initialState, action) => {
  const {type, payload} = action;
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
        summary: payload.summary,
        loading_list: false,
      };
    case GET_RESR_DATA_FAILED:
      return {
        ...state,
        list_error: payload,
        loading_list: false,
      };
    case GET_RESR_BYDATE_SUCCESS:
      return {
        ...state,
        list_reservation_bydate: payload.other,
        list_reservation_pending__bydate: payload.pending,
        summary: payload.summary,
        loading_list: false,
      };
    case GET_RESR_BYDATE_FAILED:
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
    case SELECTED_DATE:
      return {
        ...state,
        forDate: payload,
      };
      case IS_DATE_PIKER_OPEND:
        return {
          ...state,
          isPikerOpend: payload,
        };
    default:
      return state;
  }
};

export default getReservationsByDate;
