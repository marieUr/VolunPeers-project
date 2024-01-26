import React from 'react';
import './body.css'; // Import the main styling, shared CSS file
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import SubPagePlaceholder from '../components/SubPagePlaceholder.jsx';
import Opportunities from '../components/Opportunities.jsx';

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
                action? Introducing VolunPeers, the ultimate platform connecting
                eager volunteers, like yourself, with organizations striving to
                make a positive change.
              </p>
            </main>
          </div>
          <SubPagePlaceholder />
          <Opportunities />
        </body>
      </html>
    </>
  );
};

export default Body;
