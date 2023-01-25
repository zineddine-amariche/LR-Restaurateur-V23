import {
    DENY_CLOSING_FAILED,
    LOADING,
    DENY_CLOSING_SUCCESS,
    
  } from '../../Types/closingRestaurant';

  const initialState = {
    error: '',
    result:[],
    
    loader:false
   
  };

  const ClosingDenyRestaurant = (state = initialState, action) => {
    const {type, payload} = action;
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loader:true
        };
      case DENY_CLOSING_SUCCESS:
        return {
          ...state,
          result: payload,
          loader:false
         
        };
      case DENY_CLOSING_FAILED:
        return {
          ...state,
          error: payload,
          loader:false
         
        };
   
     
      default:
        return state;
    }
  };
  
  export default ClosingDenyRestaurant;