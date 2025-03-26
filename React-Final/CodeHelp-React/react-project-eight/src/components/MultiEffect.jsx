import React, { useEffect, useState } from 'react'

function MultiEffect() {
    const[count,setCount] = useState(0);
    const[seconds,setSeconds] = useState(0);

    useEffect(()=>{
        console.log('Count changed: ',count);
    },[count])
    //side -effect logic will run when count is changed

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("SetInterval Started")
            setSeconds(prevSeconds => prevSeconds+1);
        },1000)

        return()=>{
            console.log("Time to Stop");
            clearInterval(intervalId);
        }
    },[]);
    //it will run only on first render


    return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Seconds:{seconds}</h1>
    </div>
  )
}

export default MultiEffect
