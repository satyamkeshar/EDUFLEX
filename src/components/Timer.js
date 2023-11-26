import React from 'react'
import { useTimer } from 'react-timer-hook';

function Timer({expiryTimestamp,timerExpire}) {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60 * expiryTimestamp)
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp:time, onExpire: () => timerExpire() });

      
      return (
       
          <div>
            
            <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
          </div>
          
      );
}

export default Timer

