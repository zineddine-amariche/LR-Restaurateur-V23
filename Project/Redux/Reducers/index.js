import {combineReducers} from 'redux';
import auth from './Login';
import Commandes from "./Commandes"
import Printer from "./Printer"
import Dates from "./Dates"
import Vibration from "./Vibration"
import IsTab from "./IsTab"
import MenueItems from "./menueHead"

import getReservations from './Reservations/getReservations'
import getReservationsByDate from './Reservations/getReservationByDate'
import getReservationsById from './Reservations/getReservationById'
import resReservations from './Reservations/accept_decline_reservation'
import ClosingRestaurant from './closingRestaurant'
import TimerSlice from '../Reducers/Timer'

const rootReducer = combineReducers({
  auth,
  Commandes,
  Printer,
  Dates,
  Vibration,
  IsTab,
  MenueItems,
  getReservations,
  getReservationsById,
  ClosingRestaurant,
  resReservations,
  TimerSlice,
  getReservationsByDate
});

export default rootReducer;
