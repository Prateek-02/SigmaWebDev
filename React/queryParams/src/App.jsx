import {BrowserRouter as Router,Routes,Route,Link,useSearchParams} from 'react-router-dom';

const Home = () => {
  return(
    <div>
    <h1>Home</h1>
    <Link to='/details?name=Rohit&age=21'>Go to Details</Link>
  </div>
  )
}

const Details = () =>{
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');

  return(
    <div>
      <h1>Details page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/details' element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
