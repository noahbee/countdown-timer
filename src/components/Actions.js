import React, { useEffect } from 'react'
import './timer.css';

import{ useCountDown} from "./../hooks/useCountDown";



function Actions({
    timeInput,
    handleChange,
    countDownStarted,
    startTimer,
    pauserTimer,
    stopTimer,
    setUsedTimes,
    timeInMilliseconds,
    countDownTime
}) {
  const [seconds, minutes] = useCountDown ({
    timeInMilliseconds,
    countDownStarted,
    countDownTime
})


// customize minutes

const cMin = minutes<10 ? `0` + minutes : minutes;
const cSecs = seconds< 10 ? `0` + seconds : seconds;

  useEffect(()=>{
     if((minutes + seconds) <=0){
      stopTimer();
      pauserTimer();
      return;
     }
     
  }, [minutes, seconds])

    return (
    
            <div className='timer_container'>
              <div className='input-form'>
              {/* <button onClick={() => setUsedTimes()} className='start'> Reset</button> */}
            <label>Countdown:
            <input type='number' placeholder='(Min)'
                onChange={handleChange}
                defaultValue={timeInput}
                />
              </label>  
              {!countDownStarted ?
             <button onClick={() => startTimer()} className='start'> Start</button>:
             <button onClick={() =>stopTimer()} className='stop'> Stop</button>}
            </div>
                <div className='pg-container'>
                {cMin} : {cSecs}
          <button onClick={() =>pauserTimer()} className='pause'>||</button>
                </div>
            <button className='controls'>1x</button>
            <button className='controls'>1.5x</button>
            <button className='controls'>2x</button>
            </div>
       
      )
    }


export default Actions