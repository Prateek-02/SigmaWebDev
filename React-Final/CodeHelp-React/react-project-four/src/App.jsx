import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
    <div>
      <Button handleClick = {handleClick} >
        <h1>{count} </h1>
      </Button>
      <Card name = "Love Babbar">
        <h1>Best Web Dev Course</h1>
        <p>Trying to be consistent</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children = "Main ek children hu">
        Hello Jee, Kaise so saare
      </Card>

    </div>
  )
}

export default App
