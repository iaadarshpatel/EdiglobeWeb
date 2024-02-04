import React, { useState } from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import './campusamb.css'
import t1 from '../../../assets/testimonials/t1.jpg';
import t2 from '../../../assets/trainer/Harshita.png';
import t3 from '../../../assets/trainer/Dewasis.png';
import t4 from '../../../assets/trainer/Durga.png';
import certificate from '../../../assets/Certificate/certificate1.png'
import { TbCertificate } from "react-icons/tb"
import { FaNetworkWired } from "react-icons/fa"
import { BiTrophy } from "react-icons/bi"
import { Swiper, SwiperSlide } from 'swiper/react';
import RegisterForm from './RegisterForm';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const data = [
    {
        id: 1,
        feature_name: "Community",
        feature_detail: "Help build a strong and supportive community on campus that values learning and collaboration with the team."
    },
    {
        id: 2,
        feature_name: "Spearhead",
        feature_detail: "Be the face of Ediglobe on your campus, and advocate for our latest education-related products and offerings."
    },
    {
        id: 3,
        feature_name: "Empowerment",
        feature_detail: "Empower your fellow students with information and resources to enhance their academic and professional development."
    }
]

const FaqData = [
    {
        id: 1,
        question: "What is the role of campus ambassador?",
        answer: "Being a campus ambassador means representing a company or organization on your college campus. It involves promoting their brand, organizing events, and connecting with students. It's a great opportunity to gain leadership skills and build your network!"
    },
    {
        id: 2,
        question: "What will be the benefit of becoming the campus ambassador?",
        answer: "Becoming a campus ambassador offers a range of benefits! You'll gain valuable leadership experience, expand your network, enhance your communication skills, and even have the chance to earn rewards or incentives from the company or organization you represent. Plus, it looks impressive on your resume!"
    },
    {
        id: 3,
        question: "Is there any eligibility criteria for becoming an campus ambassador?",
        answer: "You should have proper communication and organisational skills and you need to be the current student of the college or university."
    },
    {
        id: 4,
        question: "Is there any future opportunity if i am a campus ambassador?",
        answer: "Yes , you will get a chance to work for our organisation as a intern for a period of time and based on your performance you can get the employment as well."
    }
    ,
    {
        id: 5,
        question: "What certificate i will get after completion of the campus ambassador role?",
        answer: "You will get the certificate of appreciation from our end."
    }
];

const testi_data = [
    {
        id: 1,
        alum_name: 'Sakshi',
        feedback: "The weekly rewards and incentives for our performance as Campus Ambassadors have been motivating, and the certificate of excellence is a prestigious recognition.",
        Image: t1
    },
    {
        id: 2,
        alum_name: 'Harshita',
        feedback: "Becoming a Campus Ambassador has opened doors to future opportunities. It's not just about promoting a brand; it's about building essential skills and making a positive impact.",
        Image: t2
    },
    {
        id: 3,
        alum_name: 'Dewasis',
        feedback: "Empowering my peers with information and resources to enhance their academic and professional development has been a rewarding aspect of my role as a Campus Ambassador.",
        Image: t3
    },
    {
        id: 4,
        alum_name: 'Durga',
        feedback: "I've gained invaluable leadership skills and built a strong network through the Campus Ambassador program. It's a fantastic way to represent Ediglobe on our college campus.",
        Image: t4
    }
]


