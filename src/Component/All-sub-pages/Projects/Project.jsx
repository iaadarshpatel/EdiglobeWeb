import React, { useEffect, useRef, useState } from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { Navigate, useNavigate } from 'react-router-dom';
import projectpic from '../../../assets/project.jpeg'
import axios from 'axios';
import Preloader from '../AllEmployee/Preloader';
import ProjectRating from '../../departments/ProjectRating';
import { ref as storageRef, getDownloadURL, getStorage, uploadBytesResumable, listAll } from 'firebase/storage';
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
  const [Upload, setUpload] = useState("YES");
  const [allDownloadURL, setAllDownloadURL] = useState([])


  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_PROJECTDATA);
        const filteredProjects = response.data.filter(project => project.studentemail.toLowerCase() === enteredEmail.toLowerCase() && project.coursename !== "");
        setProjectData(filteredProjects);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching project data: ', error.message);
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

  const submitProject = (projectName) => {
    if (!selectedFile) return;
    const maxSizeMB = 10;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (selectedFile.size > maxSizeBytes) {
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: error.message || 'File size should be less than 10 MB.',
        showCancelButton: false,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          removeUpload(); // Reset the selected file
        }
      });
      return;
    }

    // Check file extension
    if (!selectedFile.name.toLowerCase().endsWith(".zip") && !selectedFile.name.toLowerCase().endsWith(".pdf")) {
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: error.message || 'Please select a file with .zip or .pdf extension.',
        showCancelButton: false,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          removeUpload(); // Reset the selected file
        }
      });
      return;
    }

    const storage = getStorage();
    const storageReference = storageRef(storage, `Projects/${enteredEmail}_${projectData[0].coursename}_${projectName}_${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageReference, selectedFile);

    let intervalId;

    uploadTask.on("state_changed",
      (snapshot) => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressPercent(progress);
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
          setUploadMessage(" File Uploaded, Redirecting to Main Page...");
          setSelectedFile(null);
          setProgressPercent(0); // Reset progress percent
          setUploading(false); // Reset uploading status
          setTimeout(() => {
            setUploadMessage(null); // Clear the message after 5 seconds
            navigate("/Projectsubmission");
          }, 5000);

          // Now that the file is uploaded, you can use the downloadURL as needed
          // console.log("Email: ", enteredEmail, "Download URL:", downloadURL);

        } catch (error) {
          console.error("Error getting download URL:", error);
        } finally {
          setUpload("NO"); // Disable file upload after upload
        }
      }
    );
  };

  //Fetch all the data from Storage bucket
  useEffect(() => {
    const fetchDownloadURLs = async () => {
      try {
        const storage = getStorage();
        const listRef = storageRef(storage, 'Projects');
        const items = await listAll(listRef);
        const urls = await Promise.all(items.items.map(async item => await getDownloadURL(item)));
        setAllDownloadURL(urls);
      } catch (error) {
        console.error('Error fetching download URLs:', error);
      }
    };
    fetchDownloadURLs();
  }, []);

  const toProperCase = (name) => {
    return name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };
  const studentName = projectData && projectData.length > 0 ? toProperCase(projectData[0].studentname) : '';
  const courseName = projectData && projectData.length > 0 ? projectData[0].coursename : '';
  const projectType = projectData && projectData.length > 0 ? projectData[0].projecttype1 : '';

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
                <p>Transforming Ideas into Innovations: Explore Our Projects</p>
              </div>
              <div className="project_container" data-aos="fade-up" data-aos-offset="0">
                <div className="form-checks">
                  <h6 className="project_name text-decoration-underline">Project Details:</h6>
                  <label class="form-check-label">
                    Name:<br></br> <span>{studentName}</span>
                  </label>
                  <label class="form-check-label">
                    Email:<br></br> <span>{enteredEmail}</span>
                  </label>
                  <label class="form-check-label">
                    Course Name:<br></br> <span>{courseName}</span>
                  </label>
                  <label class="form-check-label">
                    Project Name:<br></br> <span className='badge rounded-pill text-bg-custom'>{projectType}</span>
                  </label>
                  <label className="form-check-label">
                    Submission Status:<br></br>
                    <span>{projectData && projectData.length > 0 && projectData[0].AccessToUpload === "YES" ? "Not submitted" : "Submitted"}</span>
                  </label>

                </div>
                <div className="single_projects_container">
                  {projectData.map(({ id, deadlinedate1, projectname1, projecttype1, project1link, projectdetails1, AccessToUpload }) => {
                    return (
                      <div className="single_project" key={id}>
                        <div className='project-pic' style={{ position: 'relative' }}>
                          <img src={projectpic} alt="" />
                          <div className='mt-4'>
                            <div className='mb-2'>
                              <h6 className='d-flex'>Rating: N/A<ProjectRating /></h6>
                              <hr className='line' />
                              <h6 className='d-flex'>Deadline: {deadlinedate1}</h6>
                            </div>
                            <a href={project1link} target="_blank" rel="noopener noreferrer">
                              <button className="project-btn">View Project</button>
                            </a>
                          </div>
                        </div>
                        <div className="project-content">
                          <div className='project-title'>
                            <h5 className='project-name'>{projectname1}</h5>
                            <span className="badge rounded-pill text-bg-custom">{projecttype1}</span>
                          </div>
                          <div className='project-desc'>
                            <p className='fs-6 project-details'>
                              {projectdetails1}
                            </p>
                          </div>
                          <div className="project-evaluation">
                            <h6 className='project-name mt-2 d-flex justify-content-start'>Evalaution:</h6>
                            <ul>
                              <li>Upon submission, your project will undergo automatic evaluation based on the predefined tasks outlined above.</li>
                              <li>A per the guidelines, kindly upload the project file <b style={{ color: "black" }}>only once.</b></li>
                              <li>Kindly ensure that project are submitted exclusively in <b style={{ color: "black" }}>PDF or ZIP</b> file formats only.</li>
                              <li>Certificates will be issued after submission of both minor and major projects. It may takee 45 days to issue certificate</li>
                              <li>Please make sure you should upload file using <b style={{ color: "black" }}>laptop or desktop</b>.</li>
                            </ul>
                          </div>
                          <h6 className='project-name mt-0 d-flex justify-content-start'>Please upload your project pdf here:</h6>
                          {AccessToUpload === "YES" ? (
                            <FileUpload
                              selectedFile={selectedFile}
                              handleFileChange={handleFileChange}
                              removeUpload={removeUpload}
                              uploading={uploading}
                              style={{ display: 'none' }}
                              submitProject={() => submitProject(projectname1)}
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