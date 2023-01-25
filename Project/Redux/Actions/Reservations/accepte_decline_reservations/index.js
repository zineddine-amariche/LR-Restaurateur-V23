import axios from "axios";
import {
  LOADING_BYID_POST,
  POST_RESRBYID_SUCCESS,
  POST_RESRBYID_FAILED,
} from "../../../Types/Reservations";

export const postReservations = async (
  dispatch,
  configHead,
  object,
  DesAcitvePopUp
) => {
  // console.log('configHead', configHead)
  let url = `https://manager.my-resto.net/apiv2e/bookings/handleConfirm`;
  dispatch({ type: LOADING_BYID_POST });
  await axios
    .post(url, object, configHead)
    .then((response) => {
      let result = response.data;
      DesAcitvePopUp();
      return (
        result,
        console.log("result result result", result),
        dispatch({ type: POST_RESRBYID_SUCCESS, payload: result.booking })
      );
    })
    .catch((error) => {
      return (
        error,
        dispatch({ type: POST_RESRBYID_FAILED, payload: "échec request !" }),
        console.log("error.message", error.message)
      );
    });
};
