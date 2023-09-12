import React, { useState } from 'react';
import "../styles/login.css"

function EmailVerify() {
  
  const [OTP, setOTP] = useState('');
  const [otpFlag, setOtpFlag] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(OTP=='123')
    {
        setOtpFlag(true);
        setOTP('');
    }
    else
    {
        setOtpFlag(false);
    }

  };

  function setOtp(otp){
        setOTP(otp);
  }

  return (
    <>
    <div className="login-page">
      <form onSubmit={handleSubmit} className='center-patch'>
        <h2>Email Verification Page</h2>
        <div>Enter OTP sent to your email</div>
        <div >
          <input
            className="input-field"
            type="text"
            id="otp"
            name="otp"
            placeholder='OTP'
            value={OTP}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <div className='error'>{otpFlag?"":"Wrong OTP"}</div>
        <button className='sub-btn' type="submit">submit</button>
      </form>
    </div>
    </>
  );
}

export default EmailVerify;
