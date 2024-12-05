import{useSelector, useDispatch} from 'react-redux'
import { INCREMENT,DECREMENT } from '../store'

const ReduxCounter = () => {
    const count = useSelector((state)=> state.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={()=>dispatch({type:INCREMENT})}>Increment</button>
      <button onClick={()=>dispatch({type:DECREMENT})}>Decrement</button>
    </div>
  )
}

export default ReduxCounter
