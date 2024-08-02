import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import {db} from '../../../FirebaseConfig';
import { ref, set, onValue, push } from "firebase/database";

const RegisterForm = ({ containerClass }) => {
    const [userData, setUserData] = useState({
        fullName: "",
        phone: "",
        email: "",
        graduation_year: "",
        college: "",
    });

    // Create state variables to track errors
    const [errors, setErrors] = useState({
        fullName: "",
        phone: "",
        email: "",
        college: "",
    });

    const postUserData = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // Update the user data
        setUserData({ ...userData, [name]: value });

        // Validate the field
        validateField(name, value);
    };

    // Validation function for fullName
    const validateFullName = (name) => {
        const alphabetPattern = /^[A-Za-z ]*$/; // Correct the regular expression pattern
        if (!name.match(alphabetPattern)) {
            return 'Name can only contain alphabets and spaces.';
        }
        return '';
    };

    // Validation function for phone
    const validatePhone = (phone) => {
        const phonePattern = /^\d{10}$/; // Assuming phone number should be 10 digits
        if (!phone.match(phonePattern)) {
            return 'Invalid phone number. Please enter 10 digits.';
        }
        return '';
    };

    // Validation function for email
    const validateEmail = (email) => {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
        if (!email.match(emailPattern)) {
            return 'Invalid email address.';
        }
        return '';
    };

    // Validation function for college
    const validateCollege = (college) => {
        const alphabetPattern = /^[A-Za-z ]*$/; // Correct the regular expression pattern
        if (!college.match(alphabetPattern)) {
            return 'Name can only contain alphabets and spaces.';
        }
        return '';
    };

    // Validate a field and update errors state
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
            case 'college':
                setErrors({ ...errors, college: validateCollege(value) });
                break;
            default:
                break;
        }
    };


    // Connect with Firebase
    const submitData = async (event) => {
        event.preventDefault();
        try {
                 // Check if any required field is empty
                if (!userData.fullName || !userData.phone || !userData.email || !userData.college || !userData.graduation_year) {
                    throw new Error('Please fill in all required fields.');
                }
                if (errors.fullName || errors.phone || errors.email|| errors.college || errors.graduation_year) {
                    throw new Error('Please fix validation errors before submitting.');
                  }
                
            const currentDateTime = new Date().toLocaleString();
            const userRef = push(ref(db, 'Campus Ambassador')); 
    
            await set(userRef, {
                fullName: userData.fullName,
                phone: userData.phone,
                email: userData.email,
                college: userData.college,
                graduation_year: userData.graduation_year,
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
                college: '',
                graduation_year: '',
            });
        } catch (error) {
            console.error('Error submitting data: ', error.message);

            Swal.fire({
                icon: 'error',
                title: 'Submission Error',
                text: 'There was an error submitting the data. Please try again later.',
            });
        }
    };


    return (
        <>
            <div className={containerClass}>
                <div className="register_form">
                    <h3>Join Our CA Program</h3>
                    <p>It is high time for learning</p>
                    <div>
                    </div>
                    <form className="form_area" id="myForm" method="POST">
                        <div className="row">
                            <div className="col-lg-12 form_group">
                            <input name="fullName" placeholder="Your Name" value={userData.fullName} onChange={postUserData} required pattern="[A-Za-z ]*" />
                            {errors.fullName && <div className="error">{errors.fullName}</div>}
              
                            <input name="phone" placeholder="Your Phone Number" value={userData.phone} onChange={postUserData} required pattern="[0-9]{10}" />
                            {errors.phone && <div className="error">{errors.phone}</div>}
              
                            <input name="email" placeholder="Your Email Address" value={userData.email} onChange={postUserData} required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"  type="email" />
                            {errors.email && <div className="error">{errors.email}</div>}

                                <input name="college" placeholder="Your College Name" value={userData.college} onChange={postUserData} required pattern="[A-Za-z ]*" />
                                {errors.college && <div className="error">{errors.college}</div>}

                                <select
                                    name="graduation_year"
                                    id="course-details"
                                    required=""
                                    value={userData.graduation_year}
                                    onChange={postUserData}>
                                    <option value="" disabled >Graduation Year</option>
                                    <option value="2019" >2019</option>
                                    <option value="2020" >2020</option>
                                    <option value="2021" >2021</option>
                                    <option value="2022" >2022</option>
                                    <option value="2023" >2023</option>

                                </select>
                            </div>
                            <div className="text-center">
                                <button className="primary-btn" type='submit' onClick={submitData}>Join Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm