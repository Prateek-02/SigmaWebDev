/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.img} alt=""></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
