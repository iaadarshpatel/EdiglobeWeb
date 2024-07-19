import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Nav from '../../Nav/Nav';
import Footer from '../../footer/Footer';
import './projectpage.css';
import axios from 'axios';  
import db from '../../../FirebaseConfig';
import { onValue, ref } from "firebase/database";

const Projectsubmission = ({ enteredEmail, setEnteredEmail }) => {
  const [projectPage, setprojectPage] = useState(false);
  const [dataError, setDataError] = useState();
  const [projectData, setprojectData] = useState();
  console.log(projectData);
  const [error, setError] = useState(true);
  const [inputValid, setInputValid] = useState('');
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);  // new state for loading

  useEffect(() => {
    setEnteredEmail('')
    const apiData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_PROJECTDATA);
        setprojectData(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching project data: ', error.message); 
      } finally {
        setLoading(false);  // set loading to false after API call is done
        setError(false);
      }
    };
    apiData();
  }, []);

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const findObjectByEmail = (dataArray, email) => {
    const foundObject = dataArray.find(obj => obj.studentemail && obj.studentemail.toLowerCase() === email.toLowerCase());
    if (foundObject) {
      return true;
    }
    return false;
  };

  const errorMessage = "No Project Available with this email-id"

  const handleCheckButtonClick = (event) => {
    setInputValid(event.target.value)
    const matchedObject = findObjectByEmail(emails, enteredEmail);
    const matchedProjectObject = findObjectByEmail(projectData, enteredEmail);

    if (matchedProjectObject && !matchedObject) {
      setprojectPage(true);
    }
    else if (matchedObject) {
      setDataError("Ob Form already filled");
      setEnteredEmail('');
      setTimeout(() => {
        setDataError('');
      }, 5000);
    }
    else {
      setDataError(errorMessage);
      setEnteredEmail('');
      setTimeout(() => {
        setDataError('');
      }, 5000);
    }
  };

  useEffect(() => {
    fetchObData();
  }, []);

  const fetchObData = () => {
    const starCountRef = ref(db, 'OB Form Data');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        // Convert object to array of [key, value] pairs
        const dataArray = Object.entries(data);
        // Map over the array and extract the email property
        const emailArray = dataArray.map(([key, value]) => ({ student_email: value.student_email, index: key }));
        // Set the state with the array of emails
        setEmails(emailArray);
      }
    });
  };

  // Use Navigate within the context of your route or Routes component
  if (projectPage) {
    return <Navigate to="/project" replace={true} />;
  }

  const isInputvalid = enteredEmail.includes("@")
  const buttonColor = {
    backgroundColor: 'var(--text-color)',
    color: 'white'
  };

  return (
    <>
      <Nav />
      <section id='aboutUs' className='banner_area '>
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="banner_content text-center">
                  <h2>View Your Project</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='projectsubmit' className='section_gap'>
        <div className="container">
          <div className="main_title" data-aos="fade-up">
            <h2>Check Your Project!</h2>
            <p>Form gathers the required information for a student's official enrollment in an Ediglobe course.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Registered Email:</label>
                  <input
                    type="email"
                    className="form-control py-2"
                    id="email"
                    placeholder="Enter Registered Email"
                    name="email"
                    value={enteredEmail}
                    onChange={handleEmailChange}
                    autoComplete='off'
                    required
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                  />
                  <p className='text-danger' style={{ fontSize: "14px" }}>{dataError}</p>
                </div>
                <button 
                      disabled={!isInputvalid || projectData == null || emails == null} 
                      id='checkbtn'
                      className={`checkbtn btn`}
                      style={buttonColor}
                      type='button'
                      onClick={handleCheckButtonClick}>
                      {loading ? 'Loading...' : 'Check Now'}
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-2">
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projectsubmission;
