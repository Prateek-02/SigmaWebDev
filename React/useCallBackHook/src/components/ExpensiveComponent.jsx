import { useCallback, useEffect,  useRef, useState } from 'react'

const ExpensiveComponent = () => {
    const[count,setCount] = useState(0);
    const[text,setText] = useState("");
    const prevFunc = useRef(null)

    const expensiveCalculation = useCallback(() =>{
        console.log("Running expenisve calculation...");
        let result = 0;
        for(let i=0;i<1000000000;i++){
            result+=i;
        }
        return result;
    },[count])

    useEffect(()=>{
        if(prevFunc.current){
            if(prevFunc.current === expensiveCalculation){
                console.log("Function not recreated");
            }
            else{
                console.log("Function got re-created");
                
            }
        }
        else{
            prevFunc.current = expensiveCalculation
        }
    },[expensiveCalculation])
  return (
    <div>
      <input 
      type="text" 
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Type Something...'
      />
      <p>Expensive Calculation Result: {expensiveCalculation()} </p>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>      
    </div>
  )
}

export default ExpensiveComponent
