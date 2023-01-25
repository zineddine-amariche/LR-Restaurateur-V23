import axios from 'axios';
import {COMMANDES_FAILED, COMMANDES_SUCCESS} from '../../Types/Commandes';
import {DELETE_MESSAGES, LOADING} from '../../Types/TimeOrders';

export const getCommandesByTime = async (dispatch, configHead, values) => {
  // let url = `https://${process.env.BASE_URL}/authenticate`;
  let url = 'https://dev500.live-resto.fr/apiv2e/orders';
  dispatch({type: LOADING});
  await axios
    .post(url, values, configHead)
    .then(res => {
      return (
        res,
        console.log('COMMANDES_SUCCESS_ByTime'),
        dispatch({type: COMMANDES_SUCCESS, payload: res.data}),
        dispatch({type: DELETE_MESSAGES})
      );
    })
    .catch(error => {
      return (
        error,
        dispatch({type: COMMANDES_FAILED, payload: 'échec by dates !'}),
        console.log('error.message', error.message)
      );
    });
};
