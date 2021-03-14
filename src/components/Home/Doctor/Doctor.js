import React from 'react';
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor }) => {

    return (
        <div className="col-md-4 text-center">
            {
                 
                    <img style={{ height: '200px' }} className="img-fluid mb-3" src={doctor.img} alt="" />}
            <h4>{doctor.name}</h4>
            <p> Oral & Dental sergeon</p>
            <p>  +880-188-934789</p>
            <Link to='/appointment'><button className="btn btn-primary" >GET APPOINTMENT</button></Link>
        </div>
    );
};

export default Doctor;