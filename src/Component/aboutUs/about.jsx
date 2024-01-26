import React from 'react'
import './about.css'
import Footer from '../footer/Footer'
import Nav from '../Nav/Nav'
import About_us from '../../assets/about/about_us.png'
import { Link } from 'react-router-dom'

const about = () => {
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
                                    <h2>About Us</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <a>About Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container section_gap">
                <div className="row vertical-content-manage mt-5">
                    <div className="col-lg-6">
                        <div className="about-header-main">
                            <div className="main_title">
                                <h2 className='text-start'>Why Choose EdiGlobe?</h2>
                                <p className='text-start'>For an enriching learning experience with diverse courses and expert instructors.</p>
                            </div>
                            <h4 className="about-heading text-capitalize font-weight-bold">Our Mision:</h4>
                            <p>Welcome to Ediglobe Elearning Platform, your gateway to a world of knowledge and opportunities. We are more than just an elearning platform; we are your partner in personal and professional growth</p>

                            <h4 className="about-heading text-capitalize font-weight-bold mt-3">Our Vision:</h4>
                            <p>At Ediglobe, we envision a future where learning knows no boundaries. We believe that education is the key to unlocking potential and that everyone should have access to quality learning experiences.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-about mt-3">
                            <img src={About_us} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className="about-content-box mt-3">
                            <div className="about-detail text-center">
                                <div className="about-icon">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Creative Design</h5>
                                <p className="edu-desc mt-3 mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about-content-box mt-3">
                            <div className="about-detail text-center">
                                <div className="about-icon">
                                    <i className="fab fa-angellist"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">We make Best Result</h5>
                                <p className="edu-desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about-content-box mt-3">
                            <div className="about-detail text-center">
                                <div className="about-icon">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Best Platform</h5>
                                <p className="edu-desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}

export default about