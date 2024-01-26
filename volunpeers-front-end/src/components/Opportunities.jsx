import React from 'react';
import './GeneralStyling.css';

function Opportunities() {
  return (
    <div>
      <div className="opportunitySection">
        <h2>
          Volunteering Opportunities at <span> VolunPeers</span>
        </h2>
      </div>
      <div className="Opportunities">
        <div className="volunteeringOpportunity">
          <div className="OpportunityTitle">
            <h3>Title: </h3>
            <span>Theme: </span>
            <span>Location: </span>
          </div>
          <span>
            Date: {new Date().getDate()} / {new Date().getMonth() + 1} /{' '}
            {new Date().getUTCFullYear()}
          </span>
          <img></img>
          <h4>Company</h4>
          <p>Ever wanted to clean the Area? Join us now ... </p>
        </div>
        <button aria-label="Read more">Read more</button>
      </div>
    </div>
  );
}

export default Opportunities;
