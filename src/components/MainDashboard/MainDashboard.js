import React from 'react';
import Sidebar from '../DashboardPage/Sidebar/Sidebar';
import doctor from '../../images/doctor.png';
import './MainDashboard.css';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const MainDashboard = () => {
    return (

       

            <div className=" align-items-center ">
                <div className="col-md-5 sidebar">
                    <Sidebar />
                </div>
               <div  >
              <div className="col-md-1 arrow ">
                    <h1>Dashboard</h1>
                </div>
               
           </div>
               
                <div className="col-md-6 doctor ">

               <img className="img-fluid" src={doctor} alt="" />

                </div>
               

    
            </div>
        
    );
};

export default MainDashboard;