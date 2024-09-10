import './App.css'
import UserCard from './components/UserCard'
import MaharanaPratap from './assets/MaharanaPratap.png'
import PrithviRajChauhan from './assets/PrithviRajChauhan.png'
import ShivajiMaharaj from './assets/ShivajiMaharaj.png'

function App() {

  return (
    <div className='container'>
      <UserCard name="Maharana Pratap" desc="desc2" img = {MaharanaPratap} style ={{"border-radius":"10px"}}/>
      <UserCard name="Shivaji Maharaj" desc="desc1" img = {ShivajiMaharaj} style ={{"border-radius":"10px"}}/>
      <UserCard name="PrithviRaj Chauhan" desc="desc3" img = {PrithviRajChauhan} style ={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
