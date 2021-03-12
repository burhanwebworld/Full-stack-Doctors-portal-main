import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

import { FaCogs, FaFileAlt, FaSignOutAlt, FaCalendarCheck, FaGripHorizontal, FaUsers, FaUserCheck } from "react-icons/fa";

import { useContext } from 'react';
import { UserContext } from '../../../App'
import { AppointmentContext } from '../../../App';
import HomeIcon from '@material-ui/icons/Home';

const Sidebar = () => {



    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [, , isDoctor, setIsDoctor] = useContext(AppointmentContext)

    const logOutHandeler = () => {
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        localStorage.removeItem('response');
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.strongify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {

                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/dboard" className="text-white">
                            <FaGripHorizontal />Dashboard
                        </Link>
                    </li>
                }
                <li>
                    <Link style={{ textDecoration: 'none' }} to="/appointmentList" className="text-white">
                        <FaCalendarCheck />Appointment
                    </Link>

                </li>


                        <li>
                    <Link style={{ textDecoration: 'none' }} to="/allPatients" className="text-white">
                        <FaUsers />Patients
                            </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none' }} to="/prescription" className="text-white">
                        <FaFileAlt />Prescriptions
                            </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none' }} to="/AddDoctor" className="text-white" >
                        <FaUserCheck />Add Doctor
                            </Link>
                </li>


            </ul>
            <div>
                <li>
                    <Link style={{ textDecoration: 'none' }} to="/" className="text-white" >
                        <HomeIcon />Home
           </Link>
                </li>
            </div>
            <div>
                <li onClick={logOutHandeler}>
                    <Link style={{ textDecoration: 'none' }} to="/" className="text-white"><FaSignOutAlt />Logout</Link>
                </li>
            </div>
        </div>
    );
};

export default Sidebar;