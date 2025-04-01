import React,{useCallback, useEffect, useState,useRef} from 'react'

function ExpComp() {
    const[count,setCount] = useState(0);
    const[text,setText] = useState("");
    const prevFunc = useRef(null);

    const expTask = useCallback(() => {
        console.log("running expensive calculation");
        let res = 0;
        for(let i = 0; i < 1000000000; i++){
            res += i;
        }
        return res;
    },[count])

    useEffect(()=>{
        if(prevFunc.current){
            if(prevFunc.current === expTask){
                console.log("Function not re-created")
            }
            else{
                console.log("Funtion got recreated")
            }
        }
        else{
            prevFunc.current = expTask;
        }
    },[expTask])

  return (
    <div>
        <input 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='type anything'
        />
        <p>Expensive calculation Result:{expTask()}</p>
        <div>
            Count : {count}
        </div>
        <button onClick={() => setCount(count+1)}>Incerement</button>
    </div>
  )
}

export default ExpComp
