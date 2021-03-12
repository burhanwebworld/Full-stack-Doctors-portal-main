import React from 'react';
import { Link } from 'react-router-dom';
import chair from "../../images/chair.png"


const HeaderMain = () => {
    return (
       <main className='row d-flex align-items-center header-bg' style={{height:'600px'}} >
           <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Simile <br/> Starts Here</h1>
               <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id ab voluptas laborum delectus cum!</p>
               <Link to='/appointment'><button className="btn btn-primary" >GET APPOINTMENT</button></Link>
           </div>
           <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid"/>
           </div>
        </main>
    );
};

export default HeaderMain;