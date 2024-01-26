import React from 'react'
import preloader from '../../../assets/loader2.mp4'

const Preloader = () => {
  return (
    <>
    <div className="d-flex justify-content-center bg-white align-items-center vh-100 overflow-hidden">
      <video className="preloader-video"src={preloader} autoPlay loop muted />
    </div>
    </>
  )
}

export default Preloader