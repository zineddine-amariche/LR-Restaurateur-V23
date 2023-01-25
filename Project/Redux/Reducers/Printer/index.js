import {
  ADD,
  DELETE,
  DELETE_MESSAGES_PRINTER,
  NBR_TICKET,
  PRINTER_CONNECTED,
  PRINTER_FAILED,
  PRINTER_INFO,
  PRINTER_LOADING,
} from "../../Types/Printer";

const initialState = {
  error: [] || false,
  loading_printer: false,
  boundAddress: "",
  isPrinter: false,
  type: null,
  nombreTicket: 1,
};

const Printer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case PRINTER_LOADING:
      return {
        ...state,
        loading_printer: true,
      };
    case PRINTER_CONNECTED:
      return {
        ...state,
        isPrinter: true,
        boundAddress: payload,
        loading_printer: false,
      };
    case PRINTER_FAILED:
      return {
        ...state,
        error: payload,
        isPrinter: false,
        loading_printer: false,
        type: "error",
      };
    case DELETE_MESSAGES_PRINTER:
      return {
        ...state,
        error: null,
        type: null,
      };
    case ADD:
      return {
        ...state,
        nombreTicket: payload,
      };
    case DELETE:
      return {
        ...state,
        nombreTicket: payload,
      };
    case PRINTER_INFO:
      return {
        ...state,
        Info: payload,
        loading_printer:false,
        boundAddress:payload.address,
        isPrinter: true,

      };
    default:
      return state;
  }
};

export default Printer;
