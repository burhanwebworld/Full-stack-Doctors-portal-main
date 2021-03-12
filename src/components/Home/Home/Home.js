import React from 'react';
import FeatureServices from '../FeatureServices/FeatureServices';
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';
import MakesAppointment from '../MakesAppointmnet/MakesAppointment';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';




const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeatureServices/>
            <MakesAppointment/>
            <Testimonials/>
            <Blog/>
            <Doctors/>
            <Contact/>
            <Footer/>
            
        </div>
    );
};

export default Home;