/* eslint-disable react/prop-types */
import {useEffect} from 'react'

const Navbar = ({color}) => {
  // Case 1: Run on every render
  useEffect(() =>{
    alert("Hey i will run on every render")
  })

  // Case 2: Run only on 1st render
  useEffect(() =>{
    alert("Welcome to my page. This is the first render")
  },[])

  // Case 3: Run only when certain values change
  useEffect(() =>{
    alert("Hey i am running because color was changed")
  },[color])

  //Example of cleanup function

  useEffect(() =>{
    alert("Welcome to my page. This is the first render of app.jsx")
    return () =>{
      alert("component was unmounted")
    }
  },[])

  return (
    <div>
      I am Navbar of {color} color hehe....
    </div>
  )
}

export default Navbar
