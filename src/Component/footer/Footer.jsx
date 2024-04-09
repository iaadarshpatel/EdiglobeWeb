import React, { useEffect } from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { BiLogoGmail } from 'react-icons/bi'
import {BsYoutube}  from 'react-icons/bs'
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  const color = {
    color: "#55e3ea"
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    
    <footer id='footer' className='footer-area section_gap'>
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 single-footer-widget">
            <h4>About US</h4>
            <li className='about-details'>
              <p>Welcome to Ediglobe Elearning Platform, your gateway to a world of knowledge and opportunities. We are more than just an elearning platform; we are your partner in personal and professional growth.</p>
            </li>
<br />
            <li className='about-details'>
              <span>
                <BiSolidPhoneCall style={color} className='phone-icon' /><a>+91 8088279615</a>
              </span>
            </li>
            <li className='about-details'>
              <span>
                <BiLogoGmail style={color} className='phone-icon' /><a>support@ediglobe.com </a>
              </span>
            </li>
          </div>

          <div className="col-lg-2 col-md-6 single-footer-widget">
            <ul>
              <li><Link to="/About">About us</Link></li>
              <li><Link to="/TermsCondition">Terms and conditions </Link></li>
              <li><Link to="/Privacy">Privacy policy</Link></li>
              <li><Link to="/Contact">Contact us</Link></li>
              <li><a >Blogs</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 single-footer-widget">
            <ul>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/FaqPage">FAQ</Link></li>
              <li><Link to="/Checkcertificate">Check your certificate </Link></li>
              <li><Link to="/refundpolicy">Refund Policy</Link></li>
              <li><Link to="/campusamb">Campus ambassador</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 single-footer-widget">
            <h4>Newsletter</h4>
            <p>Our inbox is safe with us. We promise only promotional offers and updates.</p>
            <div className="form-wrap" id="mc_embed_signup">

              <form className="form-inline">
                <input className="form-control" name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" required="" type="email" />
                <button className="click-btn btn">
                  <span>subscribe</span>
                </button>

                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                </div>
                <div className="info"></div>
              </form>
            </div>
          </div>
        </div>

        <hr />
        <div className="row footer-bottom d-flex justify-content-between">
          <p className="col-lg-8 col-sm-12 footer-text m-0 text-white"> Copyright &copy; All rights reserved </p>
          <p className=' mt-2'>Ediglobe online services private limited</p>
          <div className="row footer-bottom d-flex">
            <div className="col-lg-4 col-sm-12 footer-social">
              <Link to="https://twitter.com/ediglobe_" target="_blank" className='twitter'><FaTwitter />
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=61551912962114" className='facebook' target="_blank"><FaFacebookF />
              </Link>
              <Link to="https://www.instagram.com/ediglobe_" className='instagram' target="_blank"><FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/company/ediglobe/" className='linkedin' target="_blank"><FaLinkedin />
              </Link>
              <Link to="https://youtube.com/@ediglobe?si=JbbkkmnYSrNePqCS" className='youtube' target="_blank"><BsYoutube /></Link>      
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </footer>
  )
}

export default Footer