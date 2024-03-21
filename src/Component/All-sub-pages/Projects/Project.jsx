import React, { useEffect, useState } from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'

const Project = () => {
  return (
    <>
      <Nav />
      <section id='project' className='course_details_area section_gap'>
        <div className="container">
          <div className="main_title" data-aos="fade-up">
            <h2>Web Development</h2>
            <p>Replenish man have thing gathering lights yielding shall you</p>
          </div>
          <div className="project_container" data-aos="fade-up" data-aos-offset="0">
            <div className="form-checks">
              <h6 className="project_name">Web Developement</h6>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  <span>Minor Project</span>
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Major Project
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Resume worthy project
                </label>
              </div>
              <hr />
              <h6 className="course_name">Skills & competencies</h6>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  <span>HTML & CSS</span>
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Javascript
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  ReactJs
                </label>
              </div>
            </div>
            <div className="single_projects_container">
              <div className="single_project">
              <div className='project-pic'>
                <img src="https://files.codingninjas.in/menu_application02-.webp" alt="" />
              </div>
              <div className="project-content">
                <div className='project-title'>
                  <h5 className='project-name'>Resturant Menu Application</h5>
                  <span className="badge rounded-pill text-bg-custom1">Minor Project</span>
                </div>
                <div className='project-desc'>
                  <p>Create a responsive Restaurant web application with a Bootstrap-integrated navbar for navigation, search functionality, and filter buttons for categorizing and searching menu items.</p>
                </div>
                <div className='project-skills d-flex gap-2'>
                  <span class="badge rounded-pill text-bg-custom fst-normal">HTML</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">CSS</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">Javascript</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">React</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">Node</span>
              </div>
              </div>
              </div>
              <div className="single_project">
              <div className='project-pic'>
                <img src="	https://files.codingninjas.in/baverage02-.webp" alt="" />
              </div>
              <div className="project-content">
                <div className='project-title'>
                  <h5 className='project-name'>Resturant Menu Application</h5>
                  <span className="badge rounded-pill text-bg-custom2">Minor Project</span>
                </div>
                <div className='project-desc'>
                  <p>Create a responsive Restaurant web application with a Bootstrap-integrated navbar for navigation, search functionality, and filter buttons for categorizing and searching menu items.</p>
                </div>
                <div className='project-skills d-flex gap-2'>
                  <span class="badge rounded-pill text-bg-custom fst-normal">HTML</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">CSS</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">Javascript</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">React</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">Node</span>
              </div>
              </div>
              </div>
              <div className="single_project">
              <div className='project-pic'>
                <img src="https://files.codingninjas.in/cart_page_-1708069907.webp" alt="" />
              </div>
              <div className="project-content">
                <div className='project-title'>
                  <h5 className='project-name'>Resturant Menu Application</h5>
                  <span className="badge rounded-pill text-bg-custom3">Minor Project</span>
                </div>
                <div className='project-desc'>
                  <p>Create a responsive Restaurant web application with a Bootstrap-integrated navbar for navigation, search functionality, and filter buttons for categorizing and searching menu items.</p>
                </div>
                <div className='project-skills d-flex gap-2'>
                  <span class="badge rounded-pill text-bg-custom fst-normal">HTML</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">CSS</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">Javascript</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">React</span>
                  <span class="badge rounded-pill text-bg-custom fst-normal">Node</span>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Project