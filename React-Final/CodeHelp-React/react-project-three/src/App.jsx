import UserCard from "./components/UserCard"
import MaharanaPratap from './assets/MaharanaPratap.jpg';
import ShivajiMaharaj from './assets/ShivajiMaharaj.jpg';
import PrithviRajChauhan from './assets/PrithviRajChauhan.jpg'
import './App.css'
function App() {
  return (
    <div className='container'> 
      <UserCard name = "Maharana Pratap" desc = "desc1" image={MaharanaPratap} style={{"border-radius":"10px"}}/>
      <UserCard name = "Shivaji Maharaj" desc = "desc2" image={ShivajiMaharaj} style={{"border-radius":"10px"}}/>
      <UserCard name = "PritviRaj Chauhan" desc = "desc3" image={PrithviRajChauhan} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
