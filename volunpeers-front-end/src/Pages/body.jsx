import React, { useState } from 'react';
import './body.css'; // Import the main styling, shared CSS file

export const Body = () => {
  return (
    <>
      <html>
        <body class="main-page">
          <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner cover">
              <h1 class="cover-heading">Welcome to our landing page.</h1>
              <p class="lead">
                This is a landing page example to demonstrate the usefulness of
                ReactJS. We including convenient links to various CodeConda
                pages above, and a simple call to action button below which will
                direct you to the CodeConda home page.
              </p>
            </main>
          </div>
        </body>
      </html>
    </>
  );
};

export default Body;
