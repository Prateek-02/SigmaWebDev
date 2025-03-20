import React from 'react'

function Card({name,children}) {
  return (
    <div>
      {name}
      {children}
    </div>
  )
}

export default Card
