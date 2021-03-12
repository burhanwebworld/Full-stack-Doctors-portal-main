import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [appointments, setAppointments] = useState([])

    const handleDateChange = date => {
        console.log(date);
        setSelectedDate(date);
    }

    useEffect(()=>{
        
        fetch("http://localhost:5000/appointmentByDate", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate.toDateString() , email: loggedInUser.email }),
        })
            .then(res => res.json())
            .then(data => setAppointments(data))

    },[selectedDate])

    return (
        <section>
            <div style={containerStyle} className='container-fluid row'>
                <div className='col-md-2'>
                    <Sidebar />
                </div>
                <div className="col-md-4 ml-5">
                  <h1 style={{color:'#19d3ae'}}>Appointments</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5 ">
                    <AppointmentByDate appointments={appointments} ></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;