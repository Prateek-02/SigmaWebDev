/* eslint-disable react/prop-types */
import './Card.css'

const Card = ({title,description}) => {
  return (
    <div>
      <div className="card">
        <img src="https://images.pexels.com/photos/29518517/pexels-photo-29518517/free-photo-of-scenic-view-of-zemmgrund-mountains-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={210} height={140} 
        style={{overflow : "hidden", border:"2px solid black"}} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
