import React, { useState,useEffect } from 'react';

function ResetPassword() {
  

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passErrorFlag, setPassErrorFlag] = useState(true)

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
  useEffect(() => {

    if (token) {
      // console.log(token);
      const storedToken = localStorage.getItem(token);
      // console.log(storedToken);

      if (storedToken) {
        
      } else {
        alert("Token has been expired");
        window.location.href = "/";
      }
    } else {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!passErrorFlag)
    {
      // console.log(token);
        return;
    }
    else
    {
        let email = localStorage.getItem(token);
        let oldData = JSON.parse(localStorage.getItem(email));
        console.log(oldData);
        oldData.password = password;
        localStorage.setItem(email,JSON.stringify(oldData));
        setPass("");
        setConPass("");
        localStorage.removeItem(token);
        window.location.href = "/";
    }
  };

  
  function setPass(pass){
        setPassword(pass);
        if(pass === confirmPassword)
        {
            setPassErrorFlag(true);
        }
        else
        {
          setPassErrorFlag(false);
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
        <h2>Enter New Password</h2>

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

        <button className='sub-btn' type="submit">Submit</button>
        
      </form>
    </div>
    </>
  );
}

export default ResetPassword;
