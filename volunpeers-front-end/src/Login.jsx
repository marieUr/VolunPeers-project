// import React, { useState } from 'react';
// import './App.css'; // Import the main styling, shared CSS file
// import './Login.css'; // Import the user profile styling



// const Login = () => {
//     const [selectedButtons, setSelectedButtons] = useState([]);
  
//     };

    

// export default Login;

import React from 'react';
import './App.css'; // Import the main styling, shared CSS file
import './Login.css'; // Import the user profile styling
import user_icon from "./components/Assets/person.png";
import email_icon from "./components/Assets/email.png";
import password_icon from "./components/Assets/password.png";


export const Login = () => {
  return (
    <div className='container'>
            <div className="underline">
                <div className="inputs">
                    <div className="input">
                        <img src= {user_icon} alt="" />
                        <input type="Username" />
                    </div>
                    <div className="input">
                        <img src= {email_icon} alt="" />
                        <input type="Email-Adresse" />
                    </div>
                    <div className="input">
                        <img src= {password_icon} alt="" />
                        <input type="Passwort" />
                    </div>
                    <div className="password_forgot">Passwort vergessen? <span>Hier klicken!</span></div>
                </div>
                <div className="submit_container">
                    <div className="submit">Sign up</div>
                    <div className="submit">Login</div>
                </div>
        </div>

    </div>
  )
}

export default Login;



