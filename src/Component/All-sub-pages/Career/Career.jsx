import React, { useState } from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import './career.css'
import Sales from './Sales'
import Marketing from './Marketing'
import Operations from './Operations'
import HR from './HR';
import MixCareer from './MixCareer'
import B2B from './B2B'
import LeadGen from './LeadGen'
import { Link } from 'react-router-dom'


const Career = () => {

    const [selectedDepartment, setselectedDepartment] = useState('');

    const handleSelectChange = (event) => {
        setselectedDepartment(event.target.value);
    }
    const handleClearClick = () => {
        setselectedDepartment('');
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
                                    <h2>Career</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <a>Career</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section_gap'>
                <div className="main_title" data-aos="fade-up">
                    <h2>Want to Join with Us?</h2>
                    <p>Looking for better working Environment</p>
                </div>
            </section>
            <div className='container'>
                <div className='career'>
                    <div className="select-container">
                        <select
                            className='career_select'
                            name="career"
                            required=""
                            value={selectedDepartment}
                            onChange={handleSelectChange}>
                            <option value="" disabled>Select a Department</option>
                            <option value="Sales">Sales</option>
                            <option value="Operations">Operations</option>
                            <option value="HR">Human Resource</option>
                            <option value="LeadGen">Lead Generation</option>
                            <option value="B2B">B2B</option>
                        </select>
                        {selectedDepartment && (
                            <button className="clear-button" onClick={handleClearClick}>
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {selectedDepartment === '' && <MixCareer />}
            {selectedDepartment === 'Sales' && <Sales />}
            {selectedDepartment === 'Marketing' && <Marketing />}
            {selectedDepartment === 'HR' && <HR />}
            {selectedDepartment === 'Operations' && <Operations />}
            {selectedDepartment === 'B2B' && <B2B />}
            {selectedDepartment === 'LeadGen' && <LeadGen />}
            <Footer />
        </>
    )
}

export default Career