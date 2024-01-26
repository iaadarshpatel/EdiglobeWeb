import React, { useState } from 'react';
import Swal from 'sweetalert2';
import db from '../../FirebaseConfig';
import { push, ref, set, onValue } from "firebase/database";


const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
  });

  const [rcbData, setRcbData] = useState()

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const postUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Update the user data
    setUserData({ ...userData, [name]: value });

    // Validate the field
    validateField(name, value);
  };

  const validateFullName = (name) => {
    const alphabetPattern = /^[A-Za-z ]*$/;
    if (!name.match(alphabetPattern)) {
      return 'Name can only contain alphabets and spaces.';
    }
    return '';
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
      return 'Invalid phone number. Please enter 10 digits.';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    if (!email.match(emailPattern)) {
      return 'Invalid email address.';
    }
    return '';
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        setErrors({ ...errors, fullName: validateFullName(value) });
        break;
      case 'phone':
        setErrors({ ...errors, phone: validatePhone(value) });
        break;
      case 'email':
        setErrors({ ...errors, email: validateEmail(value) });
        break;
      default:
        break;
    }
  };

  // Connect with Firebase
  const submitRCDData = async (event) => {
    event.preventDefault();
    try {
      const currentDateTime = new Date().toLocaleString();

      // Check if any required field is empty
      if (!userData.fullName || !userData.phone || !userData.email || !userData.course) {
        throw new Error('Please fill in all required fields.');
      }

      const userRef = push(ref(db, 'RCB Leads'));

      await set(userRef, {
        fullName: userData.fullName,
        phone: userData.phone,
        email: userData.email,
        course: userData.course,
        date: currentDateTime,
      });

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Data submitted successfully!',
      });

      // Clear the form after successful submission
      setUserData({
        fullName: '',
        phone: '',
        email: '',
        course: '',
      });
    } catch (error) {
      console.error('Error submitting data: ', error.message);

      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: error.message || 'There was an error submitting the data. Please try again later.',
      });
    }
  };

  const fetchData = async (event) => {
    event.preventDefault();
    const starCountRef = ref(db, 'RCB Leads');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
  
      if (data) {
        // Convert object to array of [key, value] pairs
        const dataArray = Object.entries(data);
        const jsonData = JSON.stringify(data);
  
        // Log or process each property
        dataArray.forEach(([key, value]) => {
        });
  
        // Set the state with the entire data object
        setRcbData(data);
      }
    });
  };

  return (
    <>
      <div className="col-lg-4 offset-lg-1">
        <div className="register_form">
          <h3>Enroll Now</h3>
          <p>It is high time for learning</p>
          {rcbData && (
            <div>
              {Object.keys(rcbData).map((key) => (
                <div key={key}>
                  <h5>Email: {rcbData[key].email}</h5>
                  <h5>Phone: {rcbData[key].phone}</h5>
                  <h5>Full Name: {rcbData[key].fullName}</h5>
                  <h5>Course: {rcbData[key].course}</h5>
                </div>
              ))}
            </div>
          )}
          <form className="form_area" id="myForm" method="POST">
            <div className="row">
              <div className="col-lg-12 form_group">
                <input name="fullName" placeholder="Your Name" value={userData.fullName} onChange={postUserData} required pattern="[A-Za-z ]*" />
                {errors.fullName && <div className="error">{errors.fullName}</div>}

                <input name="phone" placeholder="Your Phone Number" value={userData.phone} onChange={postUserData} required pattern="[0-9]{10}" />
                {errors.phone && <div className="error">{errors.phone}</div>}

                <input name="email" placeholder="Your Email Address" value={userData.email} onChange={postUserData} required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" type="email" />
                {errors.email && <div className="error">{errors.email}</div>}

                <select
                  name="course"
                  id="course-details"
                  required
                  value={userData.course}
                  onChange={postUserData}>
                  <option value="" disabled>Select a course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                </select>
              </div>
              <div className="text-center">
                <button className="primary-btn" type='submit' onClick={submitRCDData}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
