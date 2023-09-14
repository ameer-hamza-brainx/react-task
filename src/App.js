import LogIn from './components/LogIn';
import SignUp from "./components/SignUp";
import EmailVerify from './components/EmailVerify';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ToDo from './components/ToDo';
import "./styles/login.css"
import './App.css';
import "./styles/signup.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ToDo/> }/>
        <Route exact path="/login" element={<LogIn/> }/>
        <Route exact path="/signup" element={<SignUp/> }/>
        <Route exact path="/emailverify" element={<EmailVerify/> }/>
        <Route exact path="/forgotpassword" element={<ForgotPassword/> }/>
        <Route exact path="/resetpassword" element={<ResetPassword/> }/>
      </Routes>
    </Router>
  );
}

export default App;
