import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {dispatchDenyClosingRestaurant} from '../../../Redux/Actions/denyClosingRestaurant'
import { ADD_SECONDS, CHANGE_STYLES } from '../../../Redux/Types/Timer';
import { startTimer } from '../../../Redux/Actions/Timer';

export function UseTime() {
  const [isEnabledTime, setIsEnabledTime] = useState(false);
  const [input, setInput] = useState(secondsLeft);
  const [secondsLeft, setSecondsLeft] = useState(3601);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [VisibleOther, setVisibleOther] = useState(false);
  const borderColor = visible ? '#087' : '#700';
  const background = visible ? '#000' : '#ccc';
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { Token } = auth;

  let configHead = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'fr',
      Authorization: "Bearer " + Token,
    },
  };

  const {secondLeft,isTimerActive,changeStyles} = useSelector((state)=>state.TimerSlice)

  const closingRestaurant = useSelector((state) => state.ClosingRestaurant);
  const id=closingRestaurant?.result?.data?.id
  // console.log(id,'id close')
  // console.log(closingRestaurant,'close restaurant')
  const toggleSwitch = () => {
    setVisible(previousState => !previousState);
    if (!changeStyles) {
      setVisible(true);
    } else if (changeStyles) {
      setVisible(false);
      setShow(false);
      // setTimerOn(timerOn => !timerOn);
      // setTimerOn('');
      // dispatchDenyClosingRestaurant(dispatch, configHead, {"period":id});
      startTimer(dispatch,false)
      dispatch({type:CHANGE_STYLES, payload:false})
    }
  };

  const close = () => {
    setVisible(false);
  };

 

  const ActiveTimer = time => {
    setSecondsLeft(time);
    dispatch({type:ADD_SECONDS,payload:time})
    setVisible(false);
    // setTimerOn(true);
    setShow(true); // to return time in red state
    // setIsEnabledTime(true);
    dispatch({type:CHANGE_STYLES, payload:true})

  };


  const ActiveOther = () =>{
    setVisibleOther(true)
  }
  const CloseOther = () =>{
    setVisibleOther(false)
    
  }
  return {
    visible,
    close,
    toggleSwitch,
    ActiveTimer,
    show,
    secondsLeft,
    setSecondsLeft,
    VisibleOther,
    ActiveOther,
    CloseOther,
    setShow
  };
}
