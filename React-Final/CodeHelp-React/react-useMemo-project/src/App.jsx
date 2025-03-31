import { useMemo, useState } from 'react';
import './App.css'

function App() {
  const[count,setCount] = useState(0);
  const[input,setInput] = useState(0);

  function expTask(num){
    console.log("Inside expensive task");
    for(let i =0; i <= 1000000000 ; i++){
      <p>hi</p>
    }
    return num * 2;
  }

  let doubleValue = useMemo(() => expTask(input),[input])

  return (
    <div>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <br />
      <div>
        Count : {count}
      </div>

      <input 
        type="number" 
        placeholder='enter number'
        value = {input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
