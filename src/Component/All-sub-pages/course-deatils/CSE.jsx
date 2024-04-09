import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import C1 from '../../../assets/courses/c1.png'
import C2 from '../../../assets/courses/web.jpg'
import C3 from '../../../assets/courses/c2.png'
import cloud from '../../../assets/courses/cloud.jpg'
import ml from '../../../assets/courses/ml.png'
import ai from '../../../assets/courses/ai.jpg'
import arvr from '../../../assets/courses/arvr.jpg'
import ds from '../../../assets/courses/datascience.jpg'
import { FiUser } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CSE = () => {

  const data = [
    {
      id: 1,
      Image: C1,
      price: "$50",
      course_name: "App Development",
      course_detail: "App development is crafting mobile applications for devices like smartphones and tablets, encompassing design & coding for a seamless user experience.",
      auth_name: "David",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/computerscience/appdevelopment"
    },
    {
      id: 2,
      Image: C2,
      price: "$50",
      course_name: "Web Development",
      course_detail: "Web development is the process of creating websites and web applications using programming languages like HTML, CSS, and JavaScript.",
      auth_name: "Aadarsh",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/computerscience/webdevelopment"
    },
    {
      id: 3,
      Image: C3,
      price: "$50",
      course_name: "Cyber Security",
      course_detail: "Cybersecurity is about guarding digital systems and data, like a digital superhero, ensuring information stays secure. Learn how to protect your data with us.",
      auth_name: "Cameron",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/computerscience/cybersecurity"
    },
    {
      id: 4,
      Image: ml,
      price: "$50",
      course_name: "Machine Learning ",
      course_detail: "It is a subset of artificial intelligence that teaches computers to learn from data and make predictions or decisions without explicit programming.",
      auth_name: "Cameron",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/computerscience/machinelearning"
    },
    {
      id: 5,
      Image: ai,
      price: "$50",
      course_name: "Artificial Intelligence",
      course_detail: "Artificial Intelligence (AI) is a field of computer science focused on creating machines that can simulate human-like intelligence and learning.",
      auth_name: "Cameron",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/computerscience/artificialintelligence"
    },
    {
      id: 6,
      Image: cloud,
      price: "$50",
      course_name: "AWS ",
      course_detail: "AWS is a technology that allows users to access and manage data, applications, and services over the internet, enhancing flexibility and scalability.",
      auth_name: "Cameron",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/computerscience/aws"
    },
    {
      id: 7,
      Image: arvr,
      price: "$50",
      course_name: "AR/VR",
      course_detail: "Immersing our students in a world of limitless possibilities with our cutting-edge Augmented Reality (AR) and Virtual Reality (VR) solutions. ",
      auth_name: "Cameron",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/computerscience/arvr"
    },
    {
      id: 8,
      Image: ds,
      price: "$50",
      course_name: "Data Science",
      course_detail: "Data science utilizes statistical and computational methods to analyze data, uncover patterns, and derive actionable insights for businesses.",
      auth_name: "Cameron",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/computerscience/datascience"
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
                  <h2>Computer Science</h2>
                  <div className="page_link">
                  <Link to="/">Home</Link>
                    <a>Computer Science</a>
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
            <h2>Computer Science</h2>
            <p>Replenish man have thing gathering lights yielding shall you</p>
          </div>
          <div className="courses_container" data-aos="fade-up" data-aos-offset="0">

            {
              data.map(({ id, Image, course_name, course_detail, user_icon, like_icon, link_path }) => {
                return (
                  <div className="single_course" key={id}>
                    <div className="course_head">
                      <img src={Image} alt="course_pic" />
                    </div>
                    <div className="course_content">

                      <span className="course_tag">Computer Science</span>
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

export default CSE