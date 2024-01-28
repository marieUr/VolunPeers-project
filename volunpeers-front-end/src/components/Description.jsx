import React from 'react';
import './GeneralStyling.css';
import CityImage from './../Images/citywithpark.webp';

function Description() {
  return (
    <div className="DescriptionSection">
      <div className="Description-Rectangle">
        <div className="Description-Text">
          <h3>Why it matters to help our Planet</h3>
          <p></p>
        </div>
        <div className="Image-Box">
          <img src={CityImage} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Description;
