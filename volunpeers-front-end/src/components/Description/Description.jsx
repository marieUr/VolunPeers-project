import React from 'react';
import './Description.css';
import CityImage from '../../Images/citywithpark.webp';

function Description() {
  return (
    <div className="DescriptionSection">
      <div className="Description-Rectangle">
        <div className="Description-Text">
          <h3>Why it matters to help our Planet</h3>
          <p>
            Embrace the Green Revolution! 🌱 Join us in making a difference by
            volunteering to clean and preserve our planet. <br></br>Every action
            counts, and together, we can create a healthier, cleaner world for
            all.
          </p>
          <br></br>
          <span>Why it matters:</span>
          <ul>
            <li>
              &#8226; Environmental Impact: Reduce pollution and protect
              ecosystems.
            </li>
            <li>
              &#8226; Community Building: Connect with like-minded individuals
              passionate about sustainability.
            </li>
            <li>
              &#8226; Personal Growth: Gain new skills, experiences, and a sense
              of fulfillment.
            </li>
          </ul>
          <br></br>
          <span>Join us </span>
          <p>
            on a journey to create a cleaner, greener world. Connect with
            industry leaders, attend vibrant networking events, <br></br>
            and choose from a myriad of projects that align with your passion
            and skills.
            <br></br>
            Let your impact shine, and together, let's celebrate a planet
            thriving in sustainability. <br></br>Be part of something
            bigger.#VolunteerForChange and embark on a rewarding
            #SustainabilityJourney! 💚🌏
          </p>
        </div>
        <div className="Image-Box">
          <img src={CityImage} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Description;
