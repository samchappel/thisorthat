import React from 'react';

const SkiingPage = ({ didSnowboardingButtonMove }) => {
  return (
    <div className="container">
      <h1 className="header_text">Duh - skiing is obviously the right choice!</h1>
      <div className="image_container">
        <p>Glad you agree!!</p>
        {didSnowboardingButtonMove && <p>...even if it took some convincing ;)</p>}
      </div>
    </div>
  );
};

export default SkiingPage;