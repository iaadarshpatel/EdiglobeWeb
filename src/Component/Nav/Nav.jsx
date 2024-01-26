import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBarsStaggered } from 'react-icons/fa6';
import logo from "../../assets/EdiGlobe Website-01.png";
import './nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    const [show, setShow] = useState(false);

    let mobileMenuClass = show ? 'show open' : 'show';

    // Active Navbar on Click
    const [activeNav, setActiveNav] = useState('#')
    const Adarsh = () => {
        setActiveNav('#');
    }

    return (
        <>
            <section className="navbar-bg">
                <nav className={`navbar  navbar-expand-lg navbar-light ${colorChange ? 'navbar colorChange' : 'navbar'}`}>
                    <div className="container">
                    <Link to="/">
                    <img src={logo} alt="course_pic" />
                  </Link>
                        <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"> 
                            
                            {show ? <LiaTimesSolid /> : <FaBarsStaggered />}
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/about" className='nav-link'>About Us</Link >
                                </li>

                                <li className="nav-item">
                                    <Link to="/AllDeparts" className='nav-link'>Courses</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/registration" className='nav-link'>Blog</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="/Contact" className='nav-link'>Contact Us</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="submit">SignUp</button>
                                <Link to='/AllEmployee'>

                                <button className="btn btn-outline-dark ms-1 p-2" type="submit">Employee Portal</button>
                                </Link>

                                <Link to='/Openform'>
                                <button className="btn btn-outline-dark ms-1 p-2" type="submit">OB Form</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Nav