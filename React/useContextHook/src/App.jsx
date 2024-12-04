import React from 'react'
import './App.css'
import Child1 from './components/Child1'
import Theme from './components/ThemeSwitch'

export const UserContext = React.createContext()
export const ScoreContext = React.createContext()
function App() {
  return (
    <div>
      {/* <UserContext.Provider value={'Prateek'}>
        <ScoreContext.Provider value={60}>
          <Child1/>
        </ScoreContext.Provider>
      </UserContext.Provider> */}
      <Theme/>
      
    </div>
  )
}

export default App
