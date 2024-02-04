import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TheQuestion = () => {
  const navigate = useNavigate();
  const [isMouseOverButton, setIsMouseOverButton] = useState(false);

  const skiingButtonPosition = { left: 300, top: 30 };
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

      const snowButton = document.getElementById('snowButton');
      const snowButtonRect = snowButton.getBoundingClientRect();

      const isMouseOver = (
        mouseX >= snowButtonRect.left &&
        mouseX <= snowButtonRect.right &&
        mouseY >= snowButtonRect.top &&
        mouseY <= snowButtonRect.bottom
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
          id="skiButton"
          onClick={handleSkiingButtonClick}
          style={{ position: 'absolute', left: skiingButtonPosition.left, top: skiingButtonPosition.top }}
        >
          Skiing
        </button>
        <button
          className={`btn ${isMouseOverButton ? 'moving' : ''}`}
          id="snowButton"
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