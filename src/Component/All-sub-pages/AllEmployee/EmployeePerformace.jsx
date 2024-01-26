import React from 'react'

const EmployeePerformace = () => {
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Overall Matrics of the Employee</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <h6 className='employee_ava'>Availability</h6>
                            <ul className="list-group w-auto">
                                <li className="list-group-item small">
                                <i class="fa-solid fa-calendar-days me-2"></i>Total Days:
                                    <span className="text-muted ms-2">152</span>
                                </li>
                                <li className="list-group-item small">
                                <i class="fa-solid fa-square-check me-2"></i>Present:
                                    <span className="text-muted ms-2">131</span>
                                </li>
                                <li className="list-group-item small">
                                <i class="fa-solid fa-ban me-2"></i>Absent:
                                    <span className="text-muted ms-2">15</span>
                                </li>
                                <li className="list-group-item small">
                                <i class="fa-solid fa-umbrella-beach me-2"></i>Leave:
                                    <span className="text-muted ms-2">6</span>
                                </li>
                            </ul>
                        <h6 className='employee_ava mt-3'>Performance</h6>
                            <ul className="list-group w-auto mt-2">
                                <li className="list-group-item small">
                                <i class="fa-solid fa-indian-rupee-sign me-2"></i>No. of payments received in current Month:
                                    <span className="text-muted ms-2">152</span>
                                </li>
                                <li className="list-group-item small">
                                <i class="fa-solid fa-indian-rupee-sign me-2"></i>Amount of Revenue in current Month:
                                    <span className="text-muted ms-2">131</span>
                                </li>
                                <li className="list-group-item small">
                                <i class="fa-solid fa-indian-rupee-sign me-2"></i>Total Revenue till now:
                                    <span className="text-muted ms-2">21</span>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeePerformace