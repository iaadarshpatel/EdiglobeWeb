import React from 'react'
import './course.css'
import C1 from '../../assets/courses/c1.png'
import C2 from '../../assets/courses/digital-marketing.jpg'
import C3 from '../../assets/courses/c2.png'
import { FiUser } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";


const data = [
  {
    id: 1,
    Image: C1,
    price: "$50",
    course_tag_name: "Computer Science",
    course_name: "App Development",
    course_detail: "App development is crafting mobile applications for devices like smartphones and tablets, encompassing design & coding for a seamless user experience.",
    auth_name: "David",
    user_icon: <FiUser />,
    like_icon: <FiHeart />,
    link_path: '/computerscience/appdevelopment'
  },
  {
    id: 2,
    Image: C2,
    price: "$50",
    course_tag_name: "MANAGEMENT",
    course_name: "Digital Marketing",
    course_detail: "Digital marketing is an exciting field that focuses on promoting products and services through online channels. Explore digital marketing course with us.",
    auth_name: "Aadarsh",
    user_icon: <FiUser />,
    like_icon: <FiHeart />,
    link_path: '/management/digitalmarketing'
  },
  {
    id: 3,
    Image: C3,
    price: "$50",
    course_tag_name: "Security",
    course_name: "Cyber Security",
    course_detail: "Cybersecurity is about guarding digital systems and data, like a digital superhero, ensuring information stays secure. Learn how to protect your data with us.",
    auth_name: "Cameron",
    user_icon: <FiUser />,
    like_icon: <FiHeart />,
    link_path: "/computerscience/cybersecurity",
  }

]

const Course = () => {
  return (
    <section id='course' className='section_gap'>
      <div className="container">
        <div className="main_title" data-aos="fade-up">
          <h2>Our Popular Courses</h2>
          <p>Here are a few popular courses that you might find interesting</p>
        </div>
        <div className="courses_container" data-aos="fade-up" data-aos-offset="0">
          {
            data.map(({ id, Image, course_tag_name, course_name, course_detail, user_icon, like_icon, link_path }) => {
              return (
                <Link to={link_path}>
                <div className="single_course" key={id}>
                  <div className="course_head">
                    <img src={Image} alt="course_pic" />
                  </div>
                  <div className="course_content">
                    <span className="course_tag">{course_tag_name}</span>
                    <h4 className="course_name">
                      <a>{course_name}</a>
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
                </Link>
              )
            }
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Course
