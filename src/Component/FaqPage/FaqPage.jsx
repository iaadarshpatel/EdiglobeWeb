import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';

const FaqPage = () => {

    const FaqData = [
        {
            id: 1,
            question: "How the training will be conducted?",
            answer: "Training will be conducted in a variety of ways, such as live interactive sessions as well as recorded sessions and the duration will be as per the Schedule. These methods will ensure an engaging and interactive learning experience."
        },
        {
            id: 2,
            question: "Do we need any software or hardware for the sessions?",
            answer: "No worries! You won't need any specific software or hardware for the training sessions. Just make sure you have a stable internet connection and a device to access the online modules and virtual classes."
        },
        {
            id: 3,
            question: "What are the prerequisites of the program?",
            answer: "There are no specific prerequisites. Nevertheless, having basic skills in accordance with the course would be a good starting point."
        },
        {
            id: 4,
            question: "Which month can I start the program?",
            answer: "You can start the internship in any month as per your availability. In ediglobe every month new batches start."
        }
        ,
        {
            id: 5,
            question: "After enrolling can I change the month for my program due to any reasons?  ",
            answer: "Definitely! After enrolling, if you need to change the start month of your program for any reason, you can reach out to the support team and discuss the possibility of rescheduling. They will assist you with the necessary steps."
        },
        {
            id: 6,
            question: "What should I do if I cannot attend the live session?",
            answer: "If you miss any session for any reason, the recorded session will be mailed to you. If you have any queries, you can raise them in the next live session"
        },
        {
            id: 7,
            question: "What kind of projects will I be getting during the program?",
            answer: "There will be a Minor Project that you will do individually. Additionally, a Major Project done in groups. Groups of 8- 10 will be created and a mentor will be assigned to each group who will guide the group and clear their doubts. "
        },
        {
            id: 8,
            question: "Who will be my project partners? ",
            answer: "There will be a Minor Project that you will do individually. Additionally, a Major Project done in groups. Groups of 8- 10 will be created and a mentor will be assigned to each group who will guide the group and clear their doubts."
        },
        {
            id: 9,
            question: "When will I get the certificates for my program? ",
            answer: "Once you submit the projects after evaluation of those projects you will receive your certificates."
        },
        {
            id: 10,
            question: "Can I cancel the program after enrolling?",
            answer: "You cannot cancel the program once the slot is booked however you can postpone the program anytime as per your availability."
        },
        {
            id: 11,
            question: "Is there any refund policy ?",
            answer: "We appreciate your trust in EdiGlobe for your online learning experience. Please be aware that our courses are non-refundable.Due to the nature of our digital content and services, we do not offer refunds. Once enrolled, the sale is final.Therefore, we encourage you to thoroughly review course details and ensure it meets your requirements before making a purchase.If you have any questions or concerns about our no refund policy, please feel free to write us at support@ediglobe.com. We are here to assist you with any inquiries you may have."
          }
    ];
    const [showAll, setShowAll] = useState(false);
    const visibleFaqData = showAll ? FaqData : FaqData.slice(0, 5);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

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
                                    <h2>Frequently Asked Question</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <Link>FAQs</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='faq' className='section_gap'>
                <div className='container'>
                    <div className="main_title" data-aos="fade-up">
                        <h2>Frequently Asked Questions</h2>
                        <p>Replenish man have thing gathering lights yielding shall you</p>
                    </div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {visibleFaqData.map((faqItem) => (
                            <div className="accordion-item" key={faqItem.id}>
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#flush-collapse${faqItem.id}`}
                                        aria-expanded="false"
                                        aria-controls={`flush-collapse${faqItem.id}`}
                                    >
                                        {faqItem.question}
                                    </button>
                                </h2>
                                <div
                                    id={`flush-collapse${faqItem.id}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">{faqItem.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {FaqData.length > 5 && (
                        <div className="text-center">
                            <button onClick={toggleShowAll} className="btn-outline-success btn ">
                                {showAll ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            </section>
            );
            <Footer />
        </>
    )
}

export default FaqPage