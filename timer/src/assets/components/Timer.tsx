import React from 'react';

interface TimerProps {
    time:number;
    label:string;
  }
  


const Timer: React.FC<TimerProps> = ({time, label}) => {
  return (
    <div className = "w-2/3 border rounded-xl text-3xl">
      <h1 className = "text-3xl" id = "timer-label"> {label} </h1>

      <span id = "time-left">{`${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}</span>
    </div>

  );
};

export default Timer;