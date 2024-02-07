import React from 'react';
import './Donation.css';
import RiverImage from '../../Images/pexels-iwaria-RiversCity.webp';

function Description() {
  return (
    <div className="DescriptionSection">
      <div className="Description-Rectangle">
        <div className="Description-Text">
          <h3>Support VolunPeers</h3>
          <p>
            Join us in preserving our planet! Your support can make a difference
            in reducing pollution and protecting ecosystems. Whether you donate,
            volunteer, or spread the word, every action counts.
          </p>
          <ul>
            <li>
              &#8226; Donate: Your contributions fund initiatives for a greener
              future.
            </li>
            <li>
              &#8226; Volunteer: Get involved in hands-on activities like
              clean-up efforts.
            </li>
            <li>
              &#8226; Spread the word: Share our message with friends and
              family.
            </li>
          </ul>
          <p>Your support enables us to make an impact:</p>
          <ul>
            <li>
              &#8226; Environmental Impact: Protecting ecosystems for future
              generations.
            </li>
            <li>
              &#8226; Community Building: Join a vibrant community of
              sustainability enthusiasts.
            </li>
            <li>
              &#8226; Personal Growth: Gain skills and fulfillment through
              volunteering.
            </li>
          </ul>
          <p>
            Take action today. Together, we can create a world where people and
            planet thrive harmoniously.
          </p>
          <button className="donate-button">Donate Now</button>
        </div>
        <div className="Image-Box">
          <img src={RiverImage} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Description;
