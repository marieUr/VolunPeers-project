import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Login_Validation.js';
import '../../App.css'; // Import the main styling, shared CSS file
import '../Login/Login.css'; // Import the user profile styling
// import email_icon from '../Assets/email.png';
// import password_icon from '../Assets/password.png';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";




export const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validation
    if (name === 'email') {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      setErrors({
        ...errors,
        email:
          value === ''
            ? 'Email cannot be empty'
            : isEmailValid
            ? ''
            : 'Invalid email format',
      });
    } else if (name === 'password') {
      setErrors({
        ...errors,
        password: value === '' ? 'Password cannot be empty' : '',
      });
    }
  };

  const handleLoginClick = async () => {
    try {
      // The post request for the endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        // makes the json values strings
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('login failed');
      }

      // Extract token from the response from the server
      const { token } = await response.json();

      // Call handleLogin function from AuthContext
      handleLogin(token);

      // Store the token in local storage
      localStorage.setItem('accessToken', token);

      // Redirect the user to another page (e.g., dashboard) after successful login
      navigate('/');
    } catch (error) {
      // Catching to see if the login is failing, will not be a console log but an error
      console.error('error logging in:', error);
    }

    if (values.email === '' || values.password === '') {
      alert('Bitte fülle alle Felder aus.');
      console.log(`${values.email && values.name}`);
    } else {
      console.log('Anmeldeversuch mit folgenden Daten:', values);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="box">
          <div className="inputs">
            <div className="input">
            <MdEmail className="iconWhite" />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="error-message">{errors.email}</div>
            <div className="input">
            <RiLockPasswordFill className="iconWhite" />
              <input
                type="password"
                placeholder="Password" 
                name="password"
                minLength={8}
                required
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div className="error-message">{errors.password}</div>
          </div>
          <div className="LoginContainer">
            <div className="button">
              <button onClick={handleLoginClick}>
                <span>Login</span>
              </button>
            </div>
            <div className="passwortVergessen">
              Forgot Password? <span>Click here to reset!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
