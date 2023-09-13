import React, { useState } from 'react';
import { emailRegex, onlyNumbersOrSpecial } from "../global-constants"
import { Link } from 'react-router-dom';

function SignUp() {
  
    const [name, setName] = useState('');
    const [nameValidity, setNameValidity] = useState(true)

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passErrorFlag, setPassErrorFlag] = useState(true);

    //test
    

    const [isValid, setIsValid] = useState(true);

    

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!isValid || !nameValidity || !passErrorFlag)
    {
        return;
    }
    else
    {
        let obj = {
        name:name,
        password:password,
        emailVerified:false
      }
        localStorage.setItem(email, JSON.stringify(obj));
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
  };

  function setUser(name){
        setName(name);
        setNameValidity(!onlyNumbersOrSpecial.test(name));
  }
  function setEmailValue(emailPass){
        setEmail(emailPass);
        setIsValid(emailRegex.test(emailPass));
  }
  function setPass(pass){
        setPassword(pass);
        if(pass === confirmPassword)
        {
            setPassErrorFlag(true);
        }
  }
  function setConPass(confirmPassword){
      setConfirmPassword(confirmPassword);
        password !== confirmPassword?setPassErrorFlag(false):setPassErrorFlag(true);

        
  }

  return (
    <>
    <div className="login-page">
      <form onSubmit={handleSubmit} className='center-patch-signup'>
        <h2>SignUp Page</h2>
        <div >
          <input
            className="input-field"
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            value={name}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className='error'>{nameValidity?"":"Name is not valid!"}</div>
        <div >
          <input
            className="input-field"
            type="text"
            id="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmailValue(e.target.value)}
            required
          />
        </div>
        <div className='error'>{isValid?"":"Email not valid!"}</div>

        <div className="form-group">
          <input
            className="input-field"
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <div className='error'></div>

        <div className="form-group">
          <input
            className="input-field"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConPass(e.target.value)}
            required
          />
        </div>
        <div className='error'>{passErrorFlag?"":"Password and confirm password not same!"}</div>

        <button className='sub-btn' type="submit">SignUp</button>
        <Link to='/' className='signup-link'>Already have an account? click here to sign in</Link>
      </form>
    </div>
    </>
  );
}

export default SignUp;
