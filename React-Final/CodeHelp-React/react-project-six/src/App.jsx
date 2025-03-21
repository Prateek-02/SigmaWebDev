import { useState } from "react"
import LoginBtn from "./components/LoginBtn"
import LogoutBtn from "./components/LogoutBtn"


function App() {
  const [isLoggedIn,setLoggedIn] = useState(false)

  //1
  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }

  //2
  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  //3 & 4
  if(!isLoggedIn){
    return (
      <LoginBtn/>
    )
  }

  return(
    <div>
      <h1>Welcome everyone to code Help Web dev course</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )

  

}

export default App
