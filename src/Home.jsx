import React from 'react'
import Footer from './Component/footer/Footer';
import Nav from './Component/Nav/Nav';
import Hero from './Component/hero/hero';
import Feature from './Component/features/Feature';
import Courses from './Component/courses/Course';
import Registration from './Component/registration/Registration';
import Expert from './Component/Experts/Expert';
import Testimonial from './Component/testimonials/Testimonial';
import Department from './Component/departments/cards';
import ExpertWorks from './Component/ExpertWorks/ExpertWorks';
import Collab from './Component/collabration/Collab';
import Certificates from './Component/allcertificates/EachCertificates';


const Home = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Feature/>
    <Collab/>
    <Department/>
    <Courses/>
    <Registration  />
    <Expert/>
    <ExpertWorks/>
    <Testimonial/>
    <Certificates/>
    <Footer/>
    </>
  )
}

export default Home