import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const PointConfetti = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 12000);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Run only once when the component mounts

  return (
    <>
      {showConfetti && (
        <Confetti
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
