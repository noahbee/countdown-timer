import { useEffect, useState } from "react";

const useCountDown = ({
    timeInMilliseconds,
    countDownStarted,
    countDownPause,
    countDownTime}) => {

        const[countDownInMilliseconds, setCountDown] = useState(countDownTime - new Date().getTime());
    

        useEffect(() => {
            let interval;
            if(timeInMilliseconds > 0){
                interval = setInterval(() =>{
                    setCountDown(countDownTime - new Date().getTime());
                }, 1000)
            }
           else if(!countDownStarted){
                clearInterval(interval)
                setCountDown(0)
            }
            else if(!countDownPause){
                clearInterval(interval)
                
            }
            return() => clearInterval(interval);
            

        },[countDownTime, 
            timeInMilliseconds, 
            countDownStarted])

            return getReturnValues(countDownInMilliseconds);

}

const getReturnValues = (countdown) => {


    const minutes = Math.floor(countdown/(60 * 1000));
    const seconds = (countdown % (60 * 1000)/1000).toFixed(0);

    return [seconds, minutes];
}

export  {useCountDown};