import React from 'react';
import './CompanySectionStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import TYPO3Logo from '../../Images/TYPO3-Logo-rgb.svg';

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
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Telekom_Logo_2013.svg"></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20230822192910%21Google_%22G%22_logo.svg"></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg"></img>
        <span className="divider"></span>
        <img src={TYPO3Logo}></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"></img>
      </div>
    </div>
  );
}

export default CompanySection;
