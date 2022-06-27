import React from "react";
import login from './images/doctorlogin.jpg';
import './doctorupdate.css';
import Doc from'./images/doc.jpg';
class DoctorUpdate extends React.Component {
    render()
    {
        return(
            <div className="duloginpageBackground" style={{padding:"160px",}}>

               <center>
                {/* main div */}
                <div className="dumaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"800px", }} className="duChildDiv">
                        <br/>
                        <img src={Doc} alt="doctor" className="dudocimg"/>
                        <h1 style={{color:"rgb(211, 40, 113)"}}>Doctor Profile Update</h1><br/>
                        <form>
                            
                            <lable className="duemailstyle"><i className="fa-solid fa-user"></i> Name</lable>
                            <input type="text" className="dufeildwidth" required/><br/><br/>

                            <label htmlFor="Dob" className="dudobstyle"><i className="fa-solid fa-calendar-days"></i> DOB</label>
                            <input type="date" name="Dob" id="Dob"  className="dufeildwidth" required /><br/><br/>

                            <lable className="duemailstyle" htmlfor="emailid"><i className="fa-solid fa-envelope"></i> Email</lable>
                            <input type="text" className="dufeildwidth" id="emailid" name="emailid"/><br/><br/>

                            <lable className="dupasswordstyle" htmlfor="password"><i class="fa-solid fa-lock"></i> Password</lable>
                            <input type="password" className="dufeildwidth" id="password" name="password"/><br/><br/>

                            <lable className="duspestyle"><i className="fa-solid fa-list"></i> Specialization</lable>
                            <input type="text" className="dufeildwidth" name="Specialization" id="Specialization" required/><br/><br/>

                            <lable className="duexpstyle" htmlFor="Experience"><i class="fa-solid fa-calendar-plus"></i> Experience</lable>
                            <input type="text" className="dufeildwidth" id="Experience" name="experience" required/><br/><br/>
                            
                            <lable className="duhospital" htmlFor="hospital"><i className="fa-solid fa-house-chimney-medical"></i> Hospital</lable>
                            <input type="text" className="drfeildwidth" id="hospital" name="hospital" required/><br/><br/>


                            <label htmlFor="DoctorImage" className="dupicstyle"> <i className="fa-solid fa-image"></i> Profile Picture</label>
                            <input type="file" name="DoctorImage" id="DoctorImage"  className="dupicfeildwidth" required /><br/><br/>
                            <a href="/DoctorHomePage">
                            <button type="button" className="duloginstyle">Update</button></a>
                            <p style={{color:"rgb(211, 40, 113)"}}>Back to home</p>
                            <br/>

                           
                        </form>
                    </div>
                    {/* image div*/}
                    <div className="duChildDiv">
                        <center>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                        <img src={login} alt="doctor login pictor" className="duimgwidth"/>
                        </center>
                    </div>
               </div>
                 </center>
            </div>
        );
    }
}
export default DoctorUpdate;