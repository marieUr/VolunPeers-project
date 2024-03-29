import React from 'react';
import './Description.css';
import RiverImage from '../../Images/pexels-iwaria-RiversCity.webp';

function Description() {
  return (
    <div className="DescriptionSection">
      <div className="Description-Rectangle">
        <div className="Description-Text">
          <h3>Why it matters to help our Planet 🌱</h3>
          <p>
            Embrace the Green Revolution! Join us in making a difference by
            volunteering to clean and preserve our planet. Every action counts,
            and together, we can create a healthier, cleaner world for all.
          </p>
          <h4>The change we bring</h4>
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
          <p></p>
        </div>
        <div className="Image-Box">
          <img src={RiverImage} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Description;
