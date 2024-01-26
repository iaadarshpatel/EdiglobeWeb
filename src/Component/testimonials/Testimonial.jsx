import React from 'react'
import t1 from '../../assets/trainer/Saakshi.png';
import t2 from '../../assets/testimonials/Harshita.jpg'
import t3 from '../../assets/testimonials/PrajaktaPawar.jpg';
import t4 from '../../assets/trainer/Durga.png';
import t5 from '../../assets/trainer/Mili.png';
import './testimonial.css'
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const data = [
  {
    id: 1,
    alum_name: 'Sakshi',
    feedback: "The machine learning internship program was an absolute game-changer! I had the opportunity to work on cutting-edge projects and collaborate with brilliant minds in the field. It was an invaluable experience that boosted my skills and knowledge in machine learning. I can't thank the program enough for preparing me for my future endeavours!",
    Image: t1
  },
  {
    id: 2,
    alum_name: 'Harshita',
    feedback: "That web development internship program was absolutely incredible! I learned so much and had the chance to work on some really cool projects. It was the perfect stepping stone for my future in the field. I can't wait to see where this new adventure takes me! Good luck and here's to an exciting future ahead! ",
    Image: t2
  },
  {
    id: 3,
    alum_name: 'Prajakta Pawar',
    feedback: "The digital marketing and support team were absolutely amazing! They were always there to provide guidance and assistance whenever needed. Their expertise and dedication made the internship experience even more valuable. I can't thank them enough for their support throughout the program!",
    Image: t3
  },
  {
    id: 4,
    alum_name: 'Durga',
    feedback: "The digital marketing and support team were absolutely amazing! They were always there to provide guidance and assistance whenever needed. Their expertise and dedication made the internship experience even more valuable. I can't thank them enough for their support throughout the program!",
    Image: t4
  },
  {
    id: 5,
    alum_name: 'Mili',
    feedback: "The digital marketing and support team were absolutely amazing! They were always there to provide guidance and assistance whenever needed. Their expertise and dedication made the internship experience even more valuable. I can't thank them enough for their support throughout the program!",
    Image: t5
  },
]

const Testimonial = () => {
  return (

    <section id='testimonials' className="testimonial_area section_gap">
      <div className='container'>
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-5">
            <div className="main_title">
              <h2 className="mb-3">Students say about me</h2>
              <p>Hear it from the learners</p>
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
            data.map(({ id, alum_name, feedback, Image }) => {
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
  )
}

export default Testimonial