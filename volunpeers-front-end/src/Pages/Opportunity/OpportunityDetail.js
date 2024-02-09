import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './OpportunityStyle.css';
import Cover from '../../Images/citywithnature.webp';

function Opportunity() {
  return (
    <>
      <div className="container-opportunity">
        <div className="companyContainerOpp">
          <h1>Opportunity at Telekom</h1>
          <div className="containerImg">
            <img src={Cover} alt="City with a natural park" />
            <div class="overlay"></div>
          </div>
        </div>
        <div className="mainContainer">
          <div className="overviewContainer">
            <div className="overviewCompanyLogo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Telekom_Logo_2013.svg"></img>
              <h2> Overview + Companyname"data from DB here"</h2>
            </div>
            <p>
              <span>
                This is some information for the left div. "data from DB here"
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Proin
              porttitor, orci nec nonummy molestie, enim est eleifend mi, non
              fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
              scelerisque vitae, consequat in, pretium a, enim. Pellentesque
              congue. Ut in risus volutpat libero pharetra tempor. Cras
              vestibulum bibendum augue. Praesent egestas leo in pede. Praesent
              blandit odio eu enim. Pellentesque sed dui ut augue blandit
              sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed
              pede pellentesque fermentum. Maecenas adipiscing ante non diam
              sodales hendrerit.
            </p>
          </div>
          <div className="informationRight">
            <h2>Location "data from DB here"</h2>
            <p>
              <span>Date "data from DB here"</span>
              <span>Theme "data from DB here"</span>
            </p>
            <p>work needed "data from DB here"</p>
            <p>
              <span>Overall Rating "data from DB here"</span>
              <span>
                Volunteers that have applied for the current job: amount here
              </span>
            </p>
            <p>This is some information for the right div.</p>
          </div>
        </div>
        <div className="containerContact">
          <div className="leftContact">
            <h3>Contact</h3>
            <h4>
              Melissa Doe + Required for a company to fill in, so from DB?
            </h4>
            <div className="mailContact">
              {' '}
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                className="envelopeIcon"
              />
              <p>
                <Link>Mailto link: mail@something.com</Link>
              </p>
            </div>

            <p>general Email for questions?</p>
          </div>
          <div className="rightContact">
            <p>Applications are accepted until ...</p>
            <br></br>
            <p>Date</p>
          </div>
        </div>
        <div className="reviewContainer">
          <h3>Reviews</h3>
          <p>The reviews would be here ... if we had ANY </p>
        </div>
      </div>
    </>
  );
}

export default Opportunity;
