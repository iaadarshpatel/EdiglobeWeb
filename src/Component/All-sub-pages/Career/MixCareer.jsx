import React from 'react'
import './career.css'

const data = [
    {
        id: 1,
        career_name: "Operation Trainee",
        career_details: "An operations trainee is someone who learns and develops skills in various operational areas of a company. They get hands-on experience in tasks like process improvement, project management, and optimizing efficiency. It's a great opportunity to gain practical knowledge and contribute to the smooth functioning of a business. Let me know if you have any more questions or need further information!"
    },
    {
        id: 2,
        career_name: "Human Resource Intern",
        career_details: "A human resources intern is someone who gets hands-on experience in various aspects of HR, such as recruitment, employee relations, and HR policies. It's a great opportunity to learn about the people side of a company and contribute to creating a positive work environment. If you're interested in HR and want to gain practical skills, being a human resources intern could be a fantastic opportunity for you!"
    },
    {
        id: 3,
        career_name: "B2B Executive",
        career_details: "As a B2B executive, you'll be responsible for managing and expanding business-to-business relationships for your company. You'll work closely with clients, negotiate contracts, and find innovative ways to drive growth and success. It's an exciting role that requires strong communication and strategic thinking skills. If you enjoy building partnerships being a B2B executive could be a great fit for you!"
    }
]

const MixCareer = () => {

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

export default MixCareer