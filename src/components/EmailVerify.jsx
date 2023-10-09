import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { loggedIn } from '../actions/index';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function EmailVerify() {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState('');
  const [otpFlag, setOtpFlag] = useState(true);
  const emailState = useSelector((state)=> state.email.email)
  const dispatch = useDispatch();

  // TODO: Replace this hard-coded otp with a configurable one
  const storedOTP = "123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if(OTP===storedOTP)
    {
        setOtpFlag(true);
        setOTP('');
        axios.post("http://localhost:5000/verifyEmail",{
          emailState
        }).then(res=>{
          if(!res.data.error)
          {
            alert("email has been verified");
            dispatch(loggedIn());
            navigate("/todo");
          }
        }).catch(e)
        {
          console.log(e);
        }
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
