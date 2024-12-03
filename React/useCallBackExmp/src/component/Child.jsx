import React from 'react'

const Child = React.memo(({incrementCounter,decrementCounter,incrementNumber}) => {
    console.log("Child component re-rendered");
    
  return (
    <div>
      <button onClick={incrementCounter}>Increment counter</button>
      <button onClick={decrementCounter}>Decrement counter</button>
      <button onClick={incrementNumber}>Increment number</button>
    </div>
  )
})

export default Child
