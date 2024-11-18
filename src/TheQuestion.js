import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const TheQuestion = ({ onSnowboardingButtonMove }) => {
  const navigate = useNavigate();
  const [isMouseOverButton, setIsMouseOverButton] = useState(false);

  const skiingButtonPosition = { left: 300, top: 30 };
  const [snowboardingButtonPosition, setSnowboardingButtonPosition] = useState({
    left: skiingButtonPosition.left + 100,
    top: skiingButtonPosition.top,
  });

  const moveButton = useCallback(() => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    setSnowboardingButtonPosition({ left: `${x}vw`, top: `${y}vh` });;

    onSnowboardingButtonMove();
  }, [onSnowboardingButtonMove]);

  const handleSkiingButtonClick = () => {
    navigate('/skiing');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const snowButton = document.getElementById('snowButton');
      if (snowButton) {
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
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [moveButton]);

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
      <h1 className="header_text">Which is better?</h1>
      <div className="buttons" style={{ position: 'relative', width: '100%', height: '300px', maxWidth: '600px', overflow: 'hidden' }}>
        <button
          className="btn"
          id="skiButton"
          onClick={handleSkiingButtonClick}
          style={{ position: 'absolute', left: '10%', top: '10%' }}
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