import React, { memo, useState } from 'react'
import Actions from './Actions'


function Timer() {
  
  // store the input min(s)
  const [timeInput, setTimeInput] = useState(1);

  // toggle start
  const [countDownStarted, setCountDownStarted] = useState(false);
  const [countDownPause, setCountDownPause] = useState(false);

  // time in milliseconds
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(0);

  //used timers

  const [usedTimes, setUsedTimes] = useState([]);

  // start timer
const startTimer = () => {

  setCountDownStarted(true);

// set new timer minutes(milliseconds)
setTimeInMilliseconds(timeInput * 60 * 1000);
// add the time to used times
setUsedTimes(times=> times.concat(timeInput));

}

const pauserTimer = () => {
  setCountDownPause(false);
  setTimeInMilliseconds(0);


}
  // stop timer
const stopTimer = () => {

  setCountDownStarted(false);
  setTimeInMilliseconds(0);
}

  //Get time input and set time input
  const handleChange = (e) => {
    const inputData = parseInt(e.target.value);
    setTimeInput(inputData);
  }
// get time ahead in milliseconds
const countDownTime =  new Date().getTime() + timeInMilliseconds;

  return (
    <div className='timer'>
    <div className='container'>
      <Actions {...{
        handleChange,
        timeInput,
        countDownStarted,
        countDownPause,
        startTimer,
        pauserTimer,
        stopTimer,
        usedTimes,
        setUsedTimes,
        timeInMilliseconds,
        countDownTime

      }}
      />

      </div>
      </div>
  )
}

export default memo(Timer)