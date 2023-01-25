import { CLOSE_MENUE, OPEN_MENUE } from "../../Types/MenueItem";

  const initialState = {
    Visible:false,
   
  };
  
  const MenueItems = (state = initialState, action) => {
    const {type, payload} = action;
    switch (action.type) {
      case OPEN_MENUE:
        return {
          ...state,
          Visible: true,
        };
        case CLOSE_MENUE:
        return {
          ...state,
          Visible: false,
        };
      default:
        return state;
    }
  };
  
  export default MenueItems;
  