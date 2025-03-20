import React from 'react'
import './UserCard.css'

function UserCard({name,desc,image,style}) {
  return (
    <div className='user-container' style={style}>
      <p id='user-name'>{name}</p>
      <img id='user-img' src={image} alt="" />
      <p id='user-desc'>{desc}</p>
    </div>
  )
}

export default UserCard
