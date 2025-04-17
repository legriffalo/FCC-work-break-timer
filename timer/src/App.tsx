import './App.css'
import { useState,useEffect,useRef } from 'react'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import Controls from './assets/components/controls'
import SetUp from './assets/components/Setup'
import Timer from './assets/components/Timer'

function App() {
  const[settings, setSettings] = useState({
    sessionLength:25,
    breakLength:5,
  });

  const[status,setStatus] = useState({
    time:1500,
    running:false,
    label:"session",
    started:false,
  })
  let interval: number;

// handle the settings buttons
  const handleSettings = (direction:string,source:string) => {
    if (direction === "up" && source === "session-label" && settings.sessionLength < 60) {
      setSettings(prevSettings => ({
        ...prevSettings,
        sessionLength: prevSettings.sessionLength + 1
      }));
    }  

    if (direction === "down" && source === "session-label" && settings.sessionLength > 1) {
      setSettings(prevSettings => ({
        ...prevSettings,
        sessionLength: prevSettings.sessionLength - 1
      }));
    }  

    if (direction === "up" && source === "break-label" && settings.breakLength < 60) {
      setSettings(prevSettings => ({
        ...prevSettings,
        breakLength: prevSettings.breakLength + 1
      }));
    }  

    if (direction === "down" && source === "break-label"  && settings.breakLength > 1) {
      setSettings(prevSettings => ({
        ...prevSettings,
        breakLength: prevSettings.breakLength - 1
      }));
    }  
  }

  // handle timer controls
  const handleControls = (control:string) => {
    console.log(control)
    // make playpause work
    if(control =="reset"){
      // toggle running flag
      setSettings({
        sessionLength:25,
        breakLength:5,
      })

      setStatus({
        time:300,
        running:false,
        label:"session",
        started:false
      })

      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0;

      }
    }
 
    // make playpause work
    if(control =="playpause"){
      // toggle running flag
      if(!status.started){
        setStatus(prevStatus => ({
          ...prevStatus,
          started:true,
          time:  settings.sessionLength*60
        }))
      }
      
      if(!status.running){

        console.log("giving the play command")
        setStatus(prevStatus => ({
          ...prevStatus,
          running:true,
        }))
      }
      else{
        console.log("giving the pause command")

        setStatus(prevStatus => ({
          ...prevStatus,
          running:false,
        }))
      }
      console.log(status)
    }   
  }
// alarm sounds
const audioRef = useRef<HTMLAudioElement | null>(null);

const playSound = () => {
  console.log("sound should PLAYYY!!! PLAYY!!!! PLAYYY!!!!")

  // audioRef.current.play(); // Start playing the audio
  if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().then((d)=>console.log(d)); // Start playing the audio
      
    }}

// run timers
  useEffect(() => {
    // console.log("starting status", status)
    
    if (status.running) {
      // Start the interval when running
      interval = setTimeout(() => {
        setStatus(prevStatus => ({
          ...prevStatus,
          time: Math.max(prevStatus.time - 1,0)
        }));
      }, 1000);  // Run every 1000ms (1 second)
    }
    // if timer runs out check if timer change needed
    if(status.time == 0){
      playSound()
      setStatus(prevStatus => ({
        ...prevStatus,
        label: prevStatus.label=="session"? "break":"session",
        running:prevStatus.label=="session"? true:false,
        time: prevStatus.label=="session"? settings.breakLength*60:settings.sessionLength*60,
        started: prevStatus.label=="session"? true:false,

      }));
    }
    return () => {
      clearTimeout(interval);
      // console.log("interval cleared by cleanup", interval);
    };
  }, [status]);  
  

  return (
    <>
      <Header title = "Break Timer"></Header>

      <div className='w-199/200 m-auto border-3 bg-[#333333] rounded-3xl p-2 text-white'>
        <div className='w-59/60 h-[20vh] m-auto flex flex-row justify-center gap-3'>

          <SetUp 
            id = "break-label"
           info = "Break" 
           style = "w-9/20 text-white flex flex-col justify-center items-center border bg-blue-300 rounded-xl gap-2 p-1" 
           length={settings.breakLength} 
           handler = {handleSettings}>
          </SetUp>

          <SetUp 
            id = "session-label"
            info = "Session" 
            style = "w-9/20 text-white flex flex-col justify-center items-center border bg-blue-600 rounded-xl gap-2 p-1" 
            length={settings.sessionLength} 
            handler = {handleSettings}>
          </SetUp>

        </div>
        
        <div className='w-8/10 h-[20vh] m-auto mt-[5vh] flex flex-row justify-center items-center border rounded-3xl gap-5'>
          <Timer label = {status.label} time = {status.started? status.time:settings.sessionLength*60}></Timer>
        </div>
      
        <div className='w-8/10 h-[10vh] m-auto mt-[5vh] flex flex-row justify-center gap-5'>
          <Controls style = "w-19/20 flex justify-center items-center border bg-blue-900 rounded-3xl gap-2" handler = {handleControls}></Controls>
        </div>
      </div>
      <audio preload="auto" ref = {audioRef} id = "beep" src="/FCC-work-break-timer/alarm.mp3" ></audio>

      <Footer></Footer>
    </>
  )
}

export default App
