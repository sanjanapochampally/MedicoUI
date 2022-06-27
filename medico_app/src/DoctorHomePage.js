import React from "react";
import login from './images/DoctorProfile.jpg';
import './registrationPage.css';
import Del from'./images/profileDelete.gif';
import Pat from './images/patientReg.jpg'
import Doc1 from'./images/patient1.jpg';
import Doc2 from'./images/patient2.jpg';
import Doc3 from'./images/patient6.jpeg';
import Doc5 from'./images/patient7.jpeg';
import Gif from'./images/DoctorHome.gif';
class DoctorHomePage extends React.Component {
    render()
    {
        return(
            <div>
                
                 <center>
                    <img src={Gif} width={"100%"} height={"600px"} />
                 </center>
                 <div style={{background:"black", padding:"100px", height:"500px"}}>
                     <div  className="pChildDiv">
                        <center><h1 style={{color:"white"}}>Welcome to Medic'O</h1></center><br/>
                        <center>

                            <ul>

                                <li><h4 style={{color:"white", textAlign:"justify"}}>Welcome To Medic'O Family Practice and the<br/> office of Medic'O</h4></li><br/>
                                <li><h4 style={{color:"white", textAlign:"justify"}}>Medic'O Helps You To Sever Many People We are<br/> Happy To Have You With US </h4></li>

                            </ul>
                        </center>
                     </div>     

                     <div style={{width:"150px"}} className="pChildDiv"></div>

                     <div style={{width: "250px", height:"200px", borderRadius: "10px",border: "3px solid white", background:"white"}}className="pChildDiv">
                        <center><br/>
                            <a href="/DoctorProfile">
                            <button className="buttoncss">Profile View</button></a><br/>
                            <a href="/DoctorUpdate">
                            <button className="buttoncss">Profile Update</button></a><br/>
                            <a href="/ProfileDelete">
                            <button className="buttoncss">Delete Profile</button></a><br/><br/>
                        </center>
                     </div>
                 </div> 
  
               {/* cards*/}
               <div className="cardpadding">
               <div>
                <center><h2>Your Appointments</h2></center><br/><br/>
                <div style={{padding:"0px", borderRadius:"10px", border:"2px solid lightgrey", width:"260px", height:"450px", padding:"10px",  boxShadow: "5px 5px 10px rgb(204, 203, 203) ", background:"white"}} className="cardChildDiv">
                    <img src={Doc1} width={"230px"} height={"200px"} /><br/><br/>
                    <div className="infocss">
                        <center>
                            <p style={{textAlign:"justify"}}>Name: P. Teju </p>
                            <p style={{textAlign:"justify"}}>illness: Ear Pain</p>
                            <p style={{textAlign:"justify"}}>Mode: Online</p>
                            <p style={{textAlign:"justify"}}>Time: 2:30pm</p>
                            <p style={{textAlign:"justify"}}>Day: Mon</p>
                        </center>
                    </div>
                </div>
                <div style={{width:"30px", height:"390px"}} className="cardChildDiv"></div>
                <div style={{padding:"0px", borderRadius:"10px", border:"2px solid white", width:"260px", height:"450px", padding:"10px",  boxShadow: "5px 5px 10px rgb(204, 203, 203)",background:"white"}} className="cardChildDiv">
                    <img src={Doc2} width={"230px"} height={"200px"} /><br/><br/>
                    <div className="infocss">
                        <center>
                            <p style={{textAlign:"justify"}}>Name: A. Rahul </p>
                            <p style={{textAlign:"justify"}}>illness: Ear Pain</p>
                            <p style={{textAlign:"justify"}}>Mode: Online</p>
                            <p style={{textAlign:"justify"}}>Time: 2:30pm</p>
                            <p style={{textAlign:"justify"}}>Day: Mon</p>
                        </center>
                    </div>
                </div>
                <div style={{width:"30px", height:"390px"}} className="cardChildDiv"></div>
                <div style={{padding:"0px", borderRadius:"10px", border:"2px solid white", width:"260px", height:"450px", padding:"10px",  boxShadow: "5px 5px 10px rgb(204, 203, 203)",background:"white"}} className="cardChildDiv">
                    <img src={Doc3} width={"230px"} height={"200px"} /><br/><br/>
                    <div className="infocss">
                        <center>
                            <p style={{textAlign:"justify"}}>Name: R. Swapna </p>
                            <p style={{textAlign:"justify"}}>illness: Tooth Pain</p>
                            <p style={{textAlign:"justify"}}>Mode: Online</p>
                            <p style={{textAlign:"justify"}}>Time: 2:30pm</p>
                            <p style={{textAlign:"justify"}}>Day: Mon</p>
                        </center>
                    </div>
                </div>
                <div style={{width:"30px", height:"390px"}} className="cardChildDiv"></div>
                <div style={{padding:"0px", borderRadius:"10px", border:"2px solid white", width:"260px", height:"450px", padding:"10px",  boxShadow: "5px 5px 10px rgb(204, 203, 203)", background:"white"}} className="cardChildDiv">
                    <img src={Doc5} width={"230px"} height={"200px"} /><br/><br/>
                    <div className="infocss">
                        <center>
                            <p style={{textAlign:"justify"}}>Name: K. Saketh </p>
                            <p style={{textAlign:"justify"}}>illness:  root canal</p>
                            <p style={{textAlign:"justify"}}>Mode: Offline</p>
                            <p style={{textAlign:"justify"}}>Time: 2:30pm</p>
                            <p style={{textAlign:"justify"}}>Day: Mon</p>
                       
                        </center>
                    </div>
                </div><br/><br/><br/><br/><br/>
            </div>   
            </div>
            <center>
                <a href="/DoctorLoginPage">
            <button style={{background:"black",color:"white",padding:"10px"}}>LogOut</button><br/><br/></a></center>
            </div>
        );
    }
}
export default DoctorHomePage;