import { useState } from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0);

  const addValue = () =>{
    setCount(count + 1)
    if(count >= 20){
      setCount(0);
    }
  }

  const subValue = () => {
    setCount(count - 1)
    if(count <= 0 ){
      setCount(0);
    }
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Increment</button>
      <br /><br />
      <button onClick={subValue}>Decrement</button>
    </>
  )
}

export default App
