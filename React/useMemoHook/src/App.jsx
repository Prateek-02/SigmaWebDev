import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[input,setInput] = useState(0);

  // Simulate an expensive calculation
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // Simulate heavy computation
    return num * 2;
  };

  // Memoize the result of the expensive calculation
  const Double = useMemo(() => expensiveCalculation(input), [input]);

  return (
    <div>
      <h2>Count is: {count}</h2>
      <h3>Doubled value: {Double}</h3>
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>
      <br />
      <input type="number" 
      onChange={(e)=> setInput(e.target.value)}
      placeholder='Enter number'
      />
    </div>
  );
};



export default App
