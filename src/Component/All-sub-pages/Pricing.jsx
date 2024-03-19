import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const CrossOver = {
    textDecoration: "line-through"
  };

    const Pricedata = [
        {
          id: 1,
          price: "5000",
          dynamicColor: "#016ca5",
          course_type: "Self Learning",
          course_description: [
            {
              course_desc_1: "30+ hrs Recorded Session",
              course_desc_2: "6 Months of LMS Access",
              course_desc_3: "1 minor & 1 major project",
              course_desc_4: "Doubt clearing sessions ",
              course_desc_5: "Course completition certificate",
              course_desc_6: "Internship Completion Certificate",
              course_desc_7: <s style={CrossOver}>Excellence performance Certificate</s>,
              course_desc_8: <s style={CrossOver}>Mock interviews</s>,
              course_desc_9: <s style={CrossOver}>Resume building live sessions</s>,
              course_desc_10:<s style={CrossOver}>Add on MNC certificate</s>,
              course_desc_11:<s style={CrossOver}>16-24 hrs live interactive sessions</s>,
            }
          ]
        },
        {
          id: 2,
          price: "7000",
          course_type: "Expert Led learning",
          course_description: [
            {
              course_desc_1: "16-24 hrs live interactive sessions",
              course_desc_2: "30+ hrs Recorded Session",
              course_desc_3: "1 minor & 1 major project",
              course_desc_4: "6 Months of LMS Access",
              course_desc_5: "Resume building live sessions",
              course_desc_6: "Mock interviews",
              course_desc_7: "Add on MNC certificate",
              course_desc_8: "Doubt clearing sessions",
              course_desc_9: "Internship Completion Certificate",
              course_desc_10: "Course Completion Certificate",
              course_desc_11: "Excellence performance Certificate",
            }
          ]
        },
        {
          id: 3,
          price: "10000",
          dynamicColor: "#016ca5",
          course_type: "Advanced",
          course_description: [
            {
              course_desc_1: "16-24 hrs live interactive sessions",
              course_desc_2: "30+ hrs Recorded Session",
              course_desc_3: "6 Months of LMS Access",
              course_desc_4: "2 minor & 2 major project",
              course_desc_5: "Resume building live sessions",
              course_desc_6: "Mock interviews",
              course_desc_7: "Add on MNC certificate",
              course_desc_8: "Doubt clearing sessions",
              course_desc_9: "Internship Completion Certificate",
              course_desc_10: "Excellence performance Certificate",
              course_desc_11: "Course Completion Certificate",
            }
          ]
        }
    
      ]

  return (
    <>
    <div className="courses_container" data-aos="fade-up" data-aos-offset="0">
    {
      Pricedata.map((course) => {
        return (
          <div class="ag-courses_item" key={course.id}>
            <div  class="ag-courses-item_link course_gap" style={{ borderRadius: "20px" }}>
              <div className="ag-courses-item_bg" style={{ backgroundColor: course.dynamicColor }}></div>
              <div class="ag-courses-item_title text-center">
                <b>{course.course_type}</b> <br />
                <hr />
                <div class="plan-cost">
                  <span class="plan-price d-inline fw-bolder">₹{course.price}</span>
                </div>
                {course.course_description ? (
                  <ul style={{ fontSize: "1rem" }} className='text-start'>
                    {Object.values(course.course_description[0]).map((desc, index) => (
                      <li className='bullet' key={index}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No course description available.</p>
                )}
              </div>
              <div class="ag-courses-item_date-box text-center">
                <Link to={course.link_path}>
                  <button className="btn btn-outline-dark cards-btn" type="submit" >View Details</button>
                </Link>
              </div>
            </div>
          </div>
        )
      }
      )
    }
  </div>
    </>
  )
}

export default Pricing