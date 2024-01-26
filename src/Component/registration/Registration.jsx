import React from 'react';
import './registration.css';
import RegistrationForm from './RegistrationForm';

const Registration = () => {

  return (
    <section id='registration' className='section_gap registration_area'>
      <div className="container">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-lg-7">
            <div className="row clock_sec clockdiv" id="clockdiv">
              <div className="col-lg-12">
                <h1 className="mb-3">Secure your spot now</h1>
                <p>
                  Join our community, proudly endorsed by sites like LinkedIn, Google and TrustPilot as a top-rated platform. When you register with us, you're choosing quality education and recognition from industry leaders. Explore our wide array of courses and take your skills to new heights. Don't miss out – Register Now to be part of our success story!
                </p>
              </div>
              <div className='review_section'>
                <div className='reviews col clockinner1 clockinner'>
                  <div className='review_pic'>
                    <svg width="80%" viewBox="0 0 255 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M216.818 214.202H179.232V155.921C179.232 142.023 178.981 124.132 159.683 124.132C140.107 124.132 137.112 139.274 137.112 154.909V214.198H99.5253V94.3475H135.608V110.726H136.113C139.724 104.613 144.942 99.584 151.212 96.1747C157.481 92.7655 164.567 91.1037 171.714 91.3664C209.81 91.3664 216.833 116.177 216.833 148.454L216.818 214.202ZM57.1158 77.9648C52.8018 77.9655 48.5844 76.6997 44.9971 74.3272C41.4097 71.9548 38.6137 68.5823 36.9621 64.6362C35.3105 60.6902 34.8776 56.3479 35.7185 52.1584C36.5593 47.9688 38.6361 44.1203 41.686 41.0994C44.7358 38.0784 48.6219 36.0208 52.8528 35.1868C57.0837 34.3527 61.4693 34.7796 65.4552 36.4135C69.4411 38.0474 72.8481 40.8149 75.2454 44.3661C77.6428 47.9172 78.9228 52.0926 78.9236 56.364C78.9241 59.2002 78.3603 62.0086 77.2647 64.6291C76.169 67.2495 74.563 69.6306 72.5379 71.6365C70.5129 73.6423 68.1085 75.2335 65.4624 76.3193C62.8163 77.4051 59.9801 77.9643 57.1158 77.9648ZM75.9088 214.202H38.2836V94.3475H75.9088V214.202ZM235.556 0.210594H19.3966C14.4904 0.155772 9.7627 2.03183 6.25276 5.42651C2.74282 8.82119 0.737795 13.4568 0.677917 18.3146V233.233C0.735746 238.093 2.7396 242.732 6.24941 246.13C9.75923 249.528 14.488 251.408 19.3966 251.356H235.556C240.474 251.417 245.216 249.543 248.74 246.145C252.264 242.747 254.281 238.103 254.349 233.233V18.2991C254.279 13.4316 252.26 8.79078 248.736 5.39618C245.213 2.00158 240.472 0.130885 235.556 0.195081" fill="#0A66C2"></path>
                    </svg>
                  </div>
                  <div className='course_rating'>
                    <div className='rating_name'>LinkedIn</div>
                    <div className='rating_num'>Top Rated</div>
                  </div>
                </div>
                <div className='reviews col clockinner1 clockinner'>
                  <div className='review_pic'>
                    <svg width="90%" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48.0005 17.6214H29.6708L24.0091 0.17627L18.3297 17.6214L0 17.6037L14.8443 28.3963L9.16487 45.8237L24.0091 35.0488L38.8357 45.8237L33.174 28.3963L48.0005 17.6214Z" fill="#00B67A"></path>
                      <path d="M34.4466 32.342L33.1727 28.3965L24.0078 35.049L34.4466 32.342Z" fill="#005128"></path>
                    </svg>
                  </div>
                  <div className='course_rating'>
                    <div className='rating_name'>TrustPilot</div>
                    <div className='rating_num'>Rated 4.4/5</div>
                  </div>
                </div>
                <div className='reviews col clockinner1 clockinner full-width '>
                  <div className='review_pic'>
                    <svg width="80%" viewBox="0 0 301 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M282.41 153.5C282.41 143.75 281.535 134.375 279.91 125.375H150.41V178.562H224.41C221.222 195.75 211.535 210.312 196.972 220.062V254.562H241.41C267.41 230.625 282.41 195.375 282.41 153.5Z" fill="#4285F4"></path>
                      <path d="M150.41 287.875C187.535 287.875 218.66 275.562 241.41 254.562L196.972 220.062C184.66 228.312 168.91 233.187 150.41 233.187C114.597 233.187 84.2848 209 73.4723 176.5H27.5348V212.125C50.1598 257.062 96.6598 287.875 150.41 287.875Z" fill="#34A853"></path>
                      <path d="M73.4723 176.5C70.7223 168.25 69.1598 159.437 69.1598 150.375C69.1598 141.312 70.7223 132.5 73.4723 124.25V88.6249H27.5348C17.9098 107.786 12.9013 128.933 12.9098 150.375C12.9098 172.562 18.2223 193.562 27.5348 212.125L73.4723 176.5Z" fill="#FBBC05"></path>
                      <path d="M150.41 67.5624C170.597 67.5624 188.722 74.4999 202.972 88.1249L242.41 48.6874C218.597 26.4999 187.472 12.8749 150.41 12.8749C96.6598 12.8749 50.1598 43.6874 27.5348 88.6249L73.4723 124.25C84.2848 91.7499 114.597 67.5624 150.41 67.5624Z" fill="#EA4335"></path>
                    </svg>
                  </div>
                  <div className='course_rating'>
                    <div className='rating_name'>Google Reviews</div>
                    <div className='rating_num'>Rated 4.4/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RegistrationForm/>
        </div>
      </div>
    </section >
  )
}

export default Registration