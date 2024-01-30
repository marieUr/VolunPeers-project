import React from 'react';
import './body.css'; // Import the main styling, shared CSS file
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import SubPagePlaceholder from '../../components/Test/SubPagePlaceholder.jsx';
import Opportunities from '../../components/Opportunities/Opportunities.jsx';
import Description from '../../components/Description/Description.jsx';

export const Body = () => {
  return (
    <>
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
                organizations striving to make a positive change.
              </p>
            </main>
          </div>
          <SubPagePlaceholder />
          <Opportunities />
          <Description />
        </body>
      </html>
    </>
  );
};

export default Body;