import React, { useState } from 'react';
import '../../App.css'; // Import the main styling, shared CSS file
import '../Login/Login.css'; // Import the user profile styling
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";


export const Login = () => {
    const [values, setValues] = useState({
      email: "",
      password: ""
    });
  
    const [errors, setErrors] = useState({
      email: "",
      password: ""
    });
  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value
        });
      
        // Validation 
        if (name === "email") {
          const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      
          setErrors({
            ...errors,
            email: value === "" ? "Email cannot be empty" : isEmailValid ? "" : "Invalid email format"
          });
        } else if (name === "password") {
          setErrors({
            ...errors,
            password: value === "" ? "Password cannot be empty" : ""
          });
        }
      };
  
    const handleLogin = () => {
      if (values.email === "" || values.password === "") {
        alert("Bitte fülle alle Felder aus.");
      } else {
        console.log("Anmeldeversuch mit folgenden Daten:", values);
      }
    };

  return (
    <div className='container'>
        <div className="header">
            <div className="box">
                <div className="inputs">
                    <div className="input">
                        <img src= {email_icon} alt="Email Icon" />
                        <input type="text" placeholder='Email'
                        name='email'
                        value={values.email} onChange={handleChange}/> 
                    </div>
                    <div className="error-message">{errors.email}</div>
                    <div className="input">
                        <img src= {password_icon} alt="Password Icon" />
                        <input type="password" placeholder='Password' name='password'
                        value={values.password} onChange={handleChange} />
                    </div>
                    <div className="error-message">{errors.password}</div>
                </div>
                <div className="Login_Container">
                <div className="button"><button onClick={handleLogin}><span>Login</span></button></div>
                <div className="passwort_vergessen">Forgot Password? <span>Click here to reset!</span></div>    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login;



