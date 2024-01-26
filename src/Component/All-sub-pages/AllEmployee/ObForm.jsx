import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './allemployee.css';
import Nav from '../../Nav/Nav';
import Footer from '../../footer/Footer';
import student from '../../../assets/student.gif'
import PointConfetti from './PointConfetti';
import { Navigate } from 'react-router-dom';
import Preloader from './Preloader';

const ObForm = ({enteredEmail}) => {

  const [selected, setSelected] = useState('');
  const [load, setLoad] = useState(true);
  const [data, setData] = useState('');
  const [matchedName, setMatchedName] = useState('');
  const [matchedEmaild, setmatchedEmaild] =  useState('');
  const [matchedPhone, setmatchedPhone] =  useState('');
  const [matchedAddOn, setmatchedAddOn] =  useState('');


  //State for firebase
    const [onboardingData, setonboardingData] = useState({
    full_name: "",
    reg_email:"",
    phone: "",
    college_email: "",
    whatsapp_phone: "",
    branch_of_study: "",
    year_of_study: "",
    internship_prog: "",
    calling_phone: "",
    internship_start_date: "",
    reg_id: "",
    add_on: "",
  });

  
  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  }
  const handleClearClick = () =>{
    setSelected('');
  }

  useEffect(() => {
    const apiData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_DATA);
            setData(response.data);
        } catch (error) {
            setLoad(error.message);
        } finally {
            setLoad(false);
        }
    };
      apiData();
}, []);

//Checking array(True | False)
const findObjectByEmail = (dataArray, email) => {
  if (Array.isArray(dataArray)) {
    return dataArray.find(obj => obj.email.toLowerCase() === email.toLowerCase());
  }
  return null;
};


useEffect(() => {
  const matchedObject = findObjectByEmail(data, enteredEmail);
  if (matchedObject) {
    setMatchedName(matchedObject.student_name);
  } else {
    setMatchedName('');
  }
}, [data, enteredEmail]);

useEffect(() => {
  const matchedObject = findObjectByEmail(data, enteredEmail);
  if (matchedObject) {
    setmatchedEmaild(matchedObject.email);
  } else {
    setmatchedEmaild('');
  }
}, [data, enteredEmail]);

useEffect(() => {
  const matchedObject = findObjectByEmail(data, enteredEmail);
  if (matchedObject) {
    setmatchedPhone(matchedObject.phone);
  } else {
    setmatchedPhone('');
  }
}, [data, enteredEmail]);

useEffect(() => {
  const matchedObject = findObjectByEmail(data, enteredEmail);
  console.log(matchedObject); // Log the matched object to the console
  if (matchedObject) {
    setmatchedAddOn(matchedObject.add_on);
    console.log(setmatchedAddOn);
  } else {
    setmatchedAddOn('');
  }
}, [data, enteredEmail]);



