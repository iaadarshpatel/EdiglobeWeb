import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const PointConfetti = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [confettiHeight, setConfettiHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      // Update the confetti height on window resize
      setConfettiHeight(Math.max(window.innerHeight, document.documentElement.scrollHeight));
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Set the initial confetti height
    setConfettiHeight(Math.max(window.innerHeight, document.documentElement.scrollHeight));

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    // Cleanup the timer and event listener to avoid memory leaks
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run only once when the component mounts

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={confettiHeight}
          gravity={0.2} // Adjust the gravity to control the downward acceleration
          numberOfPieces={200} // Increase the number of pieces to create more confetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />
      )}
    </>
  );
};

export default PointConfetti;
