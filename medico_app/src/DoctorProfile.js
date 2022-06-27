import React from "react";
import login from './images/DoctorProfile.jpg';
import './doctorProfile.css';
import Doc from'./images/doctorProfileimg.jpg';
class DoctorProfile extends React.Component {
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
                        <h1 style={{color:"black"}}>Doctor Profile</h1><br/>
                        <div>
                            <p>Name  : Dr. P. Dhananjaya</p>
                            <p>DOB   : 10/10/1966</p>
                            <p>Email : PDhananjaya@gmail.com</p>
                            <p>Specialization : ortho</p>
                            <p>Experience : 20years</p><br/><br/>
                            <p style={{color:"black"}}>Back to home</p>
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
export default DoctorProfile;