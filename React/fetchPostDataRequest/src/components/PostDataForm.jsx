import {  useState } from "react"

const PostDataForm = () => {
    const[form,setForm] = useState({name:'',email:''})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setForm({...form,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/users",{
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(form),
        })
        .then((response) => (response.json()))
        .then((data) => alert(`Submitted Data: ${JSON.stringify(data)}`))
        .catch((error) => console.error(error));
        
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

export default PostDataForm
