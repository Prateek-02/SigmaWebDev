import './App.css'
import Card from './components/Card'


function App() {
  let myObj = {
    username: "Prateek",
    age:21
  }

  let newArr = [1,2,3]
  return (
    <>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text'>TailWind Test</h1>
      <Card username="chaiaurcode" btnText = "Click me"/>
      <Card username="Boat" btnText="Visit me"/>
      
    </>
  )
}

export default App
