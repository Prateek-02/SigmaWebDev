import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

const Home = () => <h2>Welcome to Homepage</h2>
const About = () => <h2>About page</h2>
const Contact = () => <h2>Contact page</h2>


function App() {

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
