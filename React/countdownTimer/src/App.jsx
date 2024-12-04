import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const initialState = 20;
  const [time, setTime] = useState(initialState);
  const[isRunning,setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if(isRunning && time > 0){
      timer = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    }
    return() => clearInterval(timer);
  })

  const Reset = () => {
    setTime(initialState);
    setIsRunning(false)
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  return (
    <div>
      <h2>Countdown Timer: {time} </h2>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App
