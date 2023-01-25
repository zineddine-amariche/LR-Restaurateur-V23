import { GET_TYPE_DEVICE } from "../../Types/IsTab";

  const initialState = {
    error: null,
    loading: false,
    IsTab:false,
  };
  
  const IsTab = (state = initialState, action) => {
    const {type, payload} = action;
    switch (action.type) {
      case GET_TYPE_DEVICE:
        return {
          ...state,
          IsTab: payload,
        };
  
      default:
        return state;
    }
  };
  
  export default IsTab;
  