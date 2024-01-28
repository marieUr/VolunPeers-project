import React, { useState } from 'react';
import '../../App.css'; // Import the main styling, shared CSS file
import './Profile.css'; // Import the user profile styling

const Profile = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [checkedLists, setCheckedLists] = useState([[], [], []]);
  const [totalSelected, setTotalSelected] = useState(0);

  // Define checkLists array and isChecked function
  const checkLists = [
    {
      title: "Environment & Conservation",
      items: ["Animals & Wildlife", "Environment & Conservation", "Farming & Agriculture", "Marine Conservation"],
    },
    {
      title: "Humanitarian Aid",
      items: ["Childcare & Daycare Support", "Healthcare", "Special Needs", "Education"],
    },
    {
      title: "Community Services",
      items: ["Building & Construction", "Community Development", "Culture & Arts", "Human & Women's Rights"],
    },
  ];


  const handleButtonClick = (buttonText) => {
    if (selectedButtons.includes(buttonText)) {
      // Deselect the button
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
    } else {
      // Select the button
      setSelectedButtons([...selectedButtons, buttonText]);
    }
  };

  const isChecked = (item, checklistIndex) => {
    const checkedList = checkedLists[checklistIndex];
    return checkedList.includes(item) ? "checked-item" : "not-checked-item";
  };

  const handleCheck = (event, checklistIndex) => {
    if (totalSelected >= 3 && !event.target.checked) {
      // If the user is unchecking an item and has already selected 3, do nothing
      return;
    }

    const updatedLists = [...checkedLists];
    const checklist = updatedLists[checklistIndex];

    if (event.target.checked) {
      if (totalSelected < 3) {
        // Allow selection only if totalSelected is less than 3
        checklist.push(event.target.value);
        setTotalSelected(totalSelected + 1);
      }
    } else {
      const index = checklist.indexOf(event.target.value);
      checklist.splice(index, 1);
      setTotalSelected(totalSelected - 1);
    }

    updatedLists[checklistIndex] = checklist;
    setCheckedLists(updatedLists);
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
            <h3 class="title-h3">Personal Information</h3>
            <div className="info-field">
              <span class="span-info">First Name:</span>
              <input type="text" defaultValue="John" readOnly />
            </div>
            <div className="info-field">
              <span class="span-info">Last Name:</span>
              <input type="text" defaultValue="Doe" readOnly />
            </div>
            <div className="info-field">
              <span class="span-info">City:</span>
              <input type="text" defaultValue="Paris" readOnly />
            </div>
            <div className="info-field">
              <span class="span-info">Country:</span>
              <input type="text" defaultValue="France" readOnly />
            </div>
            <div className="info-field">
              <span class="span-info">Postal code:</span>
              <input type="text" defaultValue="92130" readOnly />
            </div>
            <div className="info-field">
              <span class="span-info">Email:</span>
              <input type="email" defaultValue="john.doe@example.com" readOnly />
            </div>
            <div className="info-field">
              <span class="span-info">Phone number:</span>
              <input type="tel" defaultValue="+3034567890" readOnly />
            </div>
            <div className="info-field">
              <span class="span-info">LinkedIn profile:</span>
              <input type="url" defaultValue="https://linkedin.com/in/johndoe" readOnly />
            </div>
          </div>
        </div>

        <div className="white-box about-you-content">
          <h3 class="title-h3">About You</h3>
          <div className="info-field answer-text">
            <span class="span-about">Describe yourself to an organization in 3-4 sentences:</span>
            <textarea
              defaultValue="Hello! I'm 32 years old, fueled by a passion for giving back. You'll often find me exploring the great outdoors, or experimenting in the kitchen. With a background in environmental science and a knack for data analysis, I envision using my research and problem-solving skills to contribute meaningfully as a volunteer. Let's embark on this journey together and make a difference!"
              readOnly
            />
          </div>
          <div className="info-field answer-text">
            <span class="span-about">What languages do you speak? (Separate the languages you are fluent in with commas)</span>
            <input type="text" defaultValue="French, English" readOnly />
          </div>
        </div>

        <div className="white-box availability-content">
          <h3 class="title-h3">Your Availability</h3>
          <div className="availability-field">
            <span class="span-about">When?</span>
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
            <span class="span-availability">Where? (Separate your desired locations with commas) </span>
            <input type="text" defaultValue="Paris, Rouen, Amiens" readOnly />
          </div>
        </div>

        <div className="white-box interests-content">
          <h3 class="title-h3">Interests</h3>
            <div className="checkLists">
              {checkLists.map((checklist, index) => (
                <div className="checkList" key={index}>
                  <div className="title">{checklist.title}</div>
                  <div className="list-container">
                    {checklist.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <input
                          value={item}
                          type="checkbox"
                          onChange={(event) => handleCheck(event, index)}
                        />
                        <span className={isChecked(item, index)}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {checkedLists.map((checkedList, index) => (
                <div key={index}>
                  {`Items checked in ${checkLists[index].title} are: ${checkedList.join(", ")}`}
                </div>
              ))}
            </div>
        </div>
    </div>
    </div>
  );
};


export default Profile;