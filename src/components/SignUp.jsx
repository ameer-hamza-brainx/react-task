import React, { useState } from 'react';
import "../styles/signup.css"

function SignUp() {
  
    const [name, setName] = useState('');
    const [nameValidity, setNameValidity] = useState(true)

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passErrorFlag, setPassErrorFlag] = useState(true)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [isValid, setIsValid] = useState(true);

    const onlyNumbersOrSpecial = /^[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!isValid || !nameValidity || !passErrorFlag)
    {
        return;
    }
    else
    {
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
        <a href='#' className='signup-link'>Already have an account? click here to sign in</a>
      </form>
    </div>
    </>
  );
}

export default SignUp;
