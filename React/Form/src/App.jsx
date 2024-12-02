import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setData] = useState({
    name:'',
    email:'',
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Form is submitted SuccesFully")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label htmlFor="Name">Name:</label>
        <input 
        type="text" 
        value = {formData.name}
        onChange={(e)=> setData(e.target.value)}
        />
        <br />
        <label htmlFor="Email">Email:</label>
        <input type="email"
        value={formData.email}
        onChange={(e) => setData(e.target.value)}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
