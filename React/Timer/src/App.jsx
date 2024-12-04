import { useState,useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  let timeRef = useRef(0);

  const startTimer =() =>{
    timeRef.current = setInterval(() => {
      setTime(time => time+1)
    },1000);
  }
  const stopTimer =() =>{
    clearInterval(timeRef.current);
    timeRef.current = null;

  }
  const resetTimer =() =>{
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h2>Stopwatch time: {time} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default App
