import React from "react";
import login from './images/DoctorProfile.jpg';
import './registrationPage.css';
import Doc from'./images/doctorsReg.png';
import Pat from './images/patientReg.jpg'
class RegistrationPage extends React.Component {
    render()
    {
        return(
            <div className="rploginpageBackground" style={{padding:"100px"}}>
                <center>
                                   
                        <div className="rpChildDiv">
                              <img src={Pat} width={"400px"} height={"400px"} className="imagecss"/><br/><br/>
                              <a href="/PatientRegistration">
                              <button className="logincss"><i class="fa-solid fa-bed"></i>  Patient</button>
                              </a>
                        </div>

                        <div className="rpChildDiv" style={{width:"40px", height:"400px"}}></div>

                        <div className="rpChildDiv">
                            <center>
                                <img src={Doc}  width={"400px"} height={"400px"} className="imagecss"/><br/><br/>
                               <a  href="/DoctorRegistration">
                                <button className="logincss"><i class="fa-solid fa-user-doctor"></i>  Doctor</button>
                                </a>
                            </center>
                        </div>
                        

                 </center>       
            </div>
        );
    }
}
export default RegistrationPage;