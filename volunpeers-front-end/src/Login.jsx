import React from 'react';
import './App.css'; // Import the main styling, shared CSS file
import './Login.css'; // Import the user profile styling
import user_icon from "./components/Assets/person.png";
import email_icon from "./components/Assets/email.png";
import password_icon from "./components/Assets/password.png";


export const Login = () => {
  return (
    <div className='container'>
        <div className="header"> <p>Login</p>
            <div className="box">
                <div className="inputs">
                    <div className="input">
                        <img src= {user_icon} alt="User Icon" />
                        <input type="Username" />
                    </div>
                    <div className="input">
                        <img src= {email_icon} alt="Email Icon" />
                        <input type="Email-Adresse" />
                    </div>
                    <div className="input">
                        <img src= {password_icon} alt="Password Icon" />
                        <input type="Passwort" />
                    </div>
                    <div className="password_forgot">Forgot password? <span>Click here!</span></div>
                </div>
                <div className="submit_container">
                    <div className="submit">Sign up</div>
                    <div className="submit">Login</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login;



