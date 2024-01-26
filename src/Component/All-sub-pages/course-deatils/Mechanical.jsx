import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import icengine from '../../../assets/courses/icengine.jpg'
import hev from '../../../assets/courses/hev.jpg'
import car from '../../../assets/courses/car.jpg'
import { FiUser } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Mechanical = () => {

    const ECE_data = [
        {
            id: 1,
            Image: icengine,
            price: "$50",
            course_name: "IC Engine",
            course_detail: "An internal combustion engine (IC engine) is a machine that burns fuel to create mechanical energy, commonly used in vehicles and power generation.",
            auth_name: "David",
            user_icon: <FiUser />,
            like_icon: <FiHeart />
        },
        {
            id: 2,
            Image: car,
            price: "$50",
            course_name: "Car Designing",
            course_detail: "Car designing is a complex process that combines engineering, aesthetics, and functionality to create vehicles that meet safety, performance, and style demands.",
            auth_name: "Aadarsh",
            user_icon: <FiUser />,
            like_icon: <FiHeart />
        },
        {
            id: 3,
            Image: hev,
            price: "$50",
            course_name: "Hybrid Electric Vehicle",
            course_detail: "A hybrid electric vehicle (HEV) combines an internal combustion engine with an electric motor to improve fuel efficiency and reduce emissions.",
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
                                    <h2>Mechanical Engineering</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <a>Mechanical Engineering</a>
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
                        <h2>Mechanical Engineering</h2>
                        <p>Replenish man have thing gathering lights yielding shall you</p>
                    </div>
                    <div className="courses_container" data-aos="fade-up" data-aos-offset="0">

                        {
                            ECE_data.map(({ id, Image, course_name, course_detail, user_icon, like_icon }) => {
                                return (
                                    <div className="single_course" key={id}>
                                        <div className="course_head">
                                            <img src={Image} alt="course_pic" />
                                        </div>
                                        <div className="course_content">
                                            <span className="course_tag">Mechanical</span>
                                            <h4 className="course_name">
                                                <a href="http://">{course_name}</a>
                                            </h4>
                                            <p>{course_detail}</p>

                                            <div className="course_meta">
                                                <button className="btn btn-outline-success" type="submit" >View Details</button>
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

export default Mechanical