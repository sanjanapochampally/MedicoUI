import React from "react";
import login from './images/patientlogin.jpg';
import './patientRegistration.css';
import Doc from'./images/pat.png';
class PatientRegistration extends React.Component {
    render()
    {
        return(
            <div className="prloginpageBackground" style={{padding:"160px",}}>

               <center>
                {/* main div */}
                <div className="prmaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"750px", }} className="prChildDiv">
                        <br/><br/>
                        <img src={Doc} alt="doctor" className="prdocimg"/>
                        <h1 style={{color:"rgb(83, 154, 234)"}}>Patient Registration</h1><br/>
                        <form>
                            
                            <lable className="premailstyle"><i className="fa-solid fa-user"></i> Name</lable>
                            <input type="text" className="prfeildwidth" required/><br/><br/>

                            <label htmlFor="Dob" className="prdobstyle"><i className="fa-solid fa-calendar-days"></i> DOB</label>
                            <input type="date" name="Dob" id="Dob"  className="prfeildwidth" required /><br/><br/>

                            <lable className="premailstyle" htmlfor="emailid"><i className="fa-solid fa-envelope"></i> Email</lable>
                            <input type="text" className="prfeildwidth" id="emailid" name="emailid"/><br/><br/>

                            <lable className="prpasswordstyle" htmlfor="password"><i class="fa-solid fa-lock"></i> Password</lable>
                            <input type="password" className="prfeildwidth" id="password" name="password"/><br/><br/>

                            
                            <lable className="prdesstyle" htmlFor="Experience"><i className="fa-solid fa-user"></i> Illness</lable>
                            <input type="text" className="prfeildwidth" id="Experience" name="experience" required/><br/><br/>


                            <label htmlFor="DoctorImage" className="prpicstyle"><i className="fa-solid fa-image"></i> Profile Picture</label>
                            <input type="file" name="DoctorImage" id="DoctorImage"  className="prpicfeildwidth" required /><br/><br/><br/>
                            <a href="/PatientLoginPages">
                            <button type="button" className="prloginstyle">Register</button><br/>
                            </a>
                            <a href="/patientLoginPage" style={{color:"rgb(83, 154, 234)"}}>
                            <p style={{color:"rgb(83, 154, 234)"}}>already have a account <br />click here to login</p>
                            </a>
                            
                           
                        </form>
                    </div>
                    {/* image div*/}
                    <div className="prChildDiv">
                        <center>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                        <img src={login} alt="doctor login pictor" className="primgwidth"/>
                        </center>
                    </div>
               </div>
                 </center>
            </div>
        );
    }
}
export default PatientRegistration;