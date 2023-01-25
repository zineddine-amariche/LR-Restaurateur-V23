import axios from 'axios';
import {
  DELETE_MESSAGES,
  LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../../Types/Login';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const Logout = async dispatch => {
  dispatch({type: LOGOUT});
  AsyncStorage.setItem('login', ""),
  AsyncStorage.setItem('password', "")
};

export const dispatchLogin = async (dispatch, configHead, values) => {
  // let url = `https://${process.env.BASE_URL}/authenticate`;
  let url = 'https://dev500.live-resto.fr/apiv2e/establishments/authenticate';
  dispatch({type: LOADING});
  await axios
    .post(url, values, configHead)
    .then(res => {
      let Data = res.data.establishment

      return (
        res,
        console.log('res1'),

        dispatch({type: LOGIN_SUCCESS, payload: Data}),
        dispatch({type: DELETE_MESSAGES}),
        AsyncStorage.setItem('login', values.login),
        AsyncStorage.setItem('password', values.password)
      );
    })
    .catch(error => {
      return (
        error,
        dispatch({type: LOGIN_FAILED, payload: 'échec de connexion !'}),
        console.log('error.message', error)
      );
    });
};

export const dispatchLoginStorage = async (
  dispatch,
  configHead,
  userLogin,
  userPassword,
) => {
  dispatch({type: LOADING});
  // console.log('start')

  let url = 'https://dev500.live-resto.fr/apiv2e/establishments/authenticate';
  let body = JSON.stringify({
    login: userLogin,
    password: userPassword,
  });
  await axios
    .post(url, body, configHead)

    .then(res => {
      // console.log(
      //   'DATA ||||||||||||| 2 ',
      //   res.data.establishment,
      // );
      let Data = res.data.establishment;

      return (
        Data,
        dispatch({type: LOGIN_SUCCESS, payload: Data}),
        dispatch({type: DELETE_MESSAGES})
        // console.log('resAsync', Data)
      );
    })
    .catch(error => {
      return (
        error,
        dispatch({type: LOGIN_FAILED, payload: 'échec de connexion !'}),
        console.log('error.message', error.message)
      );
    });
};
