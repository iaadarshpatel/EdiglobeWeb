import React from 'react'
import './career.css'

const data = [
    {
        id: 1,
        career_name: "LeadGen Trainee",
        career_details: "As a lead generation executive, your main focus will be on identifying and capturing potential customers for your company. You'll use various strategies like market research, cold calling, and digital marketing to generate leads and convert them into sales opportunities!"
    },
    {
        id: 2,
        career_name: "LeadGen Executive",
        career_details: "As a lead generation executive, your main focus will be on identifying and capturing potential customers for your company. You'll use various strategies like market research, cold calling, and digital marketing to generate leads and convert them into sales opportunities!"
    },
    {
        id: 3,
        career_name: "Team Leader ",
        career_details: "As a lead generation team leader, you'll be responsible for overseeing a team of professionals who specialize in finding and attracting potential customers for your company. You'll provide guidance, set targets, and ensure that the team is effectively using strategies."
    },
    {
        id: 4,
        career_name: "Senior Manager ",
        career_details: "As a senior manager in lead generation, you'll be responsible for overseeing and strategizing the entire lead generation process for your company. You'll lead a team of professionals, set goals, and develop innovative strategies to attract potential customers and drive business growth."
    }
]

const LeadGen = () => {

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

export default LeadGen