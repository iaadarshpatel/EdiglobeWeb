import React from 'react'
import './career.css'

const data = [
    {
        id: 1,
        career_name: "Marketing",
        career_details: "We are Looking for an expert who can assist in managing key relationships with our company and develop new business in the financial inclusion sector."
    },
    {
        id: 2,
        career_name: "Business Development Intern",
        career_details: "Looking for an aspirant who can manage the organizational sales with the help of a business plan that covers sales, revenue, and control expenses."
    },
    {
        id: 3,
        career_name: "Business Development Executive",
        career_details: "We are looking for a candidate that can develop strategic relationships with partners or potential customers and work with marketing, sales, and product development."
    }
]

const Marketing = () => {

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

export default Marketing