import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

 
} from "react-router-dom";
import './App.css';
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Login from './components/Login/Login';
import Dashboard from "./components/DashboardPage/Dashboard/Dashboard";
import AllPatients from './components/AllPatients/AllPatients' 
import AddDoctor from './components/AddDoctor/AddDoctor';
import Dboard from './components/Dboard/Dboard';
import MainDashboard from "./components/MainDashboard/MainDashboard";
import PrescriptionTable from './components/PrescriptionPage/PrescriptionPage';
import Testimonial from './components/Testimonials/Testimonials';
import About from './components/Home/Services/Services';
import Blog from './components/Home/Blog/Blog';
import Contact from './components/Home/Contact/Contact';

export const UserContext = createContext();
export const AppointmentContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
             <Home></Home>
          </Route>
          {/* <PrivateRoute path="/appointment">
          <Appointment/>
          </PrivateRoute> */}
           <Route path="/appointment">
          <Appointment/>
          </Route>

          <Route path="/prescription">
          < PrescriptionTable/>
          </Route>

          <Route path="/testimonial">
          < Testimonial/>
          </Route>

          <Route path="/about">
          < About/>
          </Route>
           
          <Route path="/contact">
          < Contact/>
          </Route>

          <Route path="/blog">
          < Blog/>
          </Route>

          <Route path="/allPatients">
          <AllPatients/>
          </Route>

          <Route path="/addDoctor">
          <AddDoctor/>
          </Route>

          <Route path="/dboard">
          <Dboard/>
          </Route>

          {/* <Route path="/appointmentList">
          <AppointmentList/>
          </Route> */}
          <Route path="/appointmentList">
          <Dashboard/>
          </Route>
          <PrivateRoute path="/dashboard">
          <MainDashboard/>
          </PrivateRoute>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
