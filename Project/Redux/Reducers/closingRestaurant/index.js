import {
    CLOSING_SUCCESS,
    LOADING,
    CLOSING_FAILED,
    
  } from '../../Types/closingRestaurant';

  const initialState = {
    error: '',
    result:[],
    
    loader:false
   
  };

  const ClosingRestaurant = (state = initialState, action) => {
    const {type, payload} = action;
    // console.log(payload,'payload closing restaurant')
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loader:true
        };
      case CLOSING_SUCCESS:
        return {
          ...state,
          result: payload,
          loader:false
         
        };
      case CLOSING_FAILED:
        return {
          ...state,
          error: payload,
          loader:false
         
        };
   
     
      default:
        return state;
    }
  };
  
  export default ClosingRestaurant;