import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import digital from '../../../assets/courses/digital-marketing.jpg'
import marketmang from '../../../assets/courses/market-mang.jpg'
import finance from '../../../assets/courses/finance.jpg'
import ba from '../../../assets/courses/ba.jpg'
import sm from '../../../assets/courses/sm.jpg'
import hr from '../../../assets/courses/hr.jpg'
import { FiUser } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Management = () => {

    const ECE_data = [
        {
            id: 1,
            Image: digital,
            price: "$50",
            course_name: "Digital Marketing",
            course_detail: "Digital marketing leverages online channels like social media, SEO, and email to promote products or services, reaching a broad audience effectively.",
            auth_name: "David",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/management/digitalmarketing"

        },
        {
            id: 2,
            Image: marketmang,
            price: "$50",
            course_name: "Marketing Management",
            course_detail: "Marketing management involves planning, implementing, and overseeing strategies to promote products or services and achieve business goals.",
            auth_name: "Aadarsh",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/management/marketingmanagement"
        },
        {
            id: 3,
            Image: finance,
            price: "$50",
            course_name: "Finance  ",
            course_detail: "Finance involves managing money, investments, and assets to achieve financial goals and secure a stable future. It's vital for personal and business success.",
            auth_name: "Cameron",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/management/finance"
        },
        {
            id: 4,
            Image: ba,
            price: "$50",
            course_name: "Business Analytics  ",
            course_detail: "Business analytics involves using data analysis tools and techniques to gain insights, make data-driven decisions, and improve overall business performance.",
            auth_name: "Cameron",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/management/ba"
        },
        {
            id: 5,
            Image: sm,
            price: "$50",
            course_name: "Stock Marketing  ",
            course_detail: "Stock markets are platforms where individuals and institutions trade stocks, representing ownership in companies, with the goal of profit through price fluctuations.",
            auth_name: "Cameron",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/management/stockmarket"
        },
        {
            id: 6,
            Image: hr,
            price: "$50",
            course_name: "Human Resource  ",
            course_detail: "Human Resources manages employees' recruitment, development, benefits, and workplace policies, fostering a positive and productive work environment.",
            auth_name: "Cameron",
            user_icon: <FiUser />,
            like_icon: <FiHeart />,
            link_path: "/management/hr"
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
                                    <h2>Management</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <a>Management</a>
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
                        <h2>Management</h2>
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
                                                <span className="course_tag">Management</span>
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

export default Management