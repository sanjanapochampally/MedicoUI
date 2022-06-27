import React from "react";
import login from './images/patientlogin.jpg';
import './patientupdate.css';
import Doc from'./images/pat.png';
class PatientUpdate extends React.Component {
    render()
    {
        return(
            <div className="puloginpageBackground" style={{padding:"160px",}}>

               <center>
                {/* main div */}
                <div className="pumaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"700px", }} className="puChildDiv">
                        <br/>
                        <img src={Doc} alt="doctor" className="pudocimg"/>
                        <h1 style={{color:"rgb(83, 154, 234)"}}>Patient Profile Update</h1><br/>
                        <form>
                            
                            <lable className="puemailstyle">Name</lable>
                            <input type="text" className="prfeildwidth" required/><br/><br/><br/>

                            <label htmlFor="Dob" className="pudobstyle">DOB</label>
                            <input type="date" name="Dob" id="Dob"  className="pufeildwidth" required /><br/><br/>

                            <lable className="puemailstyle" htmlfor="emailid"><i class="fa-solid fa-user-doctor-hair-long" style={{color:"black"}}></i>Email</lable>
                            <input type="text" className="pufeildwidth" id="emailid" name="emailid"/><br/><br/>

                            <lable className="pupasswordstyle" htmlfor="password">Password</lable>
                            <input type="password" className="pufeildwidth" id="password" name="password"/><br/><br/>

                            
                            <lable className="pudesstyle" htmlFor="Experience">Disease</lable>
                            <input type="text" className="pufeildwidth" id="Experience" name="experience" required/><br/><br/>


                            <label htmlFor="DoctorImage" className="pupicstyle">Profile Picture</label>
                            <input type="file" name="DoctorImage" id="DoctorImage"  className="pupicfeildwidth" required /><br/><br/>

                            <a href="/PatientHomePage">    
                            <button type="button" className="puloginstyle">Update</button>
                            </a>
                        </form>
                    </div>
                    {/* image div*/}
                    <div className="puChildDiv">
                        <center>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                        <img src={login} alt="doctor login pictor" className="puimgwidth"/>
                        </center>
                    </div>
               </div>
                 </center>
            </div>
        );
    }
}
export default PatientUpdate;