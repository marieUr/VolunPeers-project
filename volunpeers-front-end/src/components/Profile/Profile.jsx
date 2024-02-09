import React, { useState, useEffect } from 'react';
import '../../App.css'; // Import the main styling, shared CSS file
import './Profile.css'; // Import the user profile styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-regular-svg-icons';

library.add(faUser);

const Profile = () => {
  const [selectedButtons, setSelectedButtons] = useState([]); // Store selected Availability
  console.log("before checklists");
  const [selectedInterests, setSelectedInterests] = useState([]); // Store selected Interests
  const [checkedInterests, setCheckedInterests] = useState([]);
  console.log("after checklists");
  const [totalSelected, setTotalSelected] = useState(0);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [description, setDescription] = useState('');
  const [languages, setLanguages] = useState('');
  const [locations, setLocations] = useState('');

  const [count, setCount] = useState(0); // Store the count of selected checkboxes

  const [userId, setUserId] = useState('');

  const [selectedPhoto, setSelectedPhoto] = useState(null); // Store selected photo for the user profile. 
  //const userId = '65ba70e4db270847a09b70a6'; // testing
  

  // Define checkLists array and isChecked function
  console.log("before check2");
  const defaultInterests = [
    {
      title: 'Environment & Conservation',
      items: [
        'Animals & Wildlife',
        'Environment & Conservation',
        'Farming & Agriculture',
        'Marine Conservation',
      ],
    },
    {
      title: 'Humanitarian Aid',
      items: [
        'Childcare & Daycare Support',
        'Healthcare',
        'Special Needs',
        'Education',
      ],
    },
    {
      title: 'Community Services',
      items: [
        'Building & Construction',
        'Community Development',
        'Culture & Arts',
        "Human & Women's Rights",
      ],
    },
  ];

  console.log("after check2");

  useEffect(() => {
    // Fetch user information from an API endpoint
    fetchUserInfo();
    console.log("Execute useEffect");
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const fetchUserInfo = async () => {
      const token = localStorage.getItem("accessToken")
      if (token) {
      try {
      // Fetch user information based on userId
      const response = await fetch('/api/usercreds', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
          'content': 'application/json',
        },
      })
      
      if (response.ok) {
        const data = await response.json();
        // Update state variables with fetched data
        setUserId(data._id);
        setFirstName(data.firstname);
        setLastName(data.lastname);
        setCity(data.city);
        setCountry(data.country);
        setPostalCode(data.postalCode);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        setLinkedIn(data.LinkedIn);
        setDescription(data.description);
        setLanguages(data.languages);
        setSelectedButtons(data.selectedButtons);
        setLocations(data.locations);
        console.log("before check3");
        setSelectedInterests(data.selectedInterests);
        console.log("after check3");
        setCount(data.selectedInterests.length);
      } else {
        console.error('Failed to fetch user information');
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  }
};

  const handleSaveProfile = async () => {
    try {
      console.log(selectedInterests);
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`/api/usercreds`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstname,
          lastname,
          city,
          country,
          postalCode,
          email,
          phoneNumber,
          LinkedIn,
          description,
          languages,
          locations,
          selectedButtons,
          selectedInterests
        }),
      });
      // Store the count of selected checkboxes before saving
      console.log(response.body);
      console.log(userId);
      if (response.ok) {
        alert('Profile updated successfully');
      } else {
        console.error('Failed to update profile');
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  console.log(firstname, lastname+ "");

  const handleButtonClick = (buttonText) => {
    if (selectedButtons.includes(buttonText)) {
      // Deselect the button
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
    } else {
      // Select the button
      setSelectedButtons([...selectedButtons, buttonText]);
      console.log(selectedButtons);
    }
  };

  const isChecked = (interestIndex, itemIndex) => {
    return checkedInterests[interestIndex].includes(itemIndex);
  };

  const handleCheck = (event, interestIndex) => {
    const item = event.target.value;
    const isChecked = event.target.checked;
    const newTotal = isChecked ? totalSelected + 1 : totalSelected - 1;

    console.log("isChecked:", isChecked);
    console.log("totalSelected before update:", totalSelected);
    console.log(selectedInterests);
    console.log(count);
    if (newTotal > 5 - count) {
      event.preventDefault();
      alert('You can select up to 5 interests.');
      return;
    }
  
    setTotalSelected(newTotal);
  
    setSelectedInterests(prevState => {
      if (isChecked) {
        return [...prevState, item];
      } else {
        return prevState.filter(val => val !== item);
      }
    });
  };


  const handlePhotoChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    // Future task: uploading new picture to the server
    setSelectedPhoto(file);
  };


  return (
    <div className="profile-container">
      <div className="blue-box">
        <h2 className="profile-title">My Profile</h2>

        <div className="white-box">
          <div className="profile-photo" onClick={() => document.getElementById('photoInput').click()}>
          {selectedPhoto  && typeof selectedPhoto === 'object' ? (
              <img src={URL.createObjectURL(selectedPhoto)} alt="Selected Photo" />
            ) : (
          <FontAwesomeIcon className="profile-icon" icon={faUser} size="1x"/>)}
          </div>
          <input id="photoInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoChange} />

          <div className="personal-info-content">
            <h3 class="title-h3">Personal Information</h3>
            <div className="info-field">
              <span class="span-info">First Name:</span>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="info-field">
              <span class="span-info">Last Name:</span>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="info-field">
              <span class="span-info">City:</span>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="info-field">
              <span class="span-info">Country:</span>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="info-field">
              <span class="span-info">Postal code:</span>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="info-field">
              <span class="span-info">Email:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="info-field">
              <span class="span-info">Phone number:</span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="info-field">
              <span class="span-info">LinkedIn profile:</span>
              <input
                type="url"
                value={LinkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="white-box about-you-content">
          <h3 class="title-h3">About Me</h3>
          <div className="info-field answer-text">
            <span class="span-about">
              Describe yourself to an organization in 3-4 sentences:
            </span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="info-field answer-text">
            <span class="span-about">
              What languages do you speak? (Separate the languages you are
              fluent in with commas)
            </span>
            <input
              type="text"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
            />
          </div>
        </div>

        <div className="white-box availability-content">
          <h3 class="title-h3">Availability</h3>
          <div className="availability-field">
            <span class="span-about">When?</span>
            <div className="availability-buttons">
              <button
                className={
                  selectedButtons.includes('Weekdays: Daytimes Monday-Friday')
                    ? 'clicked-button'
                    : ''
                }
                onClick={() =>
                  handleButtonClick('Weekdays: Daytimes Monday-Friday')
                }
              >
                Weekdays: Daytimes Monday-Friday
              </button>
              <button
                className={
                  selectedButtons.includes('Weeknights: Evenings Monday-Friday')
                    ? 'clicked-button'
                    : ''
                }
                onClick={() =>
                  handleButtonClick('Weeknights: Evenings Monday-Friday')
                }
              >
                Weeknights: Evenings Monday-Friday
              </button>
              <button
                className={
                  selectedButtons.includes('Weekends: Anytime Saturday-Sunday')
                    ? 'clicked-button'
                    : ''
                }
                onClick={() =>
                  handleButtonClick('Weekends: Anytime Saturday-Sunday')
                }
              >
                Weekends: Anytime Saturday-Sunday
              </button>
            </div>
          </div>
          <div className="availability-field answer-text">
            <span class="span-availability">
              Where? (Separate your desired locations with commas){' '}
            </span>
            <input
              type="text"
              value={locations}
              onChange={(e) => setLocations(e.target.value)}
            />
          </div>
        </div>

        <div className="last-box interests-content">
          <h3 class="title-h3">Interests</h3>
          <div className="checkLists">
          {defaultInterests.map((interest, index) => (
              <div className="checkList" key={index}>
                <div className="title">{interest.title}</div>
                <div className="list-container">
                  {interest.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <input
                        value={item}
                        type="checkbox"
                        onChange={(event) => handleCheck(event, index)}
                        checked={selectedInterests.includes(item)}
                      />
                      <span className={selectedInterests.includes(item) ? 'checked-item' : 'not-checked-item'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        </div>
        <button className="save-button" onClick={handleSaveProfile}>
          Save
        </button>
        </div>
 
    </div>
  );
};
export default Profile;