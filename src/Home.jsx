import React, { useState, useEffect } from 'react';
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
import Preloader from './Component/All-sub-pages/AllEmployee/Preloader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> 
      ) : (
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
      )}
    </>
  );
};

export default Home;
