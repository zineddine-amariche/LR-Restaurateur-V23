import {
  CONNECTION_FAILED,
  CONNECTION_SUCCESS,
  LOADING_NETWORK,
} from '../../Types/NEtwork';


export const VerifyNework = async dispatch => {
  dispatch({type: LOADING_NETWORK});

//   checkNetworkStatus({
//     timeout: 3000,
//     backUpURL: 'https://example.com',
//     pingDomain: 'github.com',
//     method: 'GET',
//   })
//   .then(value => {
//     console.log(value);

//     if (value) {
//       dispatch({type: CONNECTION_SUCCESS});
//     } else {
//       dispatch({type: CONNECTION_FAILED});
//     }
//   });
};
