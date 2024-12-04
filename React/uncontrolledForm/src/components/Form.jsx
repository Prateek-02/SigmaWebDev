import { useRef } from "react"

const Form = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const handleSubmit = (e) => {
        alert("The details are "+inputRef1.current.value+" and "+ inputRef2.current.value);
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
        type="text" 
        name="name"
        ref={inputRef1} 
         />
        <br />
        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        name="password" 
        ref={inputRef2}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
