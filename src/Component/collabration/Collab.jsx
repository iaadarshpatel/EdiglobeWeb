import React from 'react'
import './collab.css'
import CollabEach from './CollabEach'

const Collab = () => {
    return (
        <>
            <section id='collab' className='section_gap collab_area'>
                <div className="container">
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="main_title" data-aos="fade-up">
                            <h2>Our Collaborations</h2>
                            <p>It's a chance to discover your passion and find the perfect fit for you. Enjoy the journey!</p>
                        </div>
                    </div>
                    <CollabEach/>   
                    </div>
            </section>
        </>
    )
}

export default Collab