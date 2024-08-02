import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../Nav/Nav'
import Rating from '../departments/Rating'
import { Link } from "react-router-dom";

const department_data = [
    {
        id: 1,
        department_name: "Computer Science",
        department_details: "Crafting captivating websites through design, coding, and optimization for extraordinary online experiences for students",
        department_reviews: "(120 Reviews)",
        department_rating: <Rating />,
        rating_num: "5",
        link_path: "/computerscience"
    },
    {
        id: 2,
        department_name: "Management",
        department_details: "By streamlining operations, empowering teams, and optimizing results, we drive efficiency, productivity, and sustainable growth",
        department_reviews: "(140 Reviews)",
        department_rating: <Rating />,
        rating_num: "5",
        link_path: "/management"
    },
    {
        id: 3,
        department_name: "ECE",
        department_details: "Electronic and communication technologies range from radios to smartphones, allowing for global information exchange & information",
        department_reviews: "(160 Reviews)",
        department_rating: <Rating />,
        rating_num: "5",
        link_path: "/ece"
    },
    {
        id: 4,
        department_name: "BioTechnology",
        department_details: "At the science-innovation crossroads, biotech transforms with limitless potential in health, agriculture, and the environment",
        department_reviews: "(180 Reviews)",
        department_rating: <Rating />,
        rating_num: "5",
        link_path: "/biotechnology"
    },
    {
        id: 5,
        department_name: "Civil",
        department_details: "This covers the fundamentals and advanced topics of civil engineering, including structural design, geotechnical engineering.",
        department_reviews: "(145 Reviews)",
        department_rating: <Rating />,
        rating_num: "5",
        link_path: "/civil"
    },
    {
        id: 6,
        department_name: "Mechanical",
        department_details: "Creating, enhancing, and advancing various machines and systems to promote progress and sustainability of machines",
        department_reviews: "(126 Reviews)",
        department_rating: <Rating />,
        rating_num: "5",
        link_path: "/mechanical"
    },
]


const AllDeparts = () => {
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
                                    <h2>All Departments</h2>
                                    <div className="page_link">
                                        <Link href="/">Home</Link>
                                        <a>All Departments</a>
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
                        <h2>Our Popular Departments</h2>
                        <p>Replenish man have thing gathering lights yielding shall you</p>
                    </div>
                    <div className="courses_container" data-aos="fade-up" data-aos-offset="0">
                        {
                            department_data.map(({ id, department_name, department_details, department_reviews, department_rating, rating_num, link_path }) => {
                                return (
                                    <div class="ag-courses_item" key={id}>
                                        <Link to={link_path} target='_blank' class="ag-courses-item_link">
                                            <div className="ag-courses-item_bg"></div>
                                            <div class="ag-courses-item_title">
                                                <b>{department_name}</b> <br />
                                                <hr />
                                                <p>{department_details}.</p>
                                            </div>
                                            <div class="ag-courses-item_date-box">
                                                {department_rating} {rating_num}  &nbsp;
                                                <span class="ag-courses-item_review">
                                                    {department_reviews}
                                                </span>
                                                <hr />
                                                <Link to={link_path}>
                                                    <button className="btn btn-outline-success cards-btn" type="submit" >View Details</button>
                                                </Link>
                                            </div>
                                        </Link>
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

export default AllDeparts