import React from  'react';
import chair from "../../../images/chair.png"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css';
import './Calender.css'
const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <main className='row d-flex align-items-center' style={{height:'600px'}}>
        <div className="col-md-4 offset-md-1">
             <div>
             <h1 className='appointment text-brand' >Appointment</h1>
             </div>
             <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid"/>
        </div>
     </main>
    );
};

export default AppointmentHeader;