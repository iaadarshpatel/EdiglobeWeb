import React from 'react'
import './allemployee.css';
import loader from '../../../assets/Logo2.gif'

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img className='preloader-video' src={loader} alt="pre-loader" />
    </div>
  );
};

export default Preloader