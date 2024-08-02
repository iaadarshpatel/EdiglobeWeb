import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import autocad from '../../../assets/courses/autocad.jpg'
import cp from '../../../assets/courses/cp.jpg'
import staadpro from '../../../assets/courses/staadpro.png'
import { FiUser } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Civil = () => {

    const ECE_data = [
        {
            id: 1,
            Image: autocad,
            price: "$50",
            course_name: "AutoCad",
            course_detail: "It's a leading CAD software, facilitates 2D and 3D design for architecture and engineering. It optimizes precision and aids visualization in various industries.",
            auth_name: "David",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/civil/autocad"
        },
        {
            id: 2,
            Image: staadpro,
            price: "$50",
            course_name: "Staadpro",
            course_detail: "STAAD.Pro is vital in civil engineering, enabling structural analysis and design for safe and efficient infrastructure projects.",
            auth_name: "Aadarsh",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/civil/staadpro"
        },
        {
            id: 3,
            Image: cp,
            price: "$50",
            course_name: "Construction planning ",
            course_detail: "Construction planning involves creating a comprehensive strategy for a construction project, covering scheduling & resource allocation.",
            auth_name: "Cameron",
            user_icon: <FiUser />,
            like_icon: <FiHeart />
        }
    ]

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
                                    <h2>Civil Engineering</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <a>Civil Engineering</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='department' className='section_gap'>
                <div className="container">
                    <div className="main_title" data-aos="fade-up">
                        <h2>Civil Engineering</h2>
                        <p>Replenish man have thing gathering lights yielding shall you</p>
                    </div>
                    <div className="courses_container" data-aos="fade-up" data-aos-offset="0">

                        {
                            ECE_data.map(({ id, Image, course_name, course_detail, user_icon, like_icon, link_path }) => {
                                return (
                                    <Link to={link_path}>
                                        <div className="single_course" key={id}>
                                            <div className="course_head">
                                                <img src={Image} alt="course_pic" />
                                            </div>
                                            <div className="course_content">
                                                <span className="course_tag">Civil</span>
                                                <h4 className="course_name">
                                                    <Link to="http://">{course_name}</Link>
                                                </h4>
                                                <p>{course_detail}</p>

                                                <div className="course_meta">
                                                    <Link to={link_path}>
                                                        <button className="btn btn-outline-success" type="submit" >View Details</button>
                                                    </Link>
                                                    <div className='follows'>
                                                        <span className="meta_info">
                                                            <Link to="/"><i>{user_icon}</i>25</Link>
                                                        </span>
                                                        <span className="meta_like">
                                                            <Link to="/"><i>{like_icon}</i>35</Link>
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Civil