import LogIn from './components/LogIn';
import SignUp from "./components/SignUp";
import EmailVerify from './components/EmailVerify';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import "./styles/login.css"
import './App.css';
import "./styles/signup.css"

function App() {
  return (
    <div className="App">
      <LogIn />
      <SignUp />
      <EmailVerify />
      <ForgotPassword />
      <ResetPassword />
    </div>
  );
}

export default App;
