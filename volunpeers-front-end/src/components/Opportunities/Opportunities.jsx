import React from 'react';
import './OpportunityStyling.css';
import CityImage from '../../Images/citywithpark.webp';
import OpportunityBox from '../../components/Opportunities/OpportunityBox.jsx';

function Opportunities() {
  return (
    <div className="breaker">
      <div className="mainSectionOpportunities">
        <div className="opportunitySection">
          <h2>
            Volunteering Opportunities at{' '}
            <span className="CompanyName"> VolunPeers</span>
          </h2>
        </div>
        <div className="dividerOpp">
          <OpportunityBox />
          <OpportunityBox />
          <OpportunityBox />
        </div>
      </div>
      <hr></hr>
      <button
        className="OpportunityButtonMain"
        aria-label="View all Opportunities"
      >
        View all Opportunities
      </button>
      <hr></hr>
    </div>
  );
}

export default Opportunities;
