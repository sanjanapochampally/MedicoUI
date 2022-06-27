import React from "react";
import login from './images/doctorlogin.jpg';
import './login.css';
import Doc from'./images/doc.jpg';
class DoctorLoginPage extends React.Component {
    render()
    {
        return(
            <div className="dlloginpageBackground" style={{padding:"160px",}}>

               <center>
                {/* main div */}
                <div className="dlmaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"400px", }} className="dlChildDiv">
                        <br/>
                        <img src={Doc} alt="doctor" className="dldocimg"/>
                        <h1 style={{color:"rgb(211, 40, 113)"}}>Doctor Login</h1><br/>
                        <form>
                       
                            <lable className="dlemailstyle" htmlfor="emailid"><i className="fa-solid fa-user-doctor" ></i> Email</lable>
                            <input type="text" className="dlfeildwidth" id="emailid" name="emailid"/><br/><br/>
                            <lable className="dlpasswordstyle" htmlfor="password"> <i class="fa-solid fa-lock"></i> Password</lable>
                            <input type="Password" className="dlfeildwidth" id="password" name="password"/><br/><br/>
                            <a href="/DoctorHomePage" >
                            <button type="button" className="dlloginstyle">Login</button>
                            </a>
                            <a href="/doctorRegistartionPage" style={{color:"rgb(211, 40, 113)"}}>
                            <p style={{color:"rgb(211, 40, 113)"}}>Create a new account</p>
                            </a>
                        </form>
                    </div>
                    {/* image div*/}
                    <div className="dlChildDiv">
                        <img src={login} alt="doctor login pictor" className="dlimgwidth"/>
                    </div>
               </div>
                 </center>
            </div>
        );
    }
}
export default DoctorLoginPage;