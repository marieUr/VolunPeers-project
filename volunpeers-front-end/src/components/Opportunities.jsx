import React from 'react';
import './GeneralStyling.css';
import CityImage from './../Images/citywithpark.webp';

function Opportunities() {
  return (
    <div className="mainSectionOpportunities">
      <div className="opportunitySection">
        <h2>
          Volunteering Opportunities at{' '}
          <span className="CompanyName"> VolunPeers</span>
        </h2>
      </div>
      <div className="Opportunities">
        <div className="volunteeringOpportunity">
          <div className="OpportunityTitle">
            <h3>Title: </h3>
            <span className="Theme">Theme: </span>
            <span className="Location">Location: </span>
            <img src={CityImage} alt="" />
          </div>
          <span className="Date">
            Date: {new Date().getDate()} / {new Date().getMonth() + 1} /{' '}
            {new Date().getUTCFullYear()}
          </span>
          <div className="TextSection">
            <h4>Company</h4>
            <p>
              Ever wanted to clean the Area? Join us now! Embark on a
              transformative journey to revitalize our city! Join hands in a
              community effort, and together, let's sweep away the chaos, one
              clean street at a time. Your actions today shape a cleaner,
              brighter future for all. #CleanCityRevolution
            </p>
          </div>
        </div>
        <button aria-label="Read more">Read more</button>
      </div>
      <button aria-label="View all Opportunities">
        View all Opportunities
      </button>
    </div>
  );
}

export default Opportunities;
