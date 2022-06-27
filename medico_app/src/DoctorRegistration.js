import React from "react";
import login from './images/doctorlogin.jpg';
import './doctorRegistration.css';
import Doc from'./images/doc.jpg';
class DoctorRegistration extends React.Component {
    render()
    {
        return(
            <div className="drloginpageBackground" style={{padding:"100px",}}>

               <center>
                {/* main div */}
                <div className="drmaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"950px", }} className="drChildDiv">
                        <br/>
                        <img src={Doc} alt="doctor" className="drdocimg"/>
                        <h1 style={{color:"rgb(211, 40, 113)"}}>Doctor Registration</h1><br/>
                        <form>
                            
                            <lable className="dremailstyle"><i className="fa-solid fa-user"></i> Name</lable>
                            <input type="text" className="drfeildwidth" required/><br/><br/>

                            <label htmlFor="Dob" className="drdobstyle"><i className="fa-solid fa-calendar-days"></i> DOB</label>
                            <input type="date" name="Dob" id="Dob"  className="drfeildwidth" required /><br/><br/>

                            <lable className="dremailstyle" htmlfor="emailid"><i className="fa-solid fa-envelope"></i> Email</lable>
                            <input type="text" className="drfeildwidth" id="emailid" name="emailid"/><br/><br/>

                            <lable className="drpasswordstyle" htmlfor="password"><i class="fa-solid fa-lock"></i> Password</lable>
                            <input type="password" className="drfeildwidth" id="password" name="password"/><br/><br/>

                            <label htmlFor="Dob" className="drdobstyle"><i className="fa-solid fa-calendar-days"></i> Day</label>
                            <input type="text" name="Dob" id="Dob"  className="drfeildwidth" required /><br/><br/>


                            <lable className="drpasswordstyle" htmlfor="password"><i class="fa-solid fa-hourglass-start"></i> Start Time</lable>
                            <input type="password" className="drfeildwidth" id="password" name="password"/><br/><br/>

                            <lable className="drpasswordstyle" htmlfor="password"><i class="fa-solid fa-hourglass-end"></i> End Time</lable>
                            <input type="password" className="drfeildwidth" id="password" name="password"/><br/><br/>


                            <lable className="drspestyle"><i className="fa-solid fa-list"></i> Specialization</lable>
                            <input type="text" className="drfeildwidth" name="Specialization" id="Specialization" required/><br/><br/>

                            <lable className="drexpstyle" htmlFor="Experience"><i class="fa-solid fa-calendar-plus"></i> Experience</lable>
                            <input type="text" className="drfeildwidth" id="Experience" name="experience" required/><br/><br/>

                            <lable className="drhospital" htmlFor="hospital"><i className="fa-solid fa-house-chimney-medical"></i> Hospital</lable>
                            <input type="text" className="drfeildwidth" id="hospital" name="hospital" required/><br/><br/>


                            <label htmlFor="DoctorImage" className="drpicstyle"><i className="fa-solid fa-image"></i> Profile Picture</label>
                            <input type="file" name="DoctorImage" id="DoctorImage"  className="drpicfeildwidth" required /><br/><br/>
                            <a href="/doctorLogin">
                            <button type="button" className="drloginstyle">Register</button><br/>
                            </a>
                            <a href="/doctorLoginPage" style={{color:"rgb(211, 40, 113)"}}>
                            <p style={{color:"rgb(211, 40, 113)"}}>already have a account <br />click here to login</p>
                            </a>
                           
                        </form>
                    </div>
                    {/* image div*/}
                    <div className="drChildDiv">
                        <center>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                        <img src={login} alt="doctor login pictor" className="drimgwidth"/>
                        </center>
                    </div>
               </div>
                 </center>
            </div>
        );
    }
}
export default DoctorRegistration;