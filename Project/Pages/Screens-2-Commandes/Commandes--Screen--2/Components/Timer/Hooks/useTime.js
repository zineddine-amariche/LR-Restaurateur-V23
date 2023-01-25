import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {STOP_VIB} from '../../../../../../Redux/Types/Vibration';

export function UseTime() {
  const [isEnabledTime, setIsEnabledTime] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [input, setInput] = useState(secondsLeft);
  const [secondsLeft, setSecondsLeft] = useState(3601);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  const borderColor = visible ? '#087' : '#700';
  const background = visible ? '#000' : '#ccc';
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    setVisible(previousState => !previousState);
    if (!show) {
      setVisible(true);
    } else if (show) {
      setVisible(false);
      setShow(false);
      // setTimerOn(timerOn => !timerOn);
      setTimerOn('');
      // dispatch({type: STOP_VIB});
    }
  };

  const close = () => {
    setVisible(false);
  };

  const start = () => {
    setTimerOn(timerOn => !timerOn);
    setVisibleAll(false);
  };

  const ActiveTimer = time => {
    setSecondsLeft(time);
    setVisible(false);
    setTimerOn(true);
    setShow(true); // to return time in red state
    setIsEnabledTime(true);
  };
  return {
    visible,
    timerOn,
    start,
    close,
    toggleSwitch,
    ActiveTimer,
    show,
    secondsLeft,
    setSecondsLeft,
  };
}
