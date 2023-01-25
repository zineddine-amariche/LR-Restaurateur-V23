import {
  CLOSE_COMMANDES,
  COMMANDES_BY_DATES,
  COMMANDES_BY_STATUS,
  COMMANDES_FAILED,
  COMMANDES_OTHERS,
  COMMANDES_SUCCESS,
  COMMANDES_TOCONFIRM,
  DELETE_ORDERS,
  DES_REFRESH,
  GET_ARTICLES,
  LOADING,
  OPEN_COMMANDES,
  ORDER_BYID_SUCCESS,
  ORDER_SUCCESS,
  REFRESH,
  STATUS_ACTIVE,
  STOP_COMMANDES_LOADING,
  SUCCESS,
} from '../../Types/Commandes';

const initialState = {
  error: [] || false,
  loading: true,
  Commandes: [],
  typeC: null,
  toComfirm: [],
  others: [],
  totaleQuantity: 0,
  success: [] || null,
  loading_btn: false,
  refresh: false,
  orders: [],
  arr: [],
  status_active: 'Toutes',
  isOpen: true,
  idOrder: '',
  ordersById: [],
  productData:[]
};

const Commandes = (state = initialState, action) => {
  const {type, payload} = action;
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        loading_btn: true,
      };
    case COMMANDES_SUCCESS:
      return {
        ...state,
        Commandes: payload,
        loading: false,
        typeC: 'success',
      };
    case ORDER_SUCCESS:
      return {
        ...state,
        orders: payload.products,
        idOrder: payload.id,
        loading: false,
        typeC: 'success',
        productData:payload
      };
    case ORDER_BYID_SUCCESS:
      return {
        ...state,
        ordersById: payload.products,
        idOrder: payload.id,
        loading: false,
        typeC: 'success',
      };
    case DELETE_ORDERS:
      return {
        orders: [],
        loading: false,
      };
    case COMMANDES_TOCONFIRM:
      return {
        ...state,
        toComfirm: payload,
      };
    case COMMANDES_OTHERS:
      return {
        ...state,
        others: payload,
      };
    case COMMANDES_FAILED:
      return {
        ...state,
        error: payload,
        isLogged: false,
        typeC: 'error',
        loading: false,
        message: payload,
      };
    case SUCCESS:
      return {
        ...state,
        success: payload,
        loading_btn: false,
      };
    case GET_ARTICLES:
      return {
        ...state,
        totaleQuantity: payload,
      };
    case REFRESH:
      return {
        ...state,
        refresh: true,
      };
    case DES_REFRESH:
      return {
        ...state,
        refresh: false,
      };
    case COMMANDES_BY_DATES:
      return {
        ...state,
        Commandes: payload,
      };
    case COMMANDES_BY_STATUS:
      return {
        ...state,
        arr: payload,
      };
    case STATUS_ACTIVE:
      return {
        ...state,
        status_active: payload,
      };
    case CLOSE_COMMANDES:
      return {
        ...state,
        isOpen: false,
      };
    case OPEN_COMMANDES:
      return {
        ...state,
        isOpen: true,
      };
    case STOP_COMMANDES_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default Commandes;
