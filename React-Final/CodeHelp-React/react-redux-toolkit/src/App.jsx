import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount,setAmount] = useState(0);
  const count = useSelector((state) => (state.counter.value));
  const dispatch = useDispatch();

  function handleIncement(){
    dispatch(increment())
  }

  function handleDecrement(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleAmount(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='container'>
      <button onClick={handleIncement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button> 
      <br /> <br />
      <button onClick={handleReset}>Reset</button> 
      <br /> <br />
      <input 
        type="number"
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /> <br />
      <button onClick={handleAmount}>Increment by Amount</button>
    </div>
  )
}

export default App
