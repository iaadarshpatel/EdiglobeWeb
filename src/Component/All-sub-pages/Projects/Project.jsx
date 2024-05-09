import React, { useEffect, useRef, useState } from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { Navigate, useNavigate } from 'react-router-dom';
import projectpic from '../../../assets/project.jpeg'
import axios from 'axios';
import Preloader from '../AllEmployee/Preloader';
import ProjectRating from '../../departments/ProjectRating';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, getStorage } from 'firebase/storage';
import FileUpload from './FileUpload';
import FileNotUpload from './FileNotUpload';
import Swal from 'sweetalert2';


const Project = ({ enteredEmail }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [projectData, setProjectData] = useState();
  const [error, setError] = useState(true);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [uploading, setUploading] = useState(false); // State to track uploading status
  const fileInputRef = useRef(null); // Ref for file input element
  const [downloadURL, setDownloadURL] = useState(null); // State to hold download URL
  console.log(downloadURL);

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await axios.get("https://script.google.com/macros/s/AKfycbxdDyMSUlLPRPtoBNSri1US3Vko2LXxDJOOlMNTf2BACyGcggPYm_CfFuDcOCtn5XQiag/exec?action=getUsers");
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


  const navigate = useNavigate();

  const submitProject = () => {
    if (!selectedFile) return;
    const maxSizeMB = 10;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (selectedFile.size > maxSizeBytes) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: error.message || 'File size should be less than 10 MB.',
        showCancelButton: false, // Hide cancel button
        confirmButtonText: 'OK', // Change confirm button text
      }).then((result) => {
        if (result.isConfirmed) {
          removeUpload(); // Reset the selected file
        }
      });
      return;
    }

    if (!selectedFile.name.toLowerCase().endsWith(".zip") && !selectedFile.name.toLowerCase().endsWith(".pdf")) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: error.message || 'Please select a file with .zip or .pdf extension.',
        showCancelButton: false, // Hide cancel button
        confirmButtonText: 'OK', // Change confirm button text
      }).then((result) => {
        if (result.isConfirmed) {
          removeUpload(); // Reset the selected file
        }
      });
      return;
    }


    const storage = getStorage();
    const storageReference = storageRef(storage, `Projects/${enteredEmail}_${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageReference, selectedFile);

    let intervalId;

    uploadTask.on("state_changed",
      (snapshot) => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress); // Log the progress value
          setProgressPercent(progress); // Update the state with the progress value
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

  //Fetch the download file
  useEffect(() => {
    if (selectedFile) {
      const storage = getStorage();
      const storageReference = storageRef(storage, `Projects/${enteredEmail}_${selectedFile.name}`);
      getDownloadURL(storageReference)
        .then(url => setDownloadURL(url))
        .catch(error => console.error('Error getting download URL:', error));
    } else {
      setDownloadURL(null); 
    }
  }, [selectedFile, enteredEmail, downloadURL]);



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
                  {projectData.map(({ id, deadlinedate1, projectname1, projecttype1, project1link, projectdetails1, AccessToUpload }) => {
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
                          {AccessToUpload === "YES" ? (
                            <FileUpload
                              selectedFile={selectedFile}
                              handleFileChange={handleFileChange}
                              removeUpload={removeUpload}
                              uploading={uploading}
                              submitProject={submitProject}
                              progressPercent={progressPercent}
                              uploadMessage={uploadMessage}
                            />
                          ) : (
                            <FileNotUpload />
                          )}
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