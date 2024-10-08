import { useState } from 'react'
import './App.css'

function App() {

  let [count ,setCount] = useState(0);

  const addValue = () =>{
    if(count >= 20){
      setCount(0);
    } 
    else{
      setCount(count+1);
    }
  }

  const remValue = () =>{
    if(count <= 0){
      setCount(0);
    }
    else{
      setCount(count - 1);
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {count}</h2>

      {/* <button onClick={() => {setCount(count+1)}}>Add Value </button> */}
      <button onClick={addValue}>Add Value </button>
      <br /><br/>
      {/* <button onClick={() => {setCount(count-1)}}>Remove Value</button> */}
      <button onClick={remValue}>Remove Value</button>


    </>
  )
}

export default App
