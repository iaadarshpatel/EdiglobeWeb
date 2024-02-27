import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa6";
import course_image from "../../../assets/about/course-details.jpg"
import Department from '../../departments/cards'
import './app.css'
import Rating from '../../departments/Rating'
import Pricing from '../Pricing';
import certif_1 from '../../../assets/Certificate/certi_1.jpeg'
import certif_2 from '../../../assets/Certificate/certi_2.jpeg'
import certif_3 from '../../../assets/Certificate/certi_3.jpeg'
import Curriculum_note from './Curriculum_note';

function Dev({ title, course_desc, objective, eligibility, check_curriculum, course_outline, download }) {
    const FaqData = [
        {
            id: 1,
            question: "Introduction to Android Development",
            answer: "Overview of Android Os & its Architecture Setting Up the Development Environment Creating the First 'Hello World' App Understanding the Project Structure."
        },
        {
            id: 2,
            question: "Java Essentials for Android",
            answer: "Basic Java Concepts Needed for Android Development Data Types, Variables and Operators Control Flow (if statements, loops)."
        },
        {
            id: 3,
            question: "Object-Oriented Programming(OOP) Concepts",
            answer: "Classes and Objects Encapsulation, Inheritance and Polymorphism Constructors and Methods."
        },
        {
            id: 4,
            question: "Collections & Exception Handling",
            answer: "Arrays and Array Lists Exception Handling (Try, Catch, Throw, Throws, Finally) Brief Overview of Other Java Collections (HashMap, HashSet)"
        }
        ,
        {
            id: 5,
            question: "User Interface (UI)Basics",
            answer: "XML Layout Files & Views Common UI Elements (Text View, Edit Text, Button, etc) Layouts (Linear Layout, Relative Layout) Handling User Input & Events."
        },
        {
            id: 6,
            question: "Activities and Intents",
            answer: "Understanding Activities & their Lifecycle Creating Multiple Activities Passing Data between Activities using Intents."
        },
        {
            id: 7,
            question: "UI Advanced",
            answer: "Fragments and their Lifecycle Using Recycler View for Dynamic Lists Customizing UI with Styles and Themes."
        }
    ];


    return (
        <>
            <Nav />
            <section id='aboutUs' className='banner_area'>
                <div className="banner_inner d-flex align-items-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="banner_content text-center">
                                    <h2>{title}</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <Link to="/computerscience">Computer Science</Link>
                                        <Link to="">{title}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='department' className='course_details_area section_gap'>
                <div className="container">
                    <div className="main_title" data-aos="fade-up">
                        <h2>About Program</h2>
                        <p>{course_desc}</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 course_details_left">
                            <div className="main_image">
                                <img className="img-fluid" src={course_image} alt="" />
                            </div>
                            <div className="content_wrapper">
                                <h4 className="title">Objectives</h4>
                                <div className="content">
                                    {objective}
                                </div>
                                <h4 className="title">Eligibility</h4>
                                <div className="content">
                                    {eligibility}
                                </div>
                                <h4 className="title">Course Outline</h4>
                                <div className="content">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        {course_outline.map((faqItem) => (
                                            <div className="accordion-item" key={faqItem.id}>
                                                <h2 className="accordion-header">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#flush-collapse${faqItem.id}`}
                                                        aria-expanded="false"
                                                        aria-controls={`flush-collapse${faqItem.id}`}
                                                    >
                                                        {faqItem.question}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`flush-collapse${faqItem.id}`}
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <div className="accordion-body">{faqItem.answer}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Curriculum_note/>
                            </div>
                        </div>
                        <div className="col-lg-4 right-contents">
                            <form className='shadow p-1 mb-5 bg-body'>
                                <label className="justify-content-between form-label rcb_call d-flex">
                                    <input type="text" placeholder="Full Name" />
                                </label>
                                <label className="justify-content-between form-label rcb_call d-flex">
                                    <input type="text" placeholder="Email" />
                                </label>
                                <label className="justify-content-between form-label rcb_call d-flex">
                                    <input type="text" placeholder="Contact Number" />
                                </label>
                                <label className="justify-content-between form-label rcb_call d-flex">
                                    <input type="text" placeholder="Institue Name" />
                                </label>
                                <a className="primary-btn2 text-uppercase enroll rounded-0">
                                    Enroll the course
                                </a>
                            </form>
                            <h4 className="title">Reviews</h4>
                            <div className="content">
                                <div className="review-top row pt-40">
                                    <div className="col-lg-12">
                                        <h6 className="mb-15">Provide Your Rating</h6>
                                        <div className="d-flex flex-row reviews justify-content-between">
                                            <span>Quality</span>
                                            <div className="star">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row reviews justify-content-between">
                                            <span>Puncuality</span>
                                            <div className="star">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row reviews justify-content-between">
                                            <span>Quality</span>
                                            <div className="star">
                                                <Rating />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="title">Check our Curriculum <a style={{ color: "inherit" }} href={download} download> <FaDownload className='ms-2' /></a></h4>
                                <div className="content">
                                    <div className="review-top row pt-40">
                                        <div className="col-lg-12">
                                            <div className="d-flex flex-row reviews justify-content-between">
                                                <p>{check_curriculum}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback">
                                    <form action="#">
                                        <h6>Your Feedback</h6>
                                        <textarea name="feedback" className="form-control" cols="10" rows="10"></textarea>
                                        <div className="mt-3" style={{ textAlign: 'right' }}>
                                            <a className="primary-btn2 rounded-0 ">Submit</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_title section_gap" data-aos="fade-up">
                        <h2>Pricing</h2>
                        <p>Prices that are budget-friendly and suitable for students.</p>
                    </div>
                    <Pricing />
                    <section id='eachCertificate' className='section_gap'>
                        <div className="container">
                            <div className="main_title" data-aos="fade-up">
                                <h2>Certificates</h2>
                                <p>Looking for better working Environment</p>
                            </div>
                            <div className="row gap align-items-center" data-aos="fade-up">
                                <div className="col-lg-4 hello">
                                    <div className="row eachcertificate_img" >
                                        <img src={certif_1} alt="" className="border border-dark border-3 p-1" />
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="row eachcertificate_img" >
                                        <img src={certif_2} alt="" className="border border-dark border-3  p-1" />
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="row eachcertificate_img" >
                                        <img src={certif_3} alt="" className="border border-dark border-3  p-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </div>
            </section>
            <Department />
            <Footer />
        </>
    )
}

export default Dev