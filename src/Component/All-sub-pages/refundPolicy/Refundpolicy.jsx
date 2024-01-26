import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'

const Refundpolicy = () => {
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
                                    <h2>Refund Policy</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <Link to="">Refund</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='faq' className='section_gap'>
                <div className='container'>
                    <div className="main_title" data-aos="fade-up">
                        <h2>Our Refund Policy</h2>
                        <p>Our refund policy for the course</p>
                    </div>
                    <p>We appreciate your trust in EdiGlobe for your online learning experience. Please be aware that our courses are non-refundable.Due to the nature of our digital content and services, we do not offer refunds. Once enrolled, the sale is final.Therefore, we encourage you to thoroughly review course details and ensure it meets your requirements before making a purchase.If you have any questions or concerns about our no refund policy, please feel free to write us at support@ediglobe.com. We are here to assist you with any inquiries you may have.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Refundpolicy