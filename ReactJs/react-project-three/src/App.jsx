/* eslint-disable no-unused-vars */
import './App.css'
import Card from './components/Card';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  
  return (
    <div>
      <Button handleClick = {handleClick} text ="Click Me">
        <h1>{count}</h1>
        </Button>


      {/* <Card name = "Prateek Raj">
        <h1>Best WEB DEV Course</h1>
        <p>Trying to be consistent</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children = "I am a children">
        Hello jee, Kaise ho saare?   
      </Card> */}
      
    </div>
  )
}

export default App
