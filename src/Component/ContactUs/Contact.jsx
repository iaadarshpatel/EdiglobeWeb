import React from 'react'
import './contact.css';
import Nav from '../Nav/Nav';
import Footer from '../footer/Footer';
import { FaBuilding } from 'react-icons/fa'
import {FaLocationArrow} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import {FaLink} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Contact = () => {
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
                  <h2>Contact Us</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <a>Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container section_gap">
        <div className="main_title" data-aos="fade-up">
          <h2>Do you have any Query?</h2>
          <p>Replenish man have thing gathering lights yielding shall you</p>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-3">
              <div className="contact_info">
                <div className="info_item">
                  <FaBuilding style={{ color: "#1e2a5a" }} />
                  <h6 >HSR Layout, Bengaluru</h6>
                </div>
                    <p>2nd Floor, Aadishwar Supermart Building, 60th Main Road,
                    AECS Layout, A Block, Singasandra,
                    Bengaluru, Karnataka, 560068.</p>
                <div className="info_item">
                <FaLocationArrow style={{ color: "#1e2a5a" }}/>
                  <i className="ti-headphone"></i>
                  <h6><a>+91 8088279615</a></h6>
                </div>
                <p>Free to call us anytime for query</p>

                <div className="info_item">
                <BiLogoGmail style={{ color: "#1e2a5a" }}/>
                  <i className="ti-email"></i>
                  <h6><a><span className="__cf_email__" data-cfemail="c0b3b5b0b0afb2b480a3afacafb2aca9a2eea3afad">support@ediglobe.com</span></a></h6>
                </div>
                <p>Free to mail us anytime for query</p>

                <div className="info_item">
                <FaLink style={{ color: "#1e2a5a" }}/>
                  <i className="ti-email"></i>
                  <h6><Link to="www.ediglobe.com"><span>www.ediglobe.com</span></Link></h6>
                </div>
                <p>For more information visit our website.</p>
              </div>
          </div>
          <div className="col-lg-8">
            <form className="contact_form" action=""  id="contactForm" novalidate="novalidate">
              <div className="col-md-10">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" required="" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" required="" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" required="" />
                </div>
              </div>
              <div className="col-md-10">
                <div className='form-group'>
                  <textarea className="form-control" name="message" id="message" rows="2" placeholder="Enter Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" required=""></textarea>
                </div>
              </div>
              <div className="col-md-12 mt-3 text-right">
                <button type="submit" value="submit" className="btn primary-btn2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact