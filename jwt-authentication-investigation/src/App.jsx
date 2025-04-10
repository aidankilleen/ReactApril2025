import { useEffect, useState } from 'react'
import './App.css'

const AUTH_URL="https://jwt.acodingtutor.com/auth/login";
const API_URL="https://jwt.acodingtutor.com/users";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const [credentials, setCredentials] = useState({email:"", password:""});

  const [users, setUsers] = useState([]);

  useEffect(()=>{

    const fetchData = async() => {

      const response = await fetch(API_URL, {
        method:"GET", 
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data)
      }
    }

    fetchData();

  }, [token])


  const onLogin = async () => {

    const response = await fetch(AUTH_URL, {
      method:"POST", 
      headers: {
        'Content-Type':"application/json"
      }, 
      body: JSON.stringify(credentials)
      
    });
    if (response.ok) {
      const data = await response.json();
      setToken(data.token);
      setIsLoggedIn(true);
      console.log(data);
    } else {
      setToken("");
      setIsLoggedIn(false);
      setUsers([]);
    }
  }
  const onLogout = () => {
    setIsLoggedIn(false);
    setUsers([]);
  }
  return (
    <>
      <h1>JWT Authentication</h1>
      <h2>{isLoggedIn?"Logged In" : "Not Logged In"}</h2>

      {!isLoggedIn && <div>
      <input 
        placeholder="Enter email" 
        value={credentials.email} 
        onChange={evt => setCredentials(prev => ({...prev, email:evt.target.value}))}/><br/>

      <input 
        type="password" 
        value={credentials.password} 
        onChange={evt => setCredentials(prev => ({...prev, password:evt.target.value}))}/><br/>
      <button onClick={onLogin}>Login</button>
      </div>}

      {isLoggedIn && <button onClick={onLogout}>Log Out</button>}
      <hr/>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user=><tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.active ? "Active" : "Inactive"}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default App
