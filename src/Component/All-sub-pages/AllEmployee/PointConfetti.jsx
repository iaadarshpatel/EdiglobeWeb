import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const PointConfetti = () => {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

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
          width={screenSize.width}
          height={screenSize.height}
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
