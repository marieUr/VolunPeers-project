import React from 'react';
import './CompanySectionStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

function CompanySection() {
  return (
    <div className="Companies">
      <div className="CompaniesSection">
        <h2>
          <span className="GreenText">Companies</span> that are <br></br>part of
          - our - mission
        </h2>
      </div>
      <div className="CompanySectionIcons">
        <FontAwesomeIcon icon={faBuilding} size="8x" />
        <FontAwesomeIcon icon={faBuilding} size="8x" />
        <FontAwesomeIcon icon={faBuilding} size="8x" />
        <span className="divider"></span>
        <FontAwesomeIcon icon={faBuilding} size="8x" />
        <FontAwesomeIcon icon={faBuilding} size="8x" />
        <FontAwesomeIcon icon={faBuilding} size="8x" />
      </div>
    </div>
  );
}

export default CompanySection;
