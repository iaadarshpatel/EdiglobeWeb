import React from 'react'
import './career.css'

const data = [
    {
        id: 1,
        career_name: "Business Development Trainee",
        career_details: "A business development trainee is someone who learns and develops skills in areas like sales, marketing, and strategic planning to help a company grow and expand its business. They work closely with senior professionals to gain hands-on experience! "
    },
    {
        id: 2,
        career_name: "Business Development Executive",
        career_details: "A business development executive is a professional who focuses on identifying new business opportunities, building relationships with potential clients, and driving growth for a company. They use their strategic thinking and sales skills to expand the company."
    },
    {
        id: 3,
        career_name: "Team Leader",
        career_details: "A team leader is like the captain of a ship, guiding and inspiring their team towards success. They provide direction, support, and motivation to help the team achieve their goals. It's a role that requires strong leadership skills, effective communication, and the ability to make decisions!"
    },
    {
        id: 4,
        career_name: "Senior Manager",
        career_details: "A senior manager is a key leader in an organization, responsible for overseeing teams and driving strategic initiatives. They have extensive experience and expertise in their field, and they play a crucial role in making important decisions in the success of the company."
    }
]

const Sales = () => {

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

export default Sales