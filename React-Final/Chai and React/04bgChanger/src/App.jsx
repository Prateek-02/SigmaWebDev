import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-full">
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"red"}} onClick={() => setColor("red")}>
            Red
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"green"}} onClick={() => setColor("green")}>
            Green
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>
            Blue
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"violet"}} onClick={() => setColor("violet")}>
            Violet
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"indigo"}} onClick={() => setColor("indigo")}>
            Indigo
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"orange"}} onClick={() => setColor("orange")}>
            Orange
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"pink"}} onClick={() => setColor("pink")}>
            Pink
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"gray"}} onClick={() => setColor("gray")}>
            Gray
          </button>
          <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}} onClick={() => setColor("black")}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
