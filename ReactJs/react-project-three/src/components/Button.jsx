/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick = {props.handleClick}>
            {props.text}
        </button>
    </div>
  )
}

export default Button
