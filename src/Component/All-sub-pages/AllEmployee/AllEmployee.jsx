import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../footer/Footer';
import Nav from '../../Nav/Nav';
import EmployeePerformace from './EmployeePerformace';
import Preloader from './Preloader';
import { signOut } from 'firebase/auth';
import { auth } from '../../../FirebaseConfig';
import "./allemployee.css";

const AllEmployee = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUserData, setFilteredUserData] = useState([]);

  const [totalEmployee, setTotalEmployees] = useState(0);
  const [currentlyWorkingCount, setCurrentlyWorkingCount] = useState(0);
  const [departedCount, setDepartedCount] = useState(0);
  const [noticePeriodCount, setNoticePeriodCount] = useState(0);

  const [selectedWorkingStatus, setSelectedWorkingStatus] = useState('');
  const [birthdayEmployees, setBirthdayEmployees] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_EMPLOYEE_DATA1);
        setUserData(response.data);
      } catch (error) {
        setLoading(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //Birthday employees
  useEffect(() => {
    if (filteredUserData.length > 0) {
      // Filter employees with today's birthday
      const todayBirthdayEmployees = filteredUserData.filter((employee) => isTodayBirthday(employee.Date_of_Birth));
      setBirthdayEmployees(todayBirthdayEmployees);
    }
  }, [filteredUserData]);

  useEffect(() => {
    let filteredUsers = userData;

    if (searchInput) {
      filteredUsers = filteredUsers.filter((user) => {
        const emailMatch = user.Personal_Email && user.Personal_Email.toLowerCase().includes(searchInput.toLowerCase());
        const nameMatch = user.Name && user.Name.toLowerCase().includes(searchInput.toLowerCase());
        return emailMatch || nameMatch;
      });
    }

    if (selectedWorkingStatus) {
      filteredUsers = filteredUsers.filter((user) => user.Working_Status === selectedWorkingStatus);
    }

    setFilteredUserData(filteredUsers);
  }, [userData, searchInput, selectedWorkingStatus]);

  useEffect(() => {
    if (filteredUserData.length > 0) {
      setTotalEmployees(filteredUserData.length);
      setCurrentlyWorkingCount(filteredUserData.filter(
        (employee) => employee.Working_Status === 'Currently Working'
      ).length);
      setDepartedCount(filteredUserData.filter(
        (employee) => employee.Working_Status === 'Departed'
      ).length);
      setNoticePeriodCount(filteredUserData.filter(
        (employee) => employee.Working_Status === 'Notice Period'
      ).length);
    }
  }, [filteredUserData]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedWorkingStatus(event.target.value);
  };

  const handleClearClick = () => {
    setSelectedWorkingStatus('');
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
  };

  // Function to check if today is the birthday
  const isTodayBirthday = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    return (
      birthDate.getDate() === today.getDate() &&
      birthDate.getMonth() === today.getMonth()
    );
  };


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Nav />
          <section id='aboutUs' className='banner_area'>
            <div className="banner_inner d-flex align-items-center">
              <div className="overlay"></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="banner_content text-center">
                      <h2>Our Employee</h2>
                      <div className="page_link">
                        <Link to="/">Home</Link>
                        <a>Employee Section</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='section_gap'>
            <div className="main_title" data-aos="fade-up">
              <h2>Let's Know about our Employee</h2>
              <h6 style={{ cursor: 'pointer' }} onClick={handleLogout}>
                Sign Out <i className="fa fa-sign-out"></i>
              </h6>
            </div>
          </section>
          <section className='mb-2'>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4 d-flex">
                  <div className='search-filter w-100'>
                    <select
                      className='working_status'
                      name="working_status"
                      required=""
                      value={selectedWorkingStatus}
                      onChange={handleSelectChange}>
                      <option value="" disabled>Filter By</option>
                      <option value="Currently Working">Currently Working</option>
                      <option value="Departed">Departed</option>
                      <option value="Notice Period">Notice Period</option>
                    </select>
                    {selectedWorkingStatus && (
                      <button className="clear-button mt-2" onClick={handleClearClick}>
                        Clear
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-md-8 d-flex justify-content-end">
                  <form id="form" role="search" className='w-100 d-flex justify-content-center'>
                    <input
                      type="search"
                      className='p-2 border rounded w-100'
                      name="search"
                      placeholder="Search Employee by name & email"
                      aria-label="Search through site content"
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-4'>
            <div className="container">
              <ul className='list-group'>
                <h4 className="text-start fs-6 py-1">
                  Currently Working: <span className='light-info-bg py-1 px-1 rounded-1 bg-success bg-opacity-25' style={{ fontSize: '2 rem' }}>{currentlyWorkingCount} employees</span>
                </h4>
                <h4 className="text-start fs-6 py-1">
                  Departed: <span className='light-info-bg py-1 px-1 rounded-1 bg-danger bg-opacity-25' style={{ fontSize: '2 rem' }}>{departedCount} employees</span>
                </h4>
                <h4 className="text-start fs-6 py-1">
                  Notice Period: <span className='light-info-bg py-1 px-1 rounded-1 bg-warning bg-opacity-25' style={{ fontSize: '2 rem' }}>{noticePeriodCount} employees</span>
                </h4>
                <h4 className="text-start fs-6 py-1">
                  Birthday: <span className='light-info-bg py-1 px-1 rounded-1 bg-primary bg-opacity-25' style={{ fontSize: '2rem' }}>
                    {birthdayEmployees.length > 0
                      ? birthdayEmployees.map((employee, index) => (
                        <span key={index}>
                           {employee.Name}{index < birthdayEmployees.length - 1 ? ', ' : ''}
                        </span>
                      ))
                      : 'No birthdays'}
                  </span>
                </h4>
              </ul>
              <div className="row mt-3">
                {loading ? (
                  <div className="spinner-border" role="status"></div>
                ) : filteredUserData && filteredUserData.length > 0 ? (
                  filteredUserData.map(({ id, Name, Employee_Intern_ID, Date_of_Birth, Personal_Email, Phone_Number, Date_Of_Joining, Gender, Designation, Working_Status, Department, Report_To, Permanent_Address, Residential_Address, Aadhar_Card }) => (
                    <div className="col-lg-4 mb-2" key={id}>
                      <div className={`blog_right_sidebar rounded position-relative ${isTodayBirthday(Date_of_Birth) ? "birthday-highlight" : ""}`}>
                        <div className={`spinner-grow ${Working_Status === "Currently Working"
                          ? "bg-success bg-opacity-25"
                          : Working_Status === "Departed"
                            ? "bg-danger bg-opacity-25"
                            : Working_Status === "Notice Period"
                              ? "bg-warning bg-opacity-25"
                              : "bg-blue"
                          }`} role="status" style={{ "backgroundColor": "purple" }}></div>
                        <aside className="single_sidebar_widget author_widget mt-2">
                          {/* <img
                            src="https://drive.google.com/file/d/1vsJu3SeG9OumWEWWuS88ZOq0U78qdGkb/preview"
                            alt="Avatar"
                            className="avatar xl rounded-circle img-thumbnail shadow-sm"
                          /> */}
                          <h4>{Name}</h4>
                          <span className="text-muted small d-inline-block">Employee Id: {Employee_Intern_ID}</span>
                          <span className={`light-info-bg text-center w-auto p-3 fs-6 fw-bolder py-1 px-1 rounded-1 d-inline-block mb-2 mt-1 ${Working_Status === "Currently Working"
                            ? "bg-success bg-opacity-25"
                            : Working_Status === "Departed"
                              ? "bg-danger bg-opacity-25"
                              : Working_Status === "Notice Period"
                                ? "bg-warning bg-opacity-25"
                                : "bg-blue"
                            }`}>{Working_Status}</span>
                          <ul class="list-group w-auto">
                            <li class="list-group-item small">
                              <i class="fa-solid fa-envelope me-2"></i>Email:
                              <span class="text-muted ms-2">{Personal_Email}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-phone me-2"></i>Contact:
                              <span class="text-muted ms-2">{Phone_Number}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-user-plus me-2"></i>Report To:
                              <span class="badge rounded-pill text-bg-warning w-auto ms-2">{Report_To}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-briefcase me-2"></i>Designation:
                              <span class="text-muted ms-2">{Designation}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-cake-candles me-2"></i>Birthday:
                              <span class="text-muted ms-2" style={{ fontWeight: isTodayBirthday(Date_of_Birth) ? 'bold' : 'normal', color: isTodayBirthday(Date_of_Birth) ? 'red' : 'inherit' }}>{formatDate(Date_of_Birth)}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-calendar-days me-2"></i>DOJ:
                              <span class="text-muted ms-2">{formatDate(Date_Of_Joining)}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-person-half-dress me-2"></i>Gender:
                              <span class="text-muted ms-2">{Gender}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-map-location me-2"></i>Per. Address:
                              <span class="text-muted ms-2">{Permanent_Address}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-house me-2"></i>Res. Address:
                              <span class="text-muted ms-2">{Residential_Address}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-link me-2"></i>Aadhar:
                              <span class="text-muted ms-2">
                                <Link to={`https://drive.google.com/uc?id=${Aadhar_Card}`} style={{ "color": "#1e2a5a" }}>Check it</Link>
                              </span>
                            </li>
                            <li className="list-group-item small" data-tip={Permanent_Address} data-for="permanentAddressTooltip">
                              <i className="fa-solid fa-map-location me-2"></i>Per. Address:
                              <span className="text-muted ms-2">{Permanent_Address}</span>
                            </li>
                            <li class="list-group-item small">
                              <i class="fa-solid fa-link me-2"></i>PAN:
                              <span class="text-muted ms-2">
                                <Link to="" style={{ "color": "#1e2a5a" }}>Check it</Link>
                              </span>
                            </li>
                            <li className="list-group-item small">
                              <i className="fa-solid fa-link me-2"></i>Signed Copy of Offer Letter:
                              <span className="text-muted ms-2">
                                <Link to="" style={{ "color": "#1e2a5a" }}>Check it</Link>
                              </span>
                            </li>
                            <li className="list-group-item small">
                              <i className="fa-solid fa-link me-2"></i>Driving License or Voters ID:
                              <span className="text-muted ms-2">
                                <Link to="" style={{ "color": "#1e2a5a" }}>Check it</Link>
                              </span>
                            </li>
                            <li className="list-group-item small">
                              <i className="fa-solid fa-link me-2"></i>Bank Passbook:
                              <span className="text-muted ms-2">
                                <Link to="" style={{ "color": "#1e2a5a" }}>Check it</Link>
                              </span>
                            </li>
                            <li className="list-group-item small">
                              <i className="fa-solid fa-file-lines me-2"></i>10th Marksheet:
                              <span className="text-muted ms-2">
                                <Link to="" style={{ "color": "#1e2a5a" }}>Check it</Link>
                              </span>
                            </li>
                            <li class="list-group-item small">
                              <i className="fa-solid fa-file-lines me-2"></i>12th Marksheet:
                              <span class="text-muted ms-2">
                                <Link to="" style={{ "color": "#1e2a5a" }}>Check it</Link>
                              </span>
                            </li>
                            <li class="list-group-item small">
                              <i className="fa-solid fa-file-lines me-2"></i>Grad. Marksheet:
                              <span class="text-muted ms-2">
                                <Link to="" style={{ "color": "#1e2a5a" }}>Check it</Link>
                              </span>
                            </li>
                          </ul>
                        </aside>
                        <button className={`badge fs-6 w-auto mt-2 p-3 text-dark ${Working_Status === "Currently Working"
                          ? "bg-success bg-opacity-25"
                          : Working_Status === "Departed"
                            ? "bg-danger bg-opacity-25"
                            : Working_Status === "Notice Period"
                              ? "bg-warning bg-opacity-25"
                              : "bg-blue"
                          }`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          <i className="fa-solid fa-ranking-star me-2"></i>
                          Employee Performance</button>
                        <EmployeePerformace />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No user data available</p>
                )}
              </div>
            </div>
          </section>
          <Footer />
        </>
      )};
    </>
  );
};

export default AllEmployee;
