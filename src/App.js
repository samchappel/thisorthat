import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TheQuestion from './TheQuestion';
import SkiingPage from './SkiingPage';

const App = () => {
  const handleButtonClick = (option, navigate) => {
    option === 'skiing' && navigate('/skiing', { replace: true });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TheQuestion handleButtonClick={handleButtonClick} />}
        />
        <Route
          path="/skiing"
          element={<SkiingPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;