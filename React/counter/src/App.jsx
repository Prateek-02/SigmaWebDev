import { useState } from 'react';
import './App.css'

function App() {
  
  const[counter,setCount] = useState(0);
  if(counter < 0){
    setCount(0);
  }
  if(counter>20){
    setCount(0);
  }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={() => setCount(counter=>counter+1)}>Add Value</button>
      <br /><br />
      <button onClick={() => setCount(counter=>counter-1)}>Sub Value</button>
    </>
  )
}

export default App
