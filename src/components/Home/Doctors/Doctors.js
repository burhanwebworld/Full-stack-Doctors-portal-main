import React from 'react';
import Doctor from '../Doctor/Doctor';
import doctor1 from '../../../images/doctor.png'
import doctor2 from '../../../images/ema.png'
import doctor3 from '../../../images/aliza.png'
const doctorInfo = [
    {
        
        name : 'Wilson Harry',
        
        img : doctor1
    },
    {
        
        name : 'Ema Gomez',
       
        img : doctor2
    },
    {
        
        name : 'Aliza Farari',
        
        img : doctor3
    }
]

const Doctors = () => {
   
    return (
        <section className="doctors">
        <div className="container">
            <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
            <div className="row">
                {
                    doctorInfo.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }              
            </div>
        </div>
    </section>
    );
};

export default Doctors;

/**import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                     doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;*/