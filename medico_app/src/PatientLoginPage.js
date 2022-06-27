import React from "react";
import login from './images/patientlogin.jpg';
import './patientlogin.css';
import Pat from'./images/pat.png';

class DoctorLoginPage extends React.Component {
    render()
    {
        return(
            <div className="loginpageBackground" style={{padding:"160px",}}>

               <center>
                {/* main div */}
                <div className="ptmaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"400px", borderRadius:"5px"}} className="ChildDiv">
                        <br/>
                        <img src={Pat} alt="doctor" className="docimg"/>
                        <h1 style={{color:"rgb(83, 154, 234)"}}>Patient Login</h1><br/>
                        <form>
                       
                            <lable className="emailstyle" htmlfor="emailid"><i class="fa-solid fa-bed"></i> Email</lable>
                            <input type="email" className="feildwidth" id="emailid" name="emailid"/><br/><br/>
                            <lable className="passwordstyle" htmlfor="password"><i class="fa-solid fa-lock"></i> Password</lable>
                            <input type="Password" className="feildwidth" name="password" id="password"/><br/><br/>
                            <a href="/PatientHomePage">
                            <button type="button" className="loginstyle">Login</button></a>
                            <a href="/PatientAcount">
                            <p style={{color:"rgb(83, 154, 234)"}}>Create a new account</p></a>
                        </form>
                    </div>
                    {/* image div*/}
                    <div className="ChildDiv">
                        <img src={login} alt="doctor login pictor" className="imgwidth"/>
                    </div>
               </div>
                 </center>
            </div>
        );
    }
}
export default DoctorLoginPage;