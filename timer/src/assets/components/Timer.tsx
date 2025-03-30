

interface TimerProps {
    count:number;
    label:string;
  }
  


const Timer: React.FC<TimerProps> = ({count, label}) => {
  return (
    <div className = "w-2/3 border rounded-xl text-3xl">
      <h1 className = ""> {label} </h1>
        {count}
    </div>

  );
};

export default Timer;