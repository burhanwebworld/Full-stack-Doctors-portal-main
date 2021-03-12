import React from 'react';
import './ServiceDetails.css';
const ServiceDetail = ({ service }) => {
    return (
        <div className='col-md-4 text-center single-item'>
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h5 className='mt-3 mb-3'>{service.name}</h5>
            <p id='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, corporis?</p>

        </div>
    );
};

export default ServiceDetail;