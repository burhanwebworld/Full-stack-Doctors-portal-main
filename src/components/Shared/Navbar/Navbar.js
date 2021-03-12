import React from 'react';
import fluoride from '../../../images/fluoride.png'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 <div className='col-md-4'>
 <a className="nav-link fluoride"><img src={fluoride} alt=""/></a>
 </div>
  <div className="collapse navbar-collapse col-md-8" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    {/* <li className="nav-item active">
    <a className="nav-link fluoride"><img src={fluoride} alt=""/></a>
      </li> */}
      <li className="nav-item active">
        <a className="nav-link mr-5" style={{color:'#17E7D2'}} href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link mr-5" style={{color:'#E71743'}} href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link mr-5" style={{color:'#45EF75',fontWeight:'bold'}} href="/dashboard">Dashboard</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`}  href="/testimonial">Reviews</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`} href="/blog">Blog</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`} href="/contact">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;