import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import C2 from '../../../assets/courses/cloud.jpg'
import iot from '../../../assets/courses/iot.jpg'
import robotics from '../../../assets/courses/robotics.jpg'

import { FiUser } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ECE = () => {

    const ECE_data = [
        {
            id: 1,
            Image: C2,
            price: "$50",
            course_name: "VLSI",
            course_detail: "VLSI (Very Large Scale Integration) is a technology for creating integrated circuits with thousands or millions of transistors on a single chip.",
            auth_name: "David",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/ece/vlsi"
        },
        {
            id: 2,
            Image: iot,
            price: "$50",
            course_name: "Internet of Things",
            course_detail: "IoT (Internet of Things) is the interconnection of devices and objects via the internet, allowing them to collect and share data.",
            auth_name: "Aadarsh",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/ece/iot"
        },
        {
            id: 3,
            Image: robotics,
            price: "$50",
            course_name: "Robotics",
            course_detail: "Robotics merges engineering disciplines to create autonomous machines with applications in manufacturing, healthcare, and beyond.  ",
            auth_name: "Cameron",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/ece/robotics"
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
                                    <h2>Electronic & Communication Engineering</h2>
                                    <div className="page_link">
                                    <Link to="/">Home</Link>
                                        <a>Electronic & Communication Engineering</a>
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
                        <h2>Electronic & Communication Engineering</h2>
                        <p>Replenish man have thing gathering lights yielding shall you</p>
                    </div>
                    <div className="courses_container" data-aos="fade-up" data-aos-offset="0">

                        {
                            ECE_data.map(({ id, Image, course_name, course_detail, user_icon, like_icon, link_path }) => {
                                return (
                                    <div className="single_course" key={id}>
                                        <div className="course_head">
                                            <img src={Image} alt="course_pic" />
                                        </div>
                                        <div className="course_content">
                                            <span className="course_tag">ECE</span>
                                            <h4 className="course_name">
                                                <a href="http://">{course_name}</a>
                                            </h4>
                                            <p>{course_detail}</p>

                                            <div className="course_meta">
                                            <Link to={link_path}>
                                                <button className="btn btn-outline-success" type="submit" >View Details</button>
                                                </Link>
                                                <div className='follows'>
                                                    <span className="meta_info">
                                                        <a href="/"><i>{user_icon}</i>25</a>
                                                    </span>
                                                    <span className="meta_like">
                                                        <a href="/"><i>{like_icon}</i>35</a>
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
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

export default ECE