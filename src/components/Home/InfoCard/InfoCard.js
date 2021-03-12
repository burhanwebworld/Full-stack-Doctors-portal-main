import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./InfoCard.css";

const InfoCard = ({ info }) => {
    
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex  justify-content-center align-items-center info-container info-${info.background}`}>
                
            <div className="mr-3">
                    {/* <FontAwesomeIcon className="info-icon" className="info-icon" icon={info.icon}></FontAwesomeIcon> */}
                    {<info.icon/>}
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <h6>{info.description}</h6>
                </div>
            </div>
            </div>
        
    );
};

export default InfoCard;
