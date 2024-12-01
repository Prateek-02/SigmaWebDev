import { useState } from "react"

function App() {
  const[color,setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200"style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outine-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setColor("green")} className="outine-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
            <button onClick={() => setColor("blue")} className="outine-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick={() => setColor("purple")} className="outine-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Purple"}}>Purple</button>
            <button onClick={() => setColor("magenta")} className="outine-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"magenta"}}>Magenta</button>
            <button onClick={() => setColor("cyan")} className="outine-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"cyan"}}>Cyan</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
