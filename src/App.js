import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TheQuestion from './TheQuestion';
import SkiingPage from './SkiingPage';

const App = () => {
  const [didSnowboardingButtonMove, setDidSnowboardingButtonMove] = useState(false);

  const handleSnowboardingButtonMove = () => {
    setDidSnowboardingButtonMove(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TheQuestion onSnowboardingButtonMove={handleSnowboardingButtonMove} />}
        />
        <Route
          path="/skiing"
          element={<SkiingPage didSnowboardingButtonMove={didSnowboardingButtonMove} />}
        />
      </Routes>
    </Router>
  );
};

export default App;