import React from "react";
import login from './images/appointmentView.jpg';
import './doctorProfile.css';
import Doc from'./images/patientProfilepic.jpg';
class AppointmentDeltails extends React.Component {
    render()
    {
        return(
            <div className="dploginpageBackground" style={{padding:"100px",}}>

               <center>
               
                {/* main div */}
                <div className="dpmaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"600px", }} className="dpChildDiv">
                        <br/>
                        <img src={Doc} alt="doctor" className="dpdocimg"/>
                        <h1 style={{color:"black"}}>Appointment Details</h1><br/>
                        <div>
                            <p>Patient Name: A. Swathi</p>
                            <p>Doctor Name  : Dr. P. Dhananjaya</p>
                            <p>Appointment Date   : 28/06/2022</p>
                            <p>Time : 9:30pm</p>
                            <p>Email : adariswathi@gmail.com</p>
                            
                        </div><br/><br/>
                       
                    </div>
                    {/* image div*/}
                    <div className="dpChildDiv">
                        <center>
                            <br/><br/>
                        <img src={login} alt="doctor login pictor" className="dpimgwidth"/>
                        </center>
                    </div>
               </div>
                 </center>
            </div>
        );
    }
}
export default AppointmentDeltails;