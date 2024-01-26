import React from 'react'
import certif_1 from '../../../src/assets/Certificate/certi_1.jpeg'
import certif_2 from '../../../src/assets/Certificate/certi_2.jpeg'
import certif_3 from '../../../src/assets/Certificate/certi_3.jpeg'
import FaqComponent from '../FAQ/FaqComponent '
import './eachCertificates.css'

const Certificates = () => {
    return (
        <>
            <section id='eachCertificate' className='section_gap registration_area'>
                <div className="container">
                    <div className="main_title" data-aos="fade-up">
                        <h2 style={{ color: "#fff" }}>Certificates</h2>
                        <p>Looking for better working Environment</p>
                    </div>
                    <div className="row gap align-items-center" data-aos="fade-up">
                                <div className="col-lg-4 hello">
                                    <div className="row eachcertificate_img" >
                                        <img src={certif_1} alt="" className="border border-2 p-1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="row eachcertificate_img" >
                                        <img src={certif_2} alt="" className="border border-2 p-1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="row eachcertificate_img" >
                                        <img src={certif_3} alt="" className="border border-2 p-1"/>
                                    </div>
                                </div>
                    </div>
                </div>
            </section >
            <div className='section_gap'></div>
            <FaqComponent />
        </>
    )
}

export default Certificates