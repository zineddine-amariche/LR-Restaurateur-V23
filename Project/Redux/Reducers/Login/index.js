import {
  DELETE_MESSAGES,
  LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../../Types/Login';

const initialState = {
  error: [] || false,
  type: null,
  loading: false,
  isLogged: false,
  user: [],
  Token: null,
  storage: false,
};

const auth = (state = initialState, action) => {
  const {type, payload} = action;
  // console.log('payload Login', payload)
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        user: payload,
        Token: payload?.token,
        type: payload,
        loading: false,
        storage: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: payload,
        isLogged: false,
        type: 'error',
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        user: [],
        Token: null,
        storage: false,
      };
    case DELETE_MESSAGES:
      return {
        ...state,
        error: null,
        type: null,
      };
    default:
      return state;
  }
};

export default auth;

// const initialLoginState = {
//   isLoading: true,
//   login: null,
//   password: null,
//   userToken: null,
// };

// const [loginState, dispatch] = React.useReducer(
//   loginReducer,
//   initialLoginState,
// );

// const loginReducer = (prevState, action) => {
//   switch (action.type) {
//     case 'RETRIEVE_TOKEN':
//       return {
//         ...prevState,
//         userToken: action.tokenId,
//         isLoading: false,
//       };
//     case 'LOGIN':
//       return {
//         ...prevState,
//         login: action.id,
//         password: action.idPass,
//         userToken: action.tokenId,
//         isLoading: false,
//       };
//     case 'LOGOUT':
//       return {
//         ...prevState,
//         login: null,
//         userToken: null,
//         isLoading: false,
//       };
//     case 'REGISTER':
//       return {
//         ...prevState,
//         userName: action.id,
//         password: action.idPass,
//         userToken: action.tokenId,
//         isLoading: false,
//       };
//   }
// };
