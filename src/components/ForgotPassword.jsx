import React, { useState } from 'react';
import "../styles/login.css"

function ForgotPassword() {
  
  const [email, setEmail] = useState('');
  const [userExist, setUserExist] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let jsonobj = localStorage.getItem(email);
    if(jsonobj === null)
    {
      setUserExist(false);
    }
    else
    {
      setEmailValue('');
      setUserExist(true);
      window.location.href = "./emailverify";
    }
  };

  function setEmailValue(email){
        setEmail(email);
  }

  return (
    <>
    <div className="login-page">
      <form onSubmit={handleSubmit} className='center-patch'>
        <h2>Forget Password</h2>
        <div>Enter your email</div>
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
        <div className='error'>{userExist?"":"User not exist!"}</div>
        <button className='sub-btn' type="submit">submit</button>
      </form>
    </div>
    </>
  );
}

export default ForgotPassword;
