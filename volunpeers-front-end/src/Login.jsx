import React from 'react';
import './App.css'; // Import the main styling, shared CSS file
import './Login.css'; // Import the user profile styling
// import user_icon from "./components/Assets/person.png";
import email_icon from "./components/Assets/email.png";
import password_icon from "./components/Assets/password.png";


export const Login = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="box">
                <div className="inputs">
                    {/* <div className="input">
                        <img src= {user_icon} alt="User Icon" />
                        <input type="Username" placeholder='Username' />
                    </div> */}
                    <div className="input">
                        <img src= {email_icon} alt="Email Icon" />
                        <input type="Email-Adresse" placeholder='Email'/>
                    </div>
                    <div className="input">
                        <img src= {password_icon} alt="Password Icon" />
                        <input type="Passwort" placeholder='Password' />
                    </div>
                </div>
                <div className="Login_Container">
                <div className="button"><button><span>Login</span></button></div>
                <div className="passwort_vergessen">Forgot Password? <span>Click here to reset!</span></div>    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login;



