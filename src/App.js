import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TheQuestion from './TheQuestion';
import SkiingPage from './SkiingPage';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TheQuestion handleButtonClick={handleButtonClick} />} />
        <Route
          path="/skiing"
          element={
            selectedOption === 'skiing' ? (
              <Navigate to="/skiing" replace />
            ) : (
              <SkiingPage />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;