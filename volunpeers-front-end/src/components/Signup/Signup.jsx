import React, { useState } from 'react';
import '../../App.css'; // Import the main styling, shared CSS file
import '../Signup/Signup.css'; // Import the user profile styling
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";


export const Signup = () => {

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
    
      const handleSignup = () => {
       
      };
    
    return (
        <div className="container">
            <div className="header">
                <div className="box">
                    <div className="inputs">
                        <div className="input">
                            <img src={email_icon} alt="Email.Icon"/>
                            <input type="Email-Adress" placeholder='Email'
                             name='email'
                             value={values.email}
                             onChange={handleChange}/>
                        </div>
                        <div className="error-message">{errors.email}</div>
                        <div className="input">
                            <img src={password_icon} alt="Passwort"/>
                            <input type="Passwort" placeholder='Password'
                              name='password'
                              value={values.password}
                              onChange={handleChange} />
                        </div>
                            <div className="error-message">{errors.password}</div>
                        
                    </div>
                    <div className="Signup_Container">
                    <div className="button"><button onClick={handleSignup}><span>Signup</span></button></div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

  export default Signup;