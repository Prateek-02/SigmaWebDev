import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card username="chai aur code" btnText="Click me"/>
      <Card username="Prateek" btnText="Visit me"/>
    </>
  )
}

export default App
