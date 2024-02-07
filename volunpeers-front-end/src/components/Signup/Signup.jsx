import React, { useState } from 'react';
import '../../App.css'; // Import the main styling, shared CSS file
import '../Signup/Signup.css'; // Import the user profile styling
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md';

export const Signup = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [isCompany, setIsCompany] = useState(null);

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

  const handleRadioChange = (event) => {
    setIsCompany(event.target.id === 'Option1');
  };

  const handleSignup = async () => {
    if (values.email === '' || values.password === '') {
      alert('Please fill in all the fields');
      console.log(`${values.email && values.name}`);
      return; // exit function
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(values.email)) {
      alert('Please enter a valid email address');
      return; // Exit the function if email format is invalid
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('sign-up failed');
      } else {
      }
    } catch (error) {
      console.error('error signing up:', error);
    }
  };

  return (
    <div className="signupContainer">
      <div className="header">
        <form onSubmit={handleSignup}>
          <div className="box">
            <div className="inputs">
              <div className="input">
                <FaUser className="iconWhite" />
                <input
                  type="text"
                  placeholder="First name"
                  required
                  name="vorname"
                  value={values.vorname}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <FaUser className="iconWhite" />
                <input
                  type="text"
                  placeholder="Surname"
                  required
                  name="nachname"
                  value={values.nachname}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <MdEmail className="iconWhite" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="error-message">{errors.email}</div> */}
              <div className="input">
                <RiLockPasswordFill className="iconWhite" />
                <input
                  type="Password"
                  placeholder="Password"
                  required
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="error-message">{errors.password}</div> */}
            </div>
            <div className="companyField">
              <p>Are you a company?</p>
            </div>
            <div className="companyContainer">
              <div className="radio">
                <input
                  type="radio"
                  name="radio"
                  id="Option1"
                  onChange={handleRadioChange}
                />
                <label htmlFor="Option1" className="label1">
                  <span>Yes</span>
                </label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="radio"
                  id="Option2"
                  onChange={handleRadioChange}
                />
                <label htmlFor="Option2" className="label2">
                  <span>No</span>
                </label>
              </div>
            </div>
            {isCompany && (
              <div className="additionalFields">
                <div className="inputs">
                  <div className="input">
                    <MdHomeWork className="iconWhite" />
                    <input type="text" placeholder="Name of company" required />
                  </div>
                  <div className="input">
                    <IoLocation className="iconWhite" />
                    <input type="text" placeholder="Location" required />
                  </div>
                </div>
              </div>
            )}
            <div className="SignupBox">
              <div className="button">
                <button type="submit">Signup</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
