import { useEffect, useState } from "react"


function App() {
  const[count,setCount] = useState(0);
  const[total,setTotal] = useState(0);

  //first -> side effect function
  //second -> cleanup function
  //third -> dependency list
  
  // variation:1
  // runs on every render
  // useEffect(()=>{
  //   alert("I will run on each render")
  // })

  //variation:2
  //runs on only first render
  // useEffect(()=>{
  //   alert("I will run only on first render")
  // },[])

  //variation:3
  //runs on dependency updation
  // useEffect(()=>{
  //   alert("I will run whenever the count value is updated")
  // },[count])

  //variation:4
  //multiple dependency
  // useEffect(()=>{
  //   alert("I will run every time when count or total is updated")
  // },[count,total])

  //variation:5
  //iss baar lets add a cleanup function
  useEffect(()=>{
    alert("Count is updated")

    return() => {
      alert("Count is unmounted from UI")
    }
  },[count])



  function handleClick(){
    setCount(count+1);
  }
  function handleTotal(){
    setTotal(total+1);
  }

  return (
    <div>
      <button onClick={handleClick}>Update count</button>
      <br />
      <p>Count is: {count}</p>
      <button onClick={handleTotal}>Update total</button>
      <br />
      <p>Total is: {total}</p>
    </div>
  )
}

export default App
