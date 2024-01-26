import React from 'react'
import "./hero.css";
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <p className="text-uppercase">
                  Best online education service In the world
                </p>
                <h2 className="text-uppercase mt-4 mb-5">
                  One Step Ahead This Season
                </h2>
                <div>
                  <Link to="/AllDeparts" className="primary-btn2 mb-3 mb-sm-0">Explore Courses</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home