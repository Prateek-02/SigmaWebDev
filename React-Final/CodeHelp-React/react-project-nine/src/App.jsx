import { createContext, useState } from "react"
import './App.css'
import ChildA from "./components/ChildA";

// step 1:- create context
const UserContext = createContext();

// step 2:- wrap all the child inside the provider
// step 3:- Pass value in the provider
// step 4:- consumer k andar jaa k value consume kr lo

const ThemeContext = createContext();

function App() {
  const[user,setUser] = useState({name:"Love"});
  const[theme,setTheme] = useState('light')
  return (
    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA/> 
    //   </UserContext.Provider>
    // </>
    
    <>
      <UserContext.Provider value={{user,setUser}}>
        <ThemeContext.Provider value = {{theme,setTheme}}>
          <div id = 'container' style={{backgroundColor:theme === 'light' ? 'beige':'black'}}>
            <ChildA/>
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
      
    </>
    

  )
}

export default App
export {UserContext}
export {ThemeContext}
