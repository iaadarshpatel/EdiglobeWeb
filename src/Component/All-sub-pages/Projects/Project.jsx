import React, { useEffect, useRef, useState } from 'react'
import Nav from '../../Nav/Nav'
import Swal from 'sweetalert2';
import Footer from '../../footer/Footer'
import { MdCancel } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';
import projectpic from '../../../assets/project.jpeg'
import axios from 'axios';
import Preloader from '../AllEmployee/Preloader';
import ProjectRating from '../../departments/ProjectRating';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, getStorage } from 'firebase/storage';


const Project = ({ enteredEmail }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [projectData, setProjectData] = useState();
  const [error, setError] = useState(true);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
   const [uploading, setUploading] = useState(false); // State to track uploading status
  const fileInputRef = useRef(null); // Ref for file input element

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await axios.get("https://sheetlabs.com/EDI/v1");
        const filteredProjects = response.data.filter(project => project.studentemail === enteredEmail && project.coursename !== "");
        setProjectData(filteredProjects);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching project data: ', error.message); // Log any errors
      } finally {
        setError(false);
      }
    };
    apiData();
  }, [enteredEmail]);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const removeUpload = () => {
    setSelectedFile(null);
  }

  const [userData, setUserData] = useState({
    projectlink: "",
  });


  const navigate = useNavigate();

  const submitProject = () => {
    if (!selectedFile) return;

    const maxSizeMB = 10;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (selectedFile.size > maxSizeBytes) {
      alert(`File size exceeds the maximum limit of ${maxSizeMB} MB.`);
      return;
    }

    if (!selectedFile.name.toLowerCase().endsWith(".zip") && !selectedFile.name.toLowerCase().endsWith(".pdf")) {
      alert("Please select a file with .zip or .pdf extension.");
      return;
    }
    

    const storage = getStorage();
    const storageReference = storageRef(storage, `Projects/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageReference, selectedFile);

    let intervalId;

    uploadTask.on("state_changed",
      (snapshot) => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
          setProgresspercent((prevProgress) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            return progress < 100 ? progress : prevProgress;
          });
        }, 50);
        setUploading(true); // Set uploading status to true
      },
      (error) => {
        clearInterval(intervalId);
        alert(error);
      },
      async () => {
        clearInterval(intervalId);
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploadMessage("File Uploaded");
          setTimeout(() => {
            setUploadMessage(null);
          }, 5000);
          setSelectedFile(null);
        } catch (error) {
          console.error("Error getting download URL:", error);
        } finally {
          setUploading(false); // Reset uploading status
        }
      }
    );
  };


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
              {projectData && projectData.length > 0 && <h2>{projectData[0].coursename}</h2>}
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
                    {projectData && projectData.map(({ id, deadlinedate1, projectname1, projecttype1, project1link, projectdetails1 }) => {
                      return (
                        <div className="single_project" key={id}>
                          <div className='project-pic' style={{ position: 'relative' }}>
                            <img src={projectpic} alt="" />
                            <div className='mt-4'>
                              <div className='mb-2'>
                                <h6 className='d-flex'>Rating: <ProjectRating /></h6>
                                <hr className='line' />
                                <h6 className='d-flex'>Deadline: {deadlinedate1}</h6>
                              </div>
                              <a href={project1link} target="_blank" rel="noopener noreferrer">
                                  <button className="project-btn">Download Kit</button>
                              </a>
                            </div>
                          </div>
                          <div className="project-content">
                            <div className='project-title'>
                              <h5 className='project-name'>{projectname1}</h5>
                              <span className="badge rounded-pill text-bg-custom">{projecttype1}</span>
                            </div>
                            <div className='project-desc'>
                              <p className='fs-6'>{projectdetails1}</p>
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
                            <div className="project-wrap d-inline-flex align-items-center p-2">
                              <img src="https://files.codingninjas.in/upload-zip-31827.svg" alt="" />
                              {selectedFile ? (
                                <div>
                                  <span className="float-end">
                                    {selectedFile.name}
                                    <MdCancel style={{ color: '#1e2a5a', cursor: 'pointer' }} onClick={removeUpload} />
                                  </span>
                                </div>
                              ) : (
                                <input 
                                  type="file" 
                                  name="thumbnail" 
                                  className="custom-file-input"
                                  ref={fileInputRef}
                                  onChange={handleFileChange}
                                   />
                              )} 
                              
                            </div>
                              <div className="submit-form ms-2">
                              <button 
                                className="primary-btn cards-btn" 
                                type='button' 
                                onClick={submitProject}>{uploading ? "Uploading..." : "Upload"}</button> 
                              </div>
                              {!uploadMessage ? (
                                <div className='outerbar'>
                                <div className='innerbar' style={{ width: `${progresspercent}%` }}>{Math.round(progresspercent)}%</div>
                                </div>
                            ) : (
                              <p>{uploadMessage}</p>
                            )}
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