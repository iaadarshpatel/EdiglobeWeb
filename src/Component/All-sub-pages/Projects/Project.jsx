import React, { useEffect, useState } from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { MdCancel } from "react-icons/md";
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Preloader from '../AllEmployee/Preloader';
import ProjectRating from '../../departments/ProjectRating';

const Project = ({ enteredEmail }) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [projectData, setprojectData] = useState();
  const [error, setError] = useState(true);

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await axios.get("https://script.google.com/macros/s/AKfycbxdDyMSUlLPRPtoBNSri1US3Vko2LXxDJOOlMNTf2BACyGcggPYm_CfFuDcOCtn5XQiag/exec?action=getUsers");
        setprojectData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setError(false);
      }
    };
    apiData();
  }, []);

  const handleFileChange = (event) => {
    // Access the selected file from the event
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const removeUpload = () => {
    setSelectedFile(null);
  }

  return (
    <>
      {!enteredEmail && <Navigate to="/Projectsubmission" replace={true}></Navigate>}
      {error ? (
        <Preloader />
      ) : (
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
                  <div className='mt-4'>
                    <h6 className='d-flex'>Rating: <ProjectRating /></h6>
                    <hr className='line' />
                    <a href="https://ninjasfiles.s3.amazonaws.com/Restaurant%20New%20Doc%20two-3844111111%20%281%29-3944.pdf" download>
                      <button className="project-btn">Download Kit</button>
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <div className='project-title'>
                    <h5 className='project-name'>Resturant Menu Application</h5>
                    <span className="badge rounded-pill text-bg-custom1">Minor Project</span>
                  </div>
                  <div className='project-desc'>
                    <p className='fs-6'>Create a responsive Restaurant web application with a Bootstrap-integrated navbar for navigation, search functionality, and filter buttons for categorizing and searching menu items.</p>
                  </div>
                  <div className="project-evaluation">
                    <h6 className='project-name mt-2 d-flex justify-content-start'>Evalaution:</h6>
                    <ul>
                      <li>Upon submission, your project will undergo automatic evaluation based on the predefined tasks outlined above.</li>
                      <li>Successful completion of all tasks/requirements will result in a full score.</li>
                      <li>Incomplete tasks will lead to a partial score based on successful completion.</li>
                      <li>Please allow a some time for your project to be evaluated post-submission.</li>
                      <li>Please make sure you should upload file using laptop or desktop.</li>
                    </ul>
                  </div>
                  <h6 className='project-name mt-0 d-flex justify-content-start'>Please upload your project pdf here:</h6>
                  <div className="project-upload ">
                    <div className='project-wrap d-inline-flex align-items-center p-2'>
                      <img src="https://files.codingninjas.in/upload-zip-31827.svg" />
                      {selectedFile ? (
                        <div>
                          <span className='float-end'>
                            {selectedFile.name}
                            <MdCancel style={{ color: '#1e2a5a', cursor: 'pointer' }} onClick={removeUpload} />
                          </span>
                        </div>
                      ) : (
                        <input type="file" name="thumbnail" className="custom-file-input" onChange={handleFileChange} />
                      )}
                    </div>
                    <div className="submit-form ms-2">
                      <button class="primary-btn cards-btn" type="submit">Upload</button>
                    </div>
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
      )};
    </>
  )
}

export default Project