const CampusAmb = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleFaqData = showAll ? FaqData : FaqData.slice(0, 5);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };


    return (
        <>
            <Nav />
            <section id='campusAmb' className="campusAmb_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-12 mt-5">
                                <div className="banner_content mt-7 text-center">
                                    <h2 className="text-uppercase campus_text mt-5">
                                        Campus Ambassador
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section_gap'>
                <div className='container'>
                    <div className="main_title" data-aos="fade-up">
                        <h2>What Will You Do</h2>
                        <p>The best way to learn is by doing</p>
                    </div>
                    <div className="feature_container">
                        {
                            data.map(({ id, feature_name, feature_detail }) => {
                                return (
                                    <div className="features" key={id} data-aos="fade-up">
                                        <div className="single_feature">
                                            <div className="desc">
                                                <h4 className="feature_name">{feature_name}</h4>
                                                <p className="feature_detail">{feature_detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>


            <section id='perks_benefits' className='section_gap'>
                <div className="container">
                    <div className="main_title" data-aos="fade-up">
                        <h2 style={{ color: "#fff" }}>Perks and Benifets</h2>
                        <p>Looking for better working Environment</p>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-4">
                            <div className="about-content-box mt-3">
                                <div className="about-detail text-center">
                                    <div className="about-icon">
                                        <FaNetworkWired style={{ fontSize: "3rem", color: "#fff" }} />
                                    </div>
                                    <h5 className=" text-capitalize mt-3 font-weight-bold" style={{ color: "#fff" }}>Connect with Corporates</h5>
                                    <p className="edu-desc mt-3 mb-0" style={{ color: "#fff" }}> Identify opportunities for collaboration and partnerships between the campus and corporate entities. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="about-content-box mt-3">
                                <div className="about-detail text-center">
                                    <div className="about-icon">
                                        <TbCertificate style={{ fontSize: "3rem", color: "#fff" }} />
                                    </div>
                                    <h5 className="text-capitalize mt-3 font-weight-bold" style={{ color: "#fff" }}>Certificate Of Excellence</h5>
                                    <p className="edu-desc mb-0 mt-3" style={{ color: "#fff" }}>A prestigious award recognizing outstanding achievements and exceptional contributions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="about-content-box mt-3">
                                <div className="about-detail text-center">
                                    <div className="about-icon">
                                        <BiTrophy style={{ fontSize: "3rem", color: "#fff" }} />
                                    </div>
                                    <h5 className="text-capitalize mt-3 font-weight-bold" style={{ color: "#fff" }}>Rewards and Incentives</h5>
                                    <p className="edu-desc mb-0 mt-3" style={{ color: "#fff" }}>You'll receive weekly rewards and incentives based on your performance.. </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn-outline-success btn mt-4 btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Join Now</button>
                        </div>
                    </div>
                </div>
            </section>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <button type="button" class="btn btn-secondary float-end m-2" data-bs-dismiss="modal" style={{ cursor: "progress" }}>Close</button>
                        <RegisterForm />
                    </div>
                </div>
            </div>

            <section id='testimonials' className="testimonial_area section_gap">
                <div className='container'>
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-5">
                            <div className="main_title">
                                <h2 className="mb-3">Hear from our CAs</h2>
                                <p>Hear it from the Campus Ambassadors</p>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {
                            testi_data.map(({ id, alum_name, feedback, Image }) => {
                                return (
                                    <SwiperSlide>
                                        <div className="row testimonial justify-content-center" key={id}>
                                            <div className="pic col-sm-6">
                                                <img src={Image} alt="" />
                                            </div>
                                            <div className="testimonial-content col-sm-6">
                                                <h4 className="testimonial-title">{alum_name} </h4>
                                                <p className="description">
                                                    {feedback}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>

            <section id='registration' className='section_gap registration_area'>
                <div className="container">
                    <div className="main_title" data-aos="fade-up">
                        <h2 style={{ color: "#fff" }}>Certificates</h2>
                        <p>Looking for better working Environment</p>
                    </div>
                    <div className="row align-items-center" data-aos="fade-up">
                        <div className="col-lg-7">
                            <div className="row clock_sec certificate_img" >
                                <img src={certificate} alt="" />
                            </div>
                        </div>
                        <RegisterForm containerClass="col-lg-4 offset-lg-1" />
                    </div>
                </div>
            </section >

            <section id='faq' className='section_gap'>
                <div className='container'>
                    <div className="main_title" data-aos="fade-up">
                        <h2>Frequently Asked Questions</h2>
                        <p>List of common queries and their answers</p>
                    </div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {visibleFaqData.map((faqItem) => (
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
                    {FaqData.length > 5 && (
                        <div className="text-center">
                            <button onClick={toggleShowAll} className="btn-outline-success btn ">
                                {showAll ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CampusAmb