import React from 'react'
import './career.css'

const data = [
    {
        id: 1,
        career_name: "Operation Trainee",
        career_details: "An operations trainee is someone who learns and develops skills in various operational areas of a company. They get hands-on experience in tasks like process improvement, project management, and optimizing efficiency. It's a great opportunity to gain practical knowledge!"
    },
    {
        id: 2,
        career_name: "Operation Executive",
        career_details: "An operations executive is a key role in managing the day-to-day operations of a company. They oversee processes, coordinate teams, and ensure smooth workflow and efficiency. It's a dynamic position that requires strong organizational and problem-solving skills!"
    }
]

const Operations = () => {

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

export default Operations