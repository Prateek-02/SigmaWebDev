import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function expensiveTask (num){
    console.log("Inside expensive function");
    for(let i=0;i<=1000000000;i++){}
    return num*2
  }

  let doubleValue = useMemo(()=>expensiveTask(count),[count]);

  return (
    <div>
      <h2>Count is : {count}</h2>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <h2>Double value : {doubleValue}</h2>
    </div>
  )
}

export default App
