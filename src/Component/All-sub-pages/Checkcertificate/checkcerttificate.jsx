import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'

const Checkcertificate = () => {
    return (
        <>
            <Nav />
            <section id='aboutUs' className='banner_area '>
                <div className="banner_inner d-flex align-items-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="banner_content text-center">
                                    <h2>Certificates</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <a>Certificates</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='checkcertificate' className='section_gap'>
                <div className="container">
                    <div className="main_title" data-aos="fade-up">
                        <h2>Check Your Certificate</h2>
                        <p>Looking for your certificates</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div class="input-group mb-3 w-50">
                            <input type="text" class="form-control" placeholder="Certificate Number" aria-label="Certificate Number" aria-describedby="button-addon2" />
                        </div>
                    </div>
                    <div className="text-center mt-2">
                    <button className="btn primary-btn2" type='submit'>Get your Certificate</button>
                  </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Checkcertificate