const words = matchedName.toLowerCase().split(' ');
const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  return (
    <>
    {!enteredEmail && <Navigate to="/Openform" replace={true}></Navigate>}
      {load ? (
        <Preloader/>
      ) : (
        <>
    <PointConfetti/>
      <Nav />
      <section className="section_gap">
        <div className="d-flex justify-content-center align-items-center vh-auto mb-5">
          <div className="container">
            <form className="registration-form p-3 rounded border overflow-auto w-100">
              <h4>Fill your OnBoarding</h4>
              <hr />
              <div class="alert onboarding_info" role="alert">
                <h4 class="alert-heading opacity-75 fs-5" style={{display: 'inline-block'}}>Hello {matchedName && firstWord}!
                <img src={student} alt="" style={{ width: "50px" }} /></h4>
                <p>Congratulations once again on joining our vibrant community at EdiGlobe Student Community! As you settle into your new role, we're eager to create a dynamic and engaging experience for you.</p>
                <hr id='alert_line' />
                <p class="mb-1 text-light text-decoration-underline">Points to Remember:</p>
                <ol className='list-group'>
                  <li class="list-group-item">&#9755;&nbsp;Please fill all the details below properly as those will be used in all further communications.</li>
                  <li class="list-group-item">&#9755;&nbsp;Make sure to use same emails and contact number which you have used at the time of registration.</li>
                  <li class="list-group-item">&#9755;&nbsp;Details cannot changed further.</li>
                </ol>
              </div>
              <div className='rounded border p-2'>
              
                <label htmlFor="fullName">Full Name: 
                <span className='badge text-bg-danger w-auto py-1  ms-2 bg-opacity-25 text-dark'> {matchedName && matchedName} 
                </span></label>

                <label htmlFor="reg_email">Registered Email: 
                <span className='badge text-bg-success w-auto ms-2 py-1 bg-opacity-25 text-dark'> {matchedEmaild && matchedEmaild}</span></label>

                <label htmlFor="phone ">Phone:
                <span className='badge text-bg-info w-auto ms-2 py-1 bg-opacity-25 text-dark'> {matchedPhone && matchedPhone}</span></label>

                <label htmlFor="phone ">Opted for AddOn:
                <span className='badge text-bg-dark w-auto ms-2 py-1 bg-opacity-25 text-dark'> {matchedAddOn && matchedAddOn}</span></label>
              </div>

              <div className="row">
              
                <div className="col-sm-6">
                  {/* First Column */}
                  <label htmlFor="email">College Email ID:</label>
                  <input type="email" placeholder="Email" name="email" className="form-control" required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" />

                  <label htmlFor="college">College Name:</label>
                  <input type="text" placeholder="College" name="college" className="form-control" required />

                  <label htmlFor="branch">Year of Study:</label>
                  <div className="custom-dropdown d-flex inline-block">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={selected}
                      onChange={handleSelectChange}
                    >
                      <option value="" disabled>Select Year</option>
                      <option value="1st_year">1st Year</option>
                      <option value="2nd_year">2nd Year</option>
                      <option value="3rd_year">3rd Year</option>
                      <option value="4th_year">4th Year</option>
                      <option value="other">Other</option>
                    </select>
                    {selected && (
                      <button className="btn btn-outline-dark mx-2 w-25" onClick={handleClearClick}>Close</button>
                    )}
                  </div>
                  <label htmlFor="phone">Phone:</label>
                  <input type="text" placeholder="Calling Number" name="phone" className="form-control" required pattern="[0-9]{10}" />
                  <label htmlFor="text">Registration Id:</label>
                  <input type="text" placeholder="Registration Id" name="registrationid" className="form-control" required pattern="[0-9]{10}" />

                </div>

                <div className="col-sm-6">
                  {/* Second Column */}
                  <label htmlFor="phone">Whatsapp Number:</label>
                  <input type="text" placeholder="Whatsapp Number" name="phone" className="form-control" required pattern="[0-9]{10}" />

                  <label htmlFor="branch">Branch Of Study:</label>
                  <select className="form-select" aria-label="Default select example" >
                    <option selected>Select Stream</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="Civil">Civil</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Management">Management</option>
                    <option value="Bio_Technology">Bio Technology</option>
                    <option value="Other">Other</option>
                  </select>

                  <label htmlFor="internship">Internship Program:</label>
                  <select className="form-select" aria-label="Default select example" >
                    <option selected>Select Internship</option>
                    <option value="CSE">Business Analytics</option>
                    <option value="IT">Stock Marketing</option>
                    <option value="ECE">Cyber Security</option>
                    <option value="EEE">Digital Marketing</option>
                    <option value="Civil">VLSI</option>
                    <option value="Mechanical">Genetic Engineering</option>
                    <option value="Management">Data Science</option>
                    <option value="Bio_Technology">Bioinformatics</option>
                    <option value="Other">Artificial Intelligence</option>
                    <option value="Other">Internet of Things</option>
                    <option value="Other">Web development</option>
                    <option value="Other">Robotics</option>
                    <option value="Other">Finance</option>
                    <option value="Other">Nanoscience/Nanotechnology</option>
                    <option value="Other">Embedded System</option>
                    <option value="Other">AWS</option>
                    <option value="Other">Construction planning</option>
                    <option value="Other">Hybrid Electric Vehicle</option>
                    <option value="Other">Machine Learning</option>
                    <option value="Other">App Development</option>
                    <option value="Other">HR</option>
                    <option value="Other">Hybrid Electric Vehicle</option>
                    <option value="Other">I.C. Engine</option>
                  </select>

                  <label htmlFor="branch">Which month you want to start with the program?:</label>
                  <select className="form-select" aria-label="Default select example" >
                    <option selected>Select Month</option>
                    <option value="1st_year">February 2024</option>
                    <option value="2nd_year">March 2024</option>
                    <option value="3rd_year">April 2024</option>
                  </select>
                </div>

                <hr />
                      {matchedAddOn === "Yes" ? (
                        <div className="col-sm-6 add_on_certificate">
                  <label htmlFor="certificate" id='remove-margin'>Add On Certificate:</label>
                  <small className='font-monospace mb-2'>Mention only Certificate <b className='text-dark'>Series Number</b> from
                    <a
                      href="https://drive.google.com/file/d/1FH3o0K1Xt0N51z1eTZ6SQ0o1oh6vniJ6/view"
                      style={{ color: 'dodgerblue' }}
                      target="_blank" rel="noopener noreferrer"> Certification PDF Link
                    </a></small>
                  <input type="text" 
                  placeholder="Series Number" name="certificate" className="form-control" required />
                </div>
                      ): null}
              </div>
              <div className="clearfix mt-3">
                <button type="submit" className="primary-btn2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )};
  </>
      );
};

export default ObForm;
