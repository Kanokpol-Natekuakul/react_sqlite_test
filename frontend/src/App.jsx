import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')

  const fetchUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => setUsers(data.data))
  }
  useEffect(()=>{
    fetchUsers();
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault();

    fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name })
})
.then(response => response.json())
.then(() => {
  fetchUsers();
  setName('');
})
  }
  return (
    <>
      <h1>User List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}placeholder='Enter user name' />
        <button type='submit'>Add user</button>
      </form>
      {users.length > 0 ? (
        <ul>
          {users.map(user =>(
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ):(
        <p>No users</p>
      )}
    </>
  )
}

export default App
