import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../Nav/Nav';
import Footer from '../../footer/Footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import projectpic from '../../../assets/project.jpeg';
import axios from 'axios';
import Preloader from '../AllEmployee/Preloader';
import ProjectRating from '../../departments/ProjectRating';
import { ref as storageRef, getDownloadURL, getStorage, uploadBytesResumable, listAll } from 'firebase/storage';
import FileUpload from './FileUpload';
import FileNotUpload from './FileNotUpload';
import Swal from 'sweetalert2';

const Project = ({ enteredEmail }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState(null);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);
  const [Upload, setUpload] = useState("YES");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(process.env.REACT_APP_PROJECTDATA);
        const filteredProjects = response.data.filter(project => project.studentemail.toLowerCase() === enteredEmail.toLowerCase() && project.coursename !== "");
        setProjectData(filteredProjects);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching project data: ', error.message);
      } finally {
        setLoading(false);
      }
    };
    apiData();
  }, [enteredEmail]);

  useEffect(() => {
    const fetchDownloadURLs = async () => {
      try {
        const storage = getStorage();
        const listRef = storageRef(storage, 'Projects');
        const items = await listAll(listRef);
        const urls = await Promise.all(items.items.map(async item => {
          const url = await getDownloadURL(item);
          const nameParts = item.name.split('+');
          const email = nameParts[0];
          const course = nameParts[1];
          const projectName = nameParts[2];
          const projectType = nameParts[3];
          const fileName = nameParts.slice(4).join('+'); // in case file name contains '+'

          return { url, email, course, projectName, projectType, fileName };
        }));
        setUploadedFiles(urls);
      } catch (error) {
        console.error('Error fetching download URLs:', error);
      }
    };
    fetchDownloadURLs();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const removeUpload = () => {
    setSelectedFile(null);
  };

  const submitProject = (projectName, projectType) => {
    if (!selectedFile) return;
    const maxSizeMB = 10;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (selectedFile.size > maxSizeBytes) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: 'File size should be less than 10 MB.',
        showCancelButton: false,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          removeUpload();
        }
      });
      return;
    }

    if (!selectedFile.name.toLowerCase().endsWith(".zip") && !selectedFile.name.toLowerCase().endsWith(".pdf")) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: 'Please select a file with .zip or .pdf extension.',
        showCancelButton: false,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          removeUpload();
        }
      });
      return;
    }

    const storage = getStorage();
    const storageReference = storageRef(storage,
      `Projects/${enteredEmail}+${projectData[0].coursename}+${projectName}+${projectType}+${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageReference, selectedFile);

    let intervalId;

    uploadTask.on("state_changed",
      (snapshot) => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressPercent(progress);
        }, 50);
        setUploading(true);
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
          setProgressPercent(0);
          setUploading(false);
          setTimeout(() => {
            setUploadMessage(null);
            navigate("/Projectsubmission");
          }, 5000);

        } catch (error) {
          console.error("Error getting download URL:", error);
        } finally {
          setUpload("NO");
        }
      }
    );
  };

  const toProperCase = (name) => {
    return name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };
  const studentName = projectData.length > 0 ? toProperCase(projectData[0].studentname) : '';
  const courseName = projectData.length > 0 ? projectData[0].coursename : '';

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {!enteredEmail && <Navigate to="/Projectsubmission" replace={true} />}
      <Nav />
      <section id='project' className='course_details_area section_gap'>
        <div className="container">
          <div className="main_title" data-aos="fade-up">
            {courseName && <h2>{courseName}</h2>}
            <p>Transforming Ideas into Innovations: Explore Our Projects</p>
          </div>
          <div className="project_container" data-aos="fade-up" data-aos-offset="0">
            <div className="form-checks">
              <h6 className="project_name text-decoration-underline">Project Details:</h6>
              <label className="form-check-label">
                Name:<br></br> <span>{studentName}</span>
              </label>
              <label className="form-check-label">
                Email:<br></br> <span>{enteredEmail}</span>
              </label>
              <label className="form-check-label">
                Course Name:<br></br> <span>{courseName}</span>
              </label>
            </div>
            <div className="single_projects_container">
              {projectData.map(({ id, deadlinedate1, projectname1, projecttype1, project1link, projectdetails1, AccessToUpload }) => {
                const existingFile = uploadedFiles.find(file => 
                  file.email === enteredEmail &&
                  file.course === courseName &&
                  file.projectName === projectname1 &&
                  file.projectType === projecttype1
                );

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
                        <Link to={project1link} target='_blank' rel="noopener noreferrer">
                          <button className="project-btn">View Project</button>
                        </Link>
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
                        <h6 className='project-name mt-2 d-flex justify-content-start'>Evaluation:</h6>
                        <ul>
                          <li>Upon submission, your project will undergo automatic evaluation based on the predefined tasks outlined above.</li>
                          <li>As per the guidelines, kindly upload the project file <b style={{ color: "black" }}>only once.</b></li>
                          <li>Kindly ensure that projects are submitted exclusively in <b style={{ color: "black" }}>PDF or ZIP</b> file formats only.</li>
                          <li>Certificates will be issued after submission of both minor and major projects. It may take 45 days to issue a certificate.</li>
                          <li>Please make sure you should upload the file using a <b style={{ color: "black" }}>laptop or desktop</b>.</li>
                        </ul>
                      </div>
                      <h6 className='project-name mt-0 d-flex justify-content-start'>Please upload your project pdf here:</h6>
                      {existingFile ? (
                        <div>
                          <p>File already uploaded</p>
                          <Link to={existingFile.url} target="_blank" className='font-monospace text-decoration-underline' rel="noopener noreferrer" style={{color: '#1e2a5a'}}>View Upload</Link>
                        </div>
                      ) : AccessToUpload === "YES" ? (
                        <FileUpload
                          selectedFile={selectedFile}
                          handleFileChange={handleFileChange}
                          removeUpload={removeUpload}
                          uploading={uploading}
                          style={{ display: 'none' }}
                          submitProject={() => submitProject(projectname1, projecttype1)}
                          progressPercent={progressPercent}
                          uploadMessage={uploadMessage}
                        />
                      ) : (
                        <FileNotUpload />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Project;
