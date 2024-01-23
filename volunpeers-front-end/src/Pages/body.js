import React, { useState } from 'react';
import './body.css'; // Import the main styling, shared CSS file
import HeroSection from '../components/HeroSection/HeroSection.jsx';

export const Body = () => {
  return (
    <>
        <HeroSection />
      <html>
        <body class="main-page">
          <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner cover">
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
        </body>
      </html>
    </>
  );
};

export default Body;
