import axios from 'axios';
import {
    DENY_CLOSING_SUCCESS,
    LOADING,
    DENY_CLOSING_FAILED,
    
  } from '../../Types/closingRestaurant';



export const dispatchDenyClosingRestaurant = async (dispatch, configHead, values) => {
   
    let url = 'https://dev500.live-resto.fr/apiv2e/closings/delete';
    
    dispatch({type: LOADING});
    await axios
      .post(url, values, configHead)
      .then(res => {
        let Data = res.data
        console.log(Data,'my data close deny')
        return (
          res,
         
            
          dispatch({type: DENY_CLOSING_SUCCESS, payload: Data})
          
          
        );
      })
      .catch(error => {
        return (
          error,
          dispatch({type: DENY_CLOSING_FAILED, payload: 'échec de fermeture de restaurant'}),
          console.log('fermeture errone', error)
        );
      });
  };