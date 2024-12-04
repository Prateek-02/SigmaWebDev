import React from 'react'
import { useState,useContext } from 'react'

const ThemeContext = React.createContext();

const ThemeSwitch = () => {
    const[theme,setTheme] = useState('light')
  return (
    <div>
      <ThemeContext.Provider value = {{theme,setTheme}}>
        <ThemedComponent/>
      </ThemeContext.Provider>
    </div>
  )
}


const ThemedComponent = () => {
    const{theme,setTheme} = useContext(ThemeContext)
    return(
        
        <div style={{
            backgroundColor:theme == 'light' ? 'white' : 'black',
            color:theme == 'light'? 'black':'white'
        }}>
            <p>Current Theme: {theme}</p>
            <button onClick={()=> setTheme(theme=='light'?'dark':'white')}>Toggle theme</button>
        </div>
    )
}

const Theme = () => <ThemeSwitch/>
export default Theme;