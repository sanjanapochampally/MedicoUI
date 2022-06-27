import React from "react";
import login from './images/DoctorProfile.jpg';
import './doctorProfile.css';
import Doc from'./images/patientProfilepic.jpg';
class PatientProfile extends React.Component {
    render()
    {
        return(
            <div className="dploginpageBackground" style={{padding:"100px",}}>

               <center>
                
                {/* main div */}
                <div className="drmaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"500px", }} className="dpChildDiv">
                        <br/>
                        <img src={Doc} alt="doctor" className="dpdocimg"/>
                        <h1 style={{color:"black"}}>Patient Profile</h1><br/>
                        <div>
                            <p>Name  : A. Swathi</p>
                            <p>DOB   : 27/11/1997</p>
                            <p>Email : adariswathi@gmail.com</p>
                            <p>medical condition : fever</p>
                        </div>
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
export default PatientProfile;