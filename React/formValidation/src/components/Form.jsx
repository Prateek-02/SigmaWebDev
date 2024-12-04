import { useState } from 'react'

const Form = () => {
    const [formData,setData] = useState({name:'',email:''})
    const [errors,setError] = useState({})

    const handleChange = (e) => {
        const {name,value} = e.target;
        setData({...formData,[name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {}
        if(!formData.name){
            newErrors.name = "Name is required"
        }
        if(!formData.email){
            newErrors.email = "Email is required"
        }

        if(Object.keys(newErrors).length > 0){
            setError(newErrors);
        }
        else{
            alert("Form submitted successfully")
            setError({});
        }

    }
  return (
    <div>
      <h2>Simple Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" 
        name='name'
        placeholder='Enter name'
        value={formData.name}
        onChange={handleChange}
        />
        {errors.name ? <p style ={{color:"red"}}>{errors.name}</p>:null}
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email"
        name='email'
        placeholder='Enter email'
        value={formData.email}
        onChange={handleChange}
        />
        {errors.email ? <p style ={{color:"red"}}>{errors.email}</p>:null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
