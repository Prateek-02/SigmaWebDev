
import { useCallback, useState } from 'react'
import './App.css'
import ChildComp from './components/ChildComp';
import ExpComp from './components/ExpComp';

function App() {
  // const [count,setCount] = useState(0);

  // function handleClick(){
  //   setCount(count + 1);
  // }

  // const handleClick = useCallback(() =>{
  //   setCount(count+1);
  // },[count]);


  return (
    // <div>
    //   <div>
    //     Count : {count}
    //   </div>
    //   <br />
    //   <div>
    //     <button onClick={handleClick}>Incerement</button>
    //   </div>
    //   <br />
    //   <div>
    //     <ChildComp 
    //     buttonName = "Click me"
    //     handleClick = {handleClick}/>
    //   </div>
    // </div>

    <div>
      <ExpComp/>
    </div>
  )
}

export default App
