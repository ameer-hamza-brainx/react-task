import React, { useState } from 'react';
import "../styles/login.css"

function LogIn() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);

    // Clear the form fields after submission
    setUsername('');
    setPassword('');
  };

  function setUser(name){
        console.log(name);
        setUsername(name);
  }
  function setPass(pass){
        console.log(pass);
        setPassword(pass);
  }

  return (
    <>
    <div className="login-page">
      <form onSubmit={handleSubmit} className='center-patch'>
        <h2>Login Page</h2>
        <div >
          <input
            className="input-field"
            type="text"
            id="username"
            name="username"
            placeholder='username'
            value={username}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="input-field"
            type="password"
            id="password"
            name="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button className='sub-btn' type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default LogIn;
