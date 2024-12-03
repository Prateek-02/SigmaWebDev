import { useState } from 'react'
import ChildComponent from './components/ChildComponent';

import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <div>
        Count : {count}
      </div>
      <div>
        <button onClick={() => setCount(count+1)}>Increment</button>
      </div>
      <br />
      <div>
        <ChildComponent buttonName = "Click Me"/>
      </div>
    </div>
  )
}

export default App
