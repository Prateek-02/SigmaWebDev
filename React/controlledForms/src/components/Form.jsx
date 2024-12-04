import {useState} from 'react'

const Form = () => {
    const[formData,setData] = useState({name:'',email:'',password:''})

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}`)
    }

    const handleChange = (e) => {
        const{name,value} = e.target
        setData({...formData,[name]:value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input 
        type="text" 
        name='name'
        placeholder='Enter your name'
        value={formData.name}
        onChange={handleChange}
        />
        <br />
        <label htmlFor="Email">Email:</label>
        <input 
        type="email" 
        name='email'
        placeholder='Enter email'
        value={formData.email}
        onChange={handleChange}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input 
        type="password" 
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder='Enter your Password'
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
