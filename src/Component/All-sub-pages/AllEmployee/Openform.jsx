import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../../footer/Footer';
import axios from 'axios';
import Nav from '../../Nav/Nav';
import db from '../../../FirebaseConfig';
import { onValue, ref } from "firebase/database";

const Openform = ({ enteredEmail, setEnteredEmail }) => {
  const [redirectToObForm, setRedirectToObForm] = useState(false);
  const [razorpayData, setrazorpayData] = useState();
  const [error, setError] = useState(true);
  const [dataError, setDataError] = useState();
  const [emails, setEmails] = useState([]);
  const [inputValid, setInputValid] = useState('');

  useEffect(() => {
    setEnteredEmail('')
    const apiData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_DATA);
        setrazorpayData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setError(false);
      }
    };
    apiData();
  }, []);


  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior (e.g., form submission)
      handleCheckButtonClick();
    }
  };

  // Function to find object by email in an array
  const findObjectByEmail = (dataArray, email) => {
    const foundObject = dataArray.find(obj => obj.student_email && obj.student_email.toLowerCase() === email.toLowerCase());
    if (foundObject) {
      return true;
    }
    return false;
  };

  const errorMessage = "Please enter your registered email-id or drop a mail on support@ediglobe.com"

  const handleCheckButtonClick = (event) => {
    setInputValid(event.target.value)
    const matchedObject = findObjectByEmail(emails, enteredEmail);
    const matchedRazorpayObject = findObjectByEmail(razorpayData, enteredEmail);
  
    if (matchedRazorpayObject && !matchedObject) {
      setRedirectToObForm(true);
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
  
  const fetchObData =  () => {
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
  if (redirectToObForm) {
    return <Navigate to="/ObForm" replace={true} />;
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
                  <h2>On-Boarding Form</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='checkcertificate' className='section_gap'>
        <div className="container">
          <div className="main_title" data-aos="fade-up">
            <h2>Check Your Email!</h2>
            <p>Form gathers the required information for a student's official enrollment in an Ediglobe course.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Registered Email ID:</label>
                  <input
                    type="email"
                    className="form-control py-2"
                    id="email"
                    placeholder="Registered Email"
                    name="email"
                    autoComplete='off'
                    required
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    value={enteredEmail}
                    onKeyDown={handleKeyDown}
                    onChange={handleEmailChange}
                  />
                  <p className='text-danger' style={{ fontSize: "14px" }}>{dataError}</p>
                </div>
                <button 
                    disabled={!isInputvalid || razorpayData == null || emails == null} 
                    id='checkbtn'
                    className={`checkbtn btn`}
                    style={buttonColor}
                    type='button'
                    onClick={handleCheckButtonClick}>
                    Check
                    </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-2">

          </div>
        </div>
      </section >
      <Footer />
    </>
  );
};

export default Openform;
