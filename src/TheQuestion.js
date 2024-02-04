import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TheQuestion = () => {
  const navigate = useNavigate();
  const [skiingButtonPosition, setSkiingButtonPosition] = useState({ left: 300, top: 30 });
  const [isMouseOverButton, setIsMouseOverButton] = useState(false);

  const [snowboardingButtonPosition, setSnowboardingButtonPosition] = useState({
    left: skiingButtonPosition.left + 100,
    top: skiingButtonPosition.top,
  });

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 85);
    const y = Math.random() * (window.innerHeight - 48);
    setSnowboardingButtonPosition({ left: x, top: y });
  };

  const handleSkiingButtonClick = () => {
    navigate('/skiing');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const button = document.getElementById('noButton');
      const buttonRect = button.getBoundingClientRect();

      const isMouseOver = (
        mouseX >= buttonRect.left &&
        mouseX <= buttonRect.right &&
        mouseY >= buttonRect.top &&
        mouseY <= buttonRect.bottom
      );

      setIsMouseOverButton(isMouseOver);

      if (isMouseOver) {
        moveButton();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="header_text">Which is better?</h1>
      <div className="buttons">
        <button
          className="btn"
          id="yesButton"
          onClick={handleSkiingButtonClick}
          style={{ position: 'absolute', left: skiingButtonPosition.left, top: skiingButtonPosition.top }}
        >
          Skiing
        </button>
        <button
          className={`btn ${isMouseOverButton ? 'moving' : ''}`}
          id="noButton"
          style={{ position: 'absolute', left: snowboardingButtonPosition.left, top: snowboardingButtonPosition.top }}
          onClick={moveButton}
        >
          Snowboarding
        </button>
      </div>
    </div>
  );
};

export default TheQuestion;