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
      console.log(selectedButtons)
    }
  };

  const isChecked = (item) => {
    for (let i = 0; i < checkedLists.length; i++) {
        const checkedList = checkedLists[i];
        if (checkedList.includes(item)) {
            return "checked-item";
        }
    }
    return "not-checked-item";
};

  const handleCheck = (event, checklistIndex) => {
    if (totalSelected >= 5 && !event.target.checked) {
      // If the user is unchecking an item and has already selected 5, do nothing
      return;
    }

    const updatedLists = [...checkedLists];
    const checklist = updatedLists[checklistIndex];

    if (event.target.checked) {
      if (totalSelected < 5) {
        // Allow selection only if totalSelected is less than 3
        checklist.push(event.target.value);
        setTotalSelected(totalSelected + 1);
      }else {
        // Display message if user attempts to select more than 5 items
        alert("You can select up to 5!");
      }
    } else {
      const index = checklist.indexOf(event.target.value);
      checklist.splice(index, 1);
      setTotalSelected(totalSelected - 1);
    }

    updatedLists[checklistIndex] = checklist;
    setCheckedLists(updatedLists);
    console.log(checkedLists)
  };


  return (
    <div className="profile-container">
      <div className="blue-box">
        <h2 className="profile-title">My Profile</h2>

        <div className="white-box">
          <div className="profile-photo">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="User's default photo" />{/* functionality to be added: when clicked, user selects a new picture */}
          </div>

          <div className="personal-info-content">
            <h3 class="title-h3">Personal Information</h3>
            <div className="info-field">
              <span class="span-info">First Name:</span>
              <input type="text"  />
            </div>
            <div className="info-field">
              <span class="span-info">Last Name:</span>
              <input type="text"  />
            </div>
            <div className="info-field">
              <span class="span-info">City:</span>
              <input type="text"  />
            </div>
            <div className="info-field">
              <span class="span-info">Country:</span>
              <input type="text"  />
            </div>
            <div className="info-field">
              <span class="span-info">Postal code:</span>
              <input type="text"  />
            </div>
            <div className="info-field">
              <span class="span-info">Email:</span>
              <input type="email"  />
            </div>
            <div className="info-field">
              <span class="span-info">Phone number:</span>
              <input type="tel"  />
            </div>
            <div className="info-field">
              <span class="span-info">LinkedIn profile:</span>
              <input type="url"  />
            </div>
          </div>
        </div>

        <div className="white-box about-you-content">
          <h3 class="title-h3">About Me</h3>
          <div className="info-field answer-text">
            <span class="span-about">Describe yourself to an organization in 3-4 sentences:</span>
            <textarea
              />
          </div>
          <div className="info-field answer-text">
            <span class="span-about">What languages do you speak? (Separate the languages you are fluent in with commas)</span>
            <input type="text"  />
          </div>
        </div>

        <div className="white-box availability-content">
          <h3 class="title-h3">Availability</h3>
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
            <input type="text"  />
          </div>
        </div>

        <div className="last-box interests-content">
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
                                checked={checkedLists[index].includes(item)}
                            />
                            <span className={isChecked(item)}>{item}</span>
                          </div>
                      ))}
                  </div>
              </div>
          ))}

        </div>
        </div>
        <button className="save-button">
        Save
        </button>
        </div>
 
    </div>
  );
};


export default Profile;