import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DoctorLoginPage from './DoctorLoginPage';
import PatientLoginPage from './PatientLoginPage';
import DoctorRegistration from './DoctorRegistration';
import PatientRegistration from './PatientRegistration';
import PatientUpdate from './PatientUpdate';
import DoctorProfile from './DoctorProfile';
import PatientProfile from './PatientProfile';
import DoctorUpdate from './DoctorUpdate';
import Invalied from './Invalied';
import AppointmentBooking from './AppointmentBooking';
import Navbar from './Navbar';
import RegistrationPage from './RegistrationPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DoctorHomePage from './DoctorHomePage';
import PatientHomePage from './PatientHomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileDelete from './ProfileDelete';
import AppointmentDelete from './AppointmentDelete';
import AppointmentDeltails from './AppontmentDetatils';
import AppointmentUpdate from './AppointmentUpdate';
import HomeDashboard from './HomeDashBoard';
import Footer from './Footer';

import SplashScreen from './SplashScreen';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <DoctorLoginPage/>
    <br/>
    <DoctorRegistration/>
    <br/>
    <DoctorUpdate/>
    <br/>
    <DoctorProfile/>
    <br/>
    <PatientLoginPage/>
    <br/>
    <PatientRegistration/>
    <br/>
    <PatientUpdate/>
    <br/>
    <PatientProfile />
    <br/>
    <Invalied />
    <AppointmentBooking/>
    <RegistrationPage/>    
    <Navbar/>
*/}
     
    <Navbar/>
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/LoginPage" element={<LoginPage />}></Route>
            <Route path="/RegistrationPage" element={<RegistrationPage />}></Route>
            <Route path="/DoctorRegistration" element={<DoctorRegistration />}></Route>
            <Route path="/PatientRegistration" element={<PatientRegistration />}></Route>
            <Route path="/DoctorLoginPage" element={<DoctorLoginPage />}></Route>
            <Route path="/PatientLoginPage" element={<PatientLoginPage />}></Route>
            <Route path="/DoctorHomePage" element={<DoctorHomePage />}></Route>
            <Route path="/PatientHomePage" element={<PatientHomePage/>}></Route>
            <Route path="/PatientAcount" element={<PatientRegistration/>}></Route>
            <Route path="/PatientLoginPages" element={<PatientLoginPage/>}></Route>
            <Route path="/doctorLogin" element={<DoctorLoginPage/>}></Route>
            <Route path="/doctorRegistartionPage" element={<DoctorRegistration/>}></Route>
            <Route path="/doctorLoginPage" element={<DoctorLoginPage/>}></Route>
            <Route path="/patientLoginPage" element={<PatientLoginPage/>}></Route>
            <Route path="/DoctorProfile" element={<DoctorProfile/>}></Route>
            <Route path="/DoctorUpdate" element={<DoctorUpdate/>}></Route>
            <Route path="/ProfileDelete" element={<ProfileDelete/>}></Route>
            <Route path="/doctorRegistration" element={<DoctorRegistration/>}></Route>
            <Route path="/PatientProfile" element={<PatientProfile/>}></Route>
            <Route path="/PatientProfile" element={<PatientProfile/>}></Route>         
            <Route path="/PatientUpdate" element={<PatientUpdate/>}></Route>
            <Route path="/AppointmentBooking" element={<AppointmentBooking/>}></Route>
            <Route path="/AppointmentDelete" element={<AppointmentDelete/>}></Route>
            <Route path="AppointmentBook" element={<AppointmentBooking/>}></Route>
            <Route path="/Appointmentview" element={<AppointmentDeltails/>}></Route>
            <Route path="/Appointmentupdate" element={<AppointmentUpdate/>}></Route>
            
         </Routes>
         </BrowserRouter>
          < Footer/>
          
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
