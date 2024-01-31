import React from 'react';
import './CompanySectionStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

function CompanySection() {
  return (
    <div className="Companies">
      <div className="CompaniesSection">
        <h2>Companies that are part of our mission</h2>
      </div>
      <div className="CompanySectionIcons">
        <FontAwesomeIcon icon={faBuilding} size="6x" />
        <FontAwesomeIcon icon={faBuilding} size="6x" />
        <FontAwesomeIcon icon={faBuilding} size="6x" />
        <span className="Separator"></span>
        <FontAwesomeIcon icon={faBuilding} size="6x" />
        <FontAwesomeIcon icon={faBuilding} size="6x" />
        <FontAwesomeIcon icon={faBuilding} size="6x" />
      </div>
    </div>
  );
}

export default CompanySection;
