import React from 'react'

function Button({handleClick,children}) {
  return (
    <div>
        {children}
        <button onClick = {handleClick}>
            Click me
        </button>
    </div>
  )
}

export default Button
