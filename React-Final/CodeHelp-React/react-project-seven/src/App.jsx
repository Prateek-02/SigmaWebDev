
function App() {
  
  function handleClick(){
      alert("I am clicked")
  }

  function handleMouseOver(){
    alert("Para ke upar mouse lekar aaye ho")
  }

  function handleInputChange(e){
    // alert("Input me value change hui hai")
    console.log("Value till now: ",e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    // i am writing custom behaviour down
    alert("Form Submit kar du ky?")
  }

  return (
    <div>

      <button onClick={() => alert("Button click hua h")}>
        Click Me
      </button>


      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>


      <p onMouseOver={handleMouseOver}>
        I am a Para
      </p>

      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
