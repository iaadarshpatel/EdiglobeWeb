import React, { useEffect, useState } from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { MdCancel } from "react-icons/md";
import { Navigate } from 'react-router-dom';
import projectpic from '../../../assets/project.jpeg'
import axios from 'axios';
import Preloader from '../AllEmployee/Preloader';
import ProjectRating from '../../departments/ProjectRating';

const Project = ({ enteredEmail }) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [projectData, setprojectData] = useState();
  console.log(projectData);
  const [error, setError] = useState(true);

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await axios.get("https://sheetdb.io/api/v1/lvaph4ho3lol6");
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
              {
                projectData.map(({ id, course_name}) => {
                  return (
                <h2 key={id}>{course_name}</h2>
                )
              })
            }
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
                  {
                    projectData.map(({ id, course_name, deadline_date1, project_name1, project_type1, project1_link, project_details1 }) => {
                      return (
                        <div className="single_project" key={id}>
                          <div className='project-pic' style={{ position: 'relative' }}>
                            <img src={projectpic} alt="" />
                            <div className='mt-4'>
                              <div className='mb-2'>
                                <h6 className='d-flex'>Rating: <ProjectRating /></h6>
                                <hr className='line' />
                                <h6 className='d-flex'>Deadline: {deadline_date1}</h6>
                              </div>
                              <a href={project1_link} target="_blank" rel="noopener noreferrer">
                                  <button className="project-btn">Download Kit</button>
                              </a>
                            </div>
                          </div>

                          <div className="project-content">
                            <div className='project-title'>
                              <h5 className='project-name'>{project_name1}</h5>
                              <span className="badge rounded-pill text-bg-custom">{project_type1}</span>
                            </div>
                            <div className='project-desc'>
                              <p className='fs-6'>{project_details1}</p>
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
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  )
}

export default Project