import {
  DATE_DEBUT,
  DATE_DELETE,
  DATE_FIN,
  DELETE_DEBUT,
  DELETE_FIN,
  LOADING_DATE,
} from '../../Types/dates';

const initialState = {
  error: null,
  loading: false,
  debut: '',
  fin: '',
};

const Dates = (state = initialState, action) => {
  const {type, payload} = action;
  switch (action.type) {
    case LOADING_DATE:
      return {
        ...state,
        loading: true,
      };
    case DATE_FIN:
      return {
        ...state,
        fin: payload,
      };
    case DATE_DEBUT:
      return {
        ...state,
        debut: payload,
      };
    case DATE_DELETE:
      return {
        ...state,
        debut: '',
        fin: '',
      };
    case DELETE_DEBUT:
      return {
        ...state,
        debut: '',
      };
    case DELETE_FIN:
      return {
        ...state,
        fin: '',
      };
    default:
      return state;
  }
};

export default Dates;
