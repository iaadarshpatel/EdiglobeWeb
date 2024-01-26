import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'

const certificates = () => {
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
            <section className='section_gap'></section>
            <Footer />
        </>
    )
}

export default certificates