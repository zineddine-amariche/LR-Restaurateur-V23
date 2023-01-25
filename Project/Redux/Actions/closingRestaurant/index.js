import axios from 'axios';
import {
    CLOSING_SUCCESS,
    LOADING,
    CLOSING_FAILED,
    
  } from '../../Types/closingRestaurant';



export const dispatchClosingRestaurant = async (dispatch, configHead, values) => {
   
    let url = 'https://dev500.live-resto.fr/apiv2e/closings/add-simplified';
    // console.log(configHead,'config')
    // console.log(values,'values')
    dispatch({type: LOADING});
    await axios
      .post(url, values, configHead)
      .then(res => {
        let Data = res.data
         console.log(Data,'my data')
        return (
          res,
          // console.log('response closing restaurant'),
  
          dispatch({type: CLOSING_SUCCESS, payload: Data})
          
        );
      })
      .catch(error => {
        return (
          error,
          dispatch({type: CLOSING_FAILED, payload: 'échec de fermeture de restaurant'}),
          console.log('deny close errone', error)
        );
      });
  };