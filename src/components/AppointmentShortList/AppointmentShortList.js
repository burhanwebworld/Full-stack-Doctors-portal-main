
import React, { useState } from 'react';
import VisitButton from '../VisitButton/VisitButton'
import TableRow from './TableRow';

const AppointmentShortList = ({appointments}) => {
  
    return (
        <table className="table table-borderless ">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                {/* <th className="text-secondary" scope="col">Phone</th> */}
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {

                  appointments.map((appointment, index) => 
                        <TableRow appointment={appointment}/>
                    
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;