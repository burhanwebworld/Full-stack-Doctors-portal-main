import React from 'react';
import HeaderMain from '../../HeaderMain/HeaderMain';
import NavBar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';


import './Header.css';

const Header = () => {
    return (
        <div class='header-container'>
            <NavBar/>
            <HeaderMain/>
            <BusinessInfo/>
            
        </div>
    );
};

export default Header;