import {useQuery,useMutation} from 'react-query';
import axios from 'axios';


const getingListReservation = (object,configHead) => {
 
  let url = `https://manager.my-resto.net/apiv2e/bookings`;

    //   GetReservationsData(dispatch, configHeader, object);
      return axios.post(url,object ,configHead);
    
  };



  export const useGetListReservations =()=>{
    return useMutation(getingListReservation)
  }