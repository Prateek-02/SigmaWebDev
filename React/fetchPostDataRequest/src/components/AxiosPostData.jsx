import {  useState } from "react"
import axios from 'axios'

const AxiosPostData = () => {
    const[form,setForm] = useState({name:'',email:''})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setForm({...form,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post("https://jsonplaceholder.typicode.com/users",form)
        .then((response) => alert(`Submitted Data: ${JSON.stringify(response.data)}`))
        .catch((error) => console.error(error))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text"
        name ='name'
        value={form.name}
        placeholder="Enter name"
        onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email"
        name="email"
        value={form.email}
        placeholder="Enter Email"
        onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AxiosPostData
