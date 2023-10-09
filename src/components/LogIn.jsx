import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail } from '../actions/index';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { loggedIn } from '../actions/index';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

function LogIn() {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUser, setIsValidUser] = useState(true);
  const dispatch = useDispatch();
  const loggedState = useSelector((state)=> state.authentication);


  useEffect(() => {
    if(loggedState)
    {
      navigate("/todo");
    }
  }, [])
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try
    {
      await axios.post("http://localhost:5000/signin",{
        email,password
      }).then(res=>{
        if(!res.data.error)
        {

          setIsValidUser(true);
          if(res.data.isVerified)
          {
            dispatch(setEmail(email));
            dispatch(loggedIn());
            navigate("/todo");
            
          }
          else
          {
            dispatch(setEmail(email));
            navigate("/emailverify");
          }
        }
        else
        {
          setIsValidUser(false);
        }
      }).catch(e=>{
        setIsValidUser(false);
        console.log(e);
      })
    }
    catch(e)
    {
      console.log(e);
    }
  };

  function setUser(name){
        setemail(name);
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
            id="email"
            name="email"
            placeholder='email'
            value={email}
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
        <Link to='/forgotpassword' className='signup-link'>Forgot password?</Link>
        <Link to='signup' className='signup-link'>Don't have an account? click here to sign up</Link>
      </form>
    </div>
    </>
  );
}

export default LogIn;
