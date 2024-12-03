import { useState } from 'react'

import './App.css'
import Child from './component/Child';
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [number,setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count+1)
  },[])

  const decrementCounter = useCallback(() =>{
    setCount(count-1);
  },[])

  const IncrementNumber = useCallback(() =>{
    setNumber(number+1);
  },[])

  return (
    <div>
      <h2>Count is: {count}</h2>
      <h2>Number is: {number}</h2>
      <Child
      incrementCounter = {incrementCounter}
      decrementCounter = {decrementCounter}
      incrementNumber = {IncrementNumber}
      />
    </div>
  );
}

export default App
