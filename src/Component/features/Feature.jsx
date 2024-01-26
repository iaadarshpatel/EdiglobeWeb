import React from 'react'
import {TbSchool} from 'react-icons/tb'
import {GiBookmarklet} from 'react-icons/gi'
import {TbCertificate} from 'react-icons/tb'
import './feature.css'


const data = [
  {
    id: 1,
    logo: <TbSchool/>,
    feature_name: "Multifaceted courses",
    feature_detail: "Discover customized courses for your interests and career goals, perfect for students."
  },
  {
    id: 2,
    logo: <GiBookmarklet/>,
    feature_name: "Internship",
    feature_detail: "Access internships for hands-on experience at top companies, boosting your career journey."
  },
  {
    id: 3,
    logo: <TbCertificate/>,
    feature_name: "Certificate",
    feature_detail: "To offer flexibility, skill advancement, and expertise demonstration for career growth."
  }
]


const Feature = () => {
  return (
    <section id='feature' className='section_gap'>
      <div  className='container'>
        <div className="main_title" data-aos="fade-up">
          <h2>Awesome Features</h2>
          <p>The best way to learn is by doing</p>
        </div>
        <div className="feature_container">
          {
        data.map(({id, logo, feature_name, feature_detail}) => {
          return (
            <div className="features" key={id} data-aos="fade-up">
              <div className="single_feature">
                  <i className='icon'>{logo}</i>
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
  )
}

export default Feature