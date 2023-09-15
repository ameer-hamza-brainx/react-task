import React, { useState } from 'react';

function ForgotPassword() {
  
  const [email, setEmail] = useState('');
  const [userExist, setUserExist] = useState(true);
  const [resetLink, setResetLink] = useState('')

    
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let jsonobj = localStorage.getItem(email);
    if(jsonobj === null)
    {
      setUserExist(false);
    }
    else
    {
      setUserExist(true);
      const token = generateToken(16);
      console.log(token);
      localStorage.setItem(token,email)
      setResetLink("./resetpassword?token="+token);
      setEmailValue('');
    }
  };
  function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }
    return token;
  }

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
        <a href={resetLink} className='signup-link'>{!resetLink?"":"Follow this link to reset password"}</a>
      </form>
    </div>
    </>
  );
}

export default ForgotPassword;
