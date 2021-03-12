import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Modal from 'react-modal';
import moment from 'moment'
import date from 'date-and-time';

Modal.setAppElement('#root')
  
const AllAppRow = (props) => {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [prescription, setPrescription] = useState(props.data.prescription)
    
    
    const handlePrescription = (e) => {
        console.log(prescription)
        fetch('http://localhost:5000/updatePrescription', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.data._id,
                prescription
            })
        }).then(res => res.json())
        .then(data =>{
            if(data){
                alert('Status Successfully Changed');
            };
        })
        setModalIsOpen(false)
    }
   
       

    return (
        <TableRow>
            <TableCell component="th" scope="row">
             {props.data.date}
            </TableCell>
            <TableCell align="right">{props.data.email}</TableCell>
            <TableCell align="right">{props.data.name}</TableCell>
            <TableCell align="right">{props.data.phone}</TableCell>
            <TableCell align="right">
                {
                    prescription?<button
                        onClick={()=>setModalIsOpen(true)} 
                        className='btn btn-info'>
                            View
                        </button>:<button 
                        onClick={()=>setModalIsOpen(true)}
                        className="btn btn-secondary">
                            Add Now
                        </button>
                }
            </TableCell>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={()=>setModalIsOpen(false)} 
                style={{
                    overlay:{
                        background: "rgba(211,211,211,0.5)"
                    },
                    content:{
                        height:'400px',
                        width: '600px',
                        textAlign: 'center',
                        borderRadius: '20px',
                        margin: 'auto',
                        padding: '25px 50px'
                    }
                }} 
            >   
                <h5 className='text-info'>Prescription</h5>
                <form onSubmit={handlePrescription}>
                    <textarea 
                        name="prescription"
                        value={prescription}
                        onChange={e => setPrescription(e.target.value)}
                        cols="52" rows="8" 
                        required/>
                    <br/>
                    <input className='form-control btn btn-info' type="submit" value="Enter"/>
                </form>
            </Modal>
        </TableRow>
    );
        
    
};

export default AllAppRow;