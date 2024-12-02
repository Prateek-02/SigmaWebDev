import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Card 1" description="Card1 Description"/>
        <Card title="Card 2" description="Card2 Description"/>
        <Card title="Card 3" description="Card3 Description"/>
        <Card title="Card 4" description="Card4 Description"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
