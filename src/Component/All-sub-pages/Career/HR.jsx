import React from 'react'
import './career.css'

const data = [
    {
        id: 1,
        career_name: "Human Resource Intern",
        career_details: "A human resources intern is someone who gets hands-on experience in various aspects of HR, such as recruitment, employee relations, and HR policies. It's a great opportunity to learn about the people side of a company and contribute to creating a positive work environment!"
    },
    {
        id: 2,
        career_name: "Talent Acquisation Intern",
        career_details: "It is all about finding and attracting the best talent for a company. It involves sourcing candidates, conducting interviews, and making hiring decisions. It's an exciting field for those who enjoy connecting with people and matching them with the right opportunities!"
    },
    {
        id: 3,
        career_name: "Human Resource Executive",
        career_details: "A human resources executive is a key role in managing and overseeing the HR functions of a company. They handle tasks like talent acquisition, employee development, and ensuring compliance with HR policies. It's a position that requires strong leadership skills!"
    }
]

const HR = () => {

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

export default HR