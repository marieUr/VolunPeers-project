import React from 'react';
import './body.css'; // Import the main styling, shared CSS file
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import SubPagePlaceholder from '../../components/Test/SubPagePlaceholder.jsx';
import Opportunities from '../../components/Opportunities/Opportunities.jsx';
import Description from '../../components/Description/Description.jsx';
import CompanySection from '../../components/Companies/CompanySection.jsx';

export const Body = () => {
  return (
    <html>
      <HeroSection />
      <body class="main-page">
        <div class="cover-container">
          <main role="main" class="inner-cover">
            <h1 class="cover-heading">
              Join VolunPeers: Unite for a Better World!
            </h1>
            <p class="lead">
              Are you ready to turn your passion for the planet into impactful
              action? <br></br>Introducing VolunPeers, the ultimate platform
              connecting eager volunteers, <br></br>like yourself, with
              organizations striving to make a positive change.<br></br>Be part
              of something bigger. #VolunteerForChange and embark on a rewarding
              #SustainabilityJourney! 💚🌏
            </p>
          </main>
        </div>
        <Opportunities />
        <Description />
        <CompanySection />
      </body>
    </html>
  );
};

export default Body;
