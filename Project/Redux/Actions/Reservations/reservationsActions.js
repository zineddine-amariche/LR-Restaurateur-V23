import axios from "axios";
import {
  GET_RESR_DATA_FAILED,
  GET_RESR_DATA_SUCCESS,
  GET_RESR_FAILED,
  GET_RESR_SUCCESS,
} from "../../Types/Reservations/index.js";

export const GetTokenReservations = async (dispatch, configHead) => {
  let url = `https://manager.my-resto.net/apiv2e/bookings/lrBridge`;

  // dispatch({ type: LOADING_BYID });
  await axios
    .get(url, configHead)
    .then((response) => {
      let result = response.data;

      return (
        result,
        // console.log('reservation token res', result),
        dispatch({ type: GET_RESR_SUCCESS, payload: result })
      );
    })
    .catch((error) => {
      return (
        error,
        dispatch({ type: GET_RESR_FAILED, payload: "échec request !" }),
        console.log("error.message", error.message)
      );
    });
};

export const GetReservationsData = async (dispatch, configHead, object ) => {
  let url = 'https://manager.my-resto.net/apiv2e/bookings';

  await axios
    .post(url, object, configHead)
    .then(response => {
      let result = response.data;
      return (
        result,
        // console.log('start res', JSON.stringify(result))
        dispatch({type: GET_RESR_DATA_SUCCESS, payload: result})
 
      );
    })
    .catch(error => {
      return (
        error,
        dispatch({type: GET_RESR_DATA_FAILED, payload: 'échec post !'}),
        console.log('error.message', error.message)
      );
    });
};
