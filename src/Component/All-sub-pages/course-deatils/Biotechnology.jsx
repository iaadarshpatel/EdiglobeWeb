import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import bioinformatics from '../../../assets/courses/bioinformatics.jpg'
import genetic from '../../../assets/courses/genetic.jpg'
import nano from '../../../assets/courses/nano.jpg'
import { FiUser } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const BioTechnology = () => {

  const data = [
    {
      id: 1,
      Image: bioinformatics,
      price: "$50",
      course_name: "BioInformatics",
      course_detail: "Bioinformatics leverages computer science to analyze biological data, aiding genomics and drug discovery.",
      auth_name: "David",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/biotechnology/bioinformatics"
    },
    {
      id: 2,
      Image: nano,
      price: "$50",
      course_name: "Nanoscience/Nanotechnology",
      course_detail: "Nanotechnology is the manipulation of matter at the nanoscale, involving structures smaller than 100 nanometers.",
      auth_name: "Aadarsh",
      user_icon: <FiUser />,
      like_icon: <FiHeart />
    },
    {
      id: 3,
      Image: genetic,
      price: "$50",
      course_name: "Genetic Engineering",
      course_detail: "Genetic engineering is a biotechnology field that modifies an organism's DNA to achieve desired traits or functions.",
      auth_name: "Cameron",
      user_icon: <FiUser />,
      like_icon: <FiHeart />,
      link_path: "/biotechnology/geneticengineering"
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
                  <h2>BioTechnology</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <a>BioTechnology</a>
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
            <h2>BioTechnology</h2>
            <p>Replenish man have thing gathering lights yielding shall you</p>
          </div>
          <div className="courses_container" data-aos="fade-up" data-aos-offset="0">

            {
              data.map(({ id, Image, course_name, course_detail, user_icon, like_icon,link_path }) => {
                return (
                  <div className="single_course" key={id}>
                    <div className="course_head">
                      <img src={Image} alt="course_pic" />
                    </div>
                    <div className="course_content">

                      <span className="course_tag">BioTechnology</span>
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

export default BioTechnology