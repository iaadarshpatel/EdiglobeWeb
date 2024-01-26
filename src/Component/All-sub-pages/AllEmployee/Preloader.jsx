import React from 'react'
import preloader from '../../../assets/loader2.mp4'


const Preloader = () => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <video className="preloader-video" src={preloader} autoPlay loop muted />
    </div>
    </>
  )
}

export default Preloader