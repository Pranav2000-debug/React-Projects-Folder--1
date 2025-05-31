import { useState, useContext } from 'react'
import UserContext from '../context/userContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // method to add the details to the context
  const {setUser} = useContext(UserContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    setUser({username, password}) // updating the user state in the Provider (adding the object with username and password as properties)
  }
  return (
    <div>
      <h2 style={{color: "whitesmoke", paddingBottom: "20px"}}>Login</h2>
      <input style={{marginRight: "10px"}}
      type="text" 
      value={username}
      placeholder='username'
      onChange={(e) => setUsername(e.target.value)}
      />
      <input 
      type="password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password'
      />
      <button onClick={handleSumbit}>Login</button>
    </div>
  )
}

export default Login