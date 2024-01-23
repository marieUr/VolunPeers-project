import React, { useState } from 'react';
import './App.css'; // Import the main styling, shared CSS file
import './Profile.css'; // Import the user profile styling

const Profile = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonText) => {
    if (selectedButtons.includes(buttonText)) {
      // Deselect the button
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
    } else {
      // Select the button
      setSelectedButtons([...selectedButtons, buttonText]);
    }
  };

  return (
    <div className="profile-container">
      <div className="grey-box">
        <h2 className="profile-title">Your Profile</h2>

        <div className="white-box">
          <div className="profile-photo">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="User" />
          </div>

          <div className="white box personal-info-content">
            <h3>Personal Information</h3>
            <div className="info-field">
              <span>First Name:</span>
              <input type="text" defaultValue="John" readOnly />
            </div>
            <div className="info-field">
              <span>Last Name:</span>
              <input type="text" defaultValue="Doe" readOnly />
            </div>
            <div className="info-field">
              <span>City:</span>
              <input type="text" defaultValue="Paris" readOnly />
            </div>
            <div className="info-field">
              <span>Country:</span>
              <input type="text" defaultValue="France" readOnly />
            </div>
            <div className="info-field">
              <span>Postal code:</span>
              <input type="text" defaultValue="92130" readOnly />
            </div>
            <div className="info-field">
              <span>Email:</span>
              <input type="email" defaultValue="john.doe@example.com" readOnly />
            </div>
            <div className="info-field">
              <span>Phone number:</span>
              <input type="tel" defaultValue="+3034567890" readOnly />
            </div>
            <div className="info-field">
              <span>LinkedIn profile:</span>
              <input type="url" defaultValue="https://linkedin.com/in/johndoe" readOnly />
            </div>
          </div>
        </div>

        <div className="white-box about-you-content">
          <h3>About You</h3>
          <div className="info-field answer-text">
            <span>Describe yourself to an organization in 3-4 sentences:</span>
            <textarea
              defaultValue="Hello! I'm 32 years old, fueled by a passion for giving back. You'll often find me exploring the great outdoors, or experimenting in the kitchen. With a background in environmental science and a knack for data analysis, I envision using my research and problem-solving skills to contribute meaningfully as a volunteer. Let's embark on this journey together and make a difference!"
              readOnly
            />
          </div>
          <div className="info-field answer-text">
            <span>What languages do you speak? (Separate the languages you are fluent in with commas)</span>
            <input type="text" defaultValue="French, English" readOnly />
          </div>
        </div>

        <div className="white-box availability-content">
          <h3>Your Availability</h3>
          <div className="availability-field">
            <span>When?</span>
            <div className="availability-buttons">
              <button
                className={selectedButtons.includes("Weekdays: Daytimes Monday-Friday") ? "clicked-button" : ""}
                onClick={() => handleButtonClick("Weekdays: Daytimes Monday-Friday")}
              >
                Weekdays: Daytimes Monday-Friday
              </button>
              <button
                className={selectedButtons.includes("Weeknights: Evenings Monday-Friday") ? "clicked-button" : ""}
                onClick={() => handleButtonClick("Weeknights: Evenings Monday-Friday")}
              >
                Weeknights: Evenings Monday-Friday
              </button>
              <button
                className={selectedButtons.includes("Weekends: Anytime Saturday-Sunday") ? "clicked-button" : ""}
                onClick={() => handleButtonClick("Weekends: Anytime Saturday-Sunday")}
              >
                Weekends: Anytime Saturday-Sunday
              </button>
            </div>
          </div>
          <div className="availability-field answer-text">
            <span>Where? (Separate your desired locations with commas) </span>
            <input type="text" defaultValue="Paris, Rouen, Amiens" readOnly />
          </div>
        </div>

        <div className="white-box interests-content">
          <h3>Interests</h3>
          <div className="interests-columns">
            <div className="interests-column">
              <h4>Environment & Conservation</h4>
              <ul>
                <li>
                  <input type="checkbox" id="animals-wildlife" />
                  <label htmlFor="animals-wildlife">Animals & Wildlife</label>
                </li>
                <li>
                  <input type="checkbox" id="env-conservation" />
                  <label htmlFor="env-conservation">Environment & Conservation</label>
                </li>
                <li>
                  <input type="checkbox" id="farming-agriculture" />
                  <label htmlFor="farming-agriculture">Farming & Agriculture</label>
                </li>
                <li>
                  <input type="checkbox" id="marine-conservation" />
                  <label htmlFor="marine-conservation">Marine Conservation</label>
                </li>
              </ul>
            </div>
            <div className="interests-column">
              <h4>Humanitarian Aid</h4>
              <ul>
                <li>
                  <input type="checkbox" id="childcare-daycare" />
                  <label htmlFor="childcare-daycare">Childcare & Daycare Support</label>
                </li>
                <li>
                  <input type="checkbox" id="healthcare" />
                  <label htmlFor="healthcare">Healthcare</label>
                </li>
                <li>
                  <input type="checkbox" id="special-needs" />
                  <label htmlFor="special-needs">Special Needs</label>
                </li>
                <li>
                  <input type="checkbox" id="education" />
                  <label htmlFor="education">Education</label>
                </li>
              </ul>
            </div>
            <div className="interests-column">
              <h4>Community Services</h4>
              <ul>
                <li>
                  <input type="checkbox" id="building-construction" />
                  <label htmlFor="building-construction">Building & Construction</label>
                </li>
                <li>
                  <input type="checkbox" id="community-development" />
                  <label htmlFor="community-development">Community Development</label>
                </li>
                <li>
                  <input type="checkbox" id="culture-arts" />
                  <label htmlFor="culture-arts">Culture & Arts</label>
                </li>
                <li>
                  <input type="checkbox" id="human-womens-rights" />
                  <label htmlFor="human-womens-rights">Human & Women's Rights</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
