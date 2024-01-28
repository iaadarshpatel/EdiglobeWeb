import React from 'react'
import preloader from '../../../assets/loader2.mp4'
import './allemployee.css';
import loader from '../../../assets/Logo3.gif'

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img className='preloader-video' src={loader} alt="pre-loader" />
    </div>
  );
};

export default Preloader