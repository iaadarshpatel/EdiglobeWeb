import React from 'react'
import preloader from '../../../assets/loader2.mp4'
import './allemployee.css';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <video className="preloader-video" src={preloader} autoPlay loop muted />
    </div>
  );
};

export default Preloader