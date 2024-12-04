import { useContext } from "react";
import { UserContext,ScoreContext } from "../App";
import React from 'react'

const Child2 = () => {
    const user = useContext(UserContext)
    const score = useContext(ScoreContext)
  return (
    <div>
      {user} - {score}
    </div>
  )
}

export default Child2
