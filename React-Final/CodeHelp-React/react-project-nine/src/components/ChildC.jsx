import React, { useContext } from 'react'
import { UserContext } from '../App'
import {ThemeContext} from '../App'

function ChildC() {
    const {user,setUser} = useContext(UserContext);
    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light');
        }
    }
    function changeUser(){
        if(user.name === 'Love'){
            setUser({name: 'Prateek'})
        }
        else{
            setUser({name : 'Love'})
        }
    }

    return ( 
    <div>
        <button onClick={handleClick}>
            Change Theme
        </button>
        <h1 style={{color:'red'}}>Data: {user.name}</h1>
        <button onClick={changeUser}>Change User</button>
    </div>
  )
}

export default ChildC
