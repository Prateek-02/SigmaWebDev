import {useState,useEffect} from 'react'

const HTTPRequest = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => (response.json()))
    .then((json) => setUsers(json))
    .catch((error) => console.error('error fetchin data ',error))
    },[])
    
  return (
    <div>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.id} - {user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HTTPRequest
