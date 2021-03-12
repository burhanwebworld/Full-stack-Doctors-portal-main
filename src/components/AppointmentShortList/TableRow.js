import React, { useState } from 'react';
import './TableRow.css';


const TableRow = ({appointment}) => {
    const [status,setStatus]=useState(appointment.status)

    const handleStatusChange = (e) => {
        const id = e.target.name;
        const update = e.target.value;
        setStatus(update);
        console.log(update);
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({update})
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('Status Successfully Changed');
            };
        })
        
    }

    console.log(status);
    return (
       
            <tr>
                        <td >{appointment.name}</td>
                        {/* <td>{appointment.phone}</td> */}
                        <td>{appointment.email}</td>
                        <td>
                        {/* <VisitButton
                                    id={appointment._id} 
                                    visited={appointment.visited}
                                /> */}
                        
                        <select className='action_status' onChange={handleStatusChange} name={appointment._id} >
                            <option className='status1' value={status} selected>{status}</option>
                            <option className='status2'  value="Not Visited">Not Visited</option>
                            <option className='status3' value='Visited'>Visited</option>
                        </select>
                        </td>
                    </tr>
        
    );
};

export default TableRow;