//login page 
import  {React, useState } from 'react';
const LogIn =() =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Your login logic here
    }
  
    return (
      <div id='Login-form'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={handleUsernameChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="password">Username:</label>
            <input 
              type="text" 
              id="password" 
              value={password} 
              onChange={handlePasswordChange} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default LogIn;
