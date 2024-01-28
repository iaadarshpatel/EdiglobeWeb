import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../../footer/Footer';
import axios from 'axios';
import Nav from '../../Nav/Nav';

const Openform = ({enteredEmail, setEnteredEmail}) => {
  const [redirectToObForm, setRedirectToObForm] = useState(false);
  const [razorpayData, setrazorpayData] = useState();
  const [error, setError] = useState(true);
  const [dataError, setDataError] = useState();

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
    if (Array.isArray(dataArray)) {
      return dataArray.find(obj => obj.email.toLowerCase() === email.toLowerCase());
    }
    return null;
  };
  
  const errorMessage = "Please enter your registered email-id or drop a mail on support@ediglobe.com"

const handleCheckButtonClick = () => {
  // Add your logic for checking the email
  const matchedObject = findObjectByEmail(razorpayData, enteredEmail);

  if (matchedObject) {
    setRedirectToObForm(true);
  } else {
    setDataError(errorMessage)
    setEnteredEmail('')

    setTimeout(() => {
      setDataError('');
      setEnteredEmail('');
    }, 5000);
  }
  
};

  // Use Navigate within the context of your route or Routes component
  if (redirectToObForm) {
    return <Navigate to="/ObForm" replace={true} />;
  }

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
                    onChange={handleEmailChange}
                    onKeyDown={handleKeyDown}
                  />
                  <p className='text-danger' style={{fontSize: "14px"}}>{dataError}</p>
                </div>
                <button className="btn primary-btn2" type='button' onClick={handleCheckButtonClick}>Check</button>
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
};

export default Openform;
