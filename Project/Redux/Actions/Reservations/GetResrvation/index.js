import axios from "axios";
import {
  GET_RESRBYID_FAILED,
  GET_RESRBYID_SUCCESS,
  LOADING_BYID,
} from "../../../Types/Reservations";

export const GetReservationsById = async (
  dispatch,
  configHead,
  id,
) => {
  let url = `https://manager.my-resto.net/apiv2e/bookings/details/${id}`;
  dispatch({ type: LOADING_BYID });
  await axios
    .get(url, configHead)
    .then((response) => {
      let result = response.data;

      return (
        result,
        // console.log('result result result', result.booking),
        // setVisible()
        dispatch({ type: GET_RESRBYID_SUCCESS, payload: result.booking })
      );
    })
    .catch((error) => {
      return (
        error,
        dispatch({ type: GET_RESRBYID_FAILED, payload: "échec request !" }),
        console.log("error.message", error.message)
      );
    });
};
