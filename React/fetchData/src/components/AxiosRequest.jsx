import { useState,useEffect } from "react";
import axios from 'axios'

const AxiosRequest = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data))
        .catch((error) => console.error(error))
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

export default AxiosRequest;
