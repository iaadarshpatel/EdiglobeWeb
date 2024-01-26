import React from 'react'
import './career.css'

const data = [
    {
        id: 1,
        career_name: "B2B Intern",
        career_details: "As a B2B intern, you'll get the chance to work with business-to-business relationships. You'll learn how to build connections, negotiate deals, and support the growth of your company through partnerships!"
    },
    {
        id: 2,
        career_name: "B2B Executive",
        career_details: "As a B2B executive, you'll be responsible for managing and expanding business-to-business relationships for your company. You'll work closely with clients, negotiate contracts, and find innovative ways to drive growth and success!"
    }
]

const B2B = () => {

    return (
        <>
            <div className='container'>
                <div className="feature_container">
                    {
                        data.map(({ id, career_name, career_details }) => {
                            return (
                                <div className="features" key={id} data-aos="fade-up">
                                    <div className="single_career">
                                        <div className="description">
                                            <small><i class="fas fa-map-marker-alt" aria-hidden="true"></i>Bengaluru</small>
                                            <h4 className="career_name">{career_name}</h4>
                                            <hr />
                                            <p className="career_details">{career_details}</p>
                                        </div>
                                        <hr />
                                        <button className='apply_now btn-outline-success cards-btn'>Apply Now</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default B2B