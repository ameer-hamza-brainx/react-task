import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail } from '../actions/index';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

function LogIn() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUser, setIsValidUser] = useState(true);
  const dispatch = useDispatch();
  const emailState = useSelector((state)=> state.emailState)

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear the form fields after submission
    let jsonobj = localStorage.getItem(username)
    if(jsonobj === null)
    {
      setIsValidUser(false);
      return;
    }
    else
    {
      let parseObj = JSON.parse(jsonobj);
      if(parseObj.password === password)
      {
        setIsValidUser(true);
        dispatch(setEmail(username));
        console.log(emailState);
        
        // window.location.href = "./todo"
      }
      else{
        setIsValidUser(false);
      }
    }
    
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
        <div className='error'>{isValidUser?"":"Invalid credentials!"}</div>
        <button className='sub-btn' type="submit">Login</button>
        <div>{emailState}</div>
        <Link to='/forgotpassword' className='signup-link'>Forgot password?</Link>
        <Link to='signup' className='signup-link'>Don't have an account? click here to sign up</Link>
      </form>
    </div>
    </>
  );
}

export default LogIn;
