import React, { useState } from 'react';


function LogIn() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear the form fields after submission
    setUsername('');
    setPassword('');
  };

  function setUser(name){
        setUsername(name);
  }
  function setPass(pass){
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
        <div className='error'></div>
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
        <div className='error'></div>
        <button className='sub-btn' type="submit">Login</button>
        <a href='#' className='signup-link'>Forgot password?</a>
        <a href='#' className='signup-link'>Don't have an account? click here to sign up</a>
      </form>
    </div>
    </>
  );
}

export default LogIn;
