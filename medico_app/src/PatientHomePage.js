import React from "react";
import login from './images/DoctorProfile.jpg';
import './patientHomePage.css';
import Del from'./images/profileDelete.gif';
import Pat from './images/patientReg.jpg'
import Gif from'./images/patienHomegif.gif';
import './HomePage.css';
import Doc1 from'./images/doctorProfileimg.jpg';
import Doc2 from'./images/doc2.jpg';
import Doc3 from'./images/doc3.jpg';
import Doc5 from'./images/doc5.jpg';
import Dashboard2 from "./Dashboard2";
class PatientHomePage extends React.Component {
    render()
    {
        return(
            <div>
                 <center>
                    <img src={Gif} width={"100%"} height={"600px"} />
                 </center>
                 <div style={{background:"black", padding:"60px"}}>
                    <center><h1 style={{color:"white"}}>Welcome to Medic'O</h1></center><br/>
                    <center>
                    <p  style={{color:"white", textAlign:"justify"}}>
                            Looking for an appointment right at your destination. Get Confirmed
                            Appointment with Top Doctors and Surgeons in Hyderabad at Preferred
                            <br />
                            <br /> Date &amp; Time.
                            Get Confirmed Appointment with Experienced Doctors &amp; Surgeons.
                            Book Now! 12+ Centers of Excellence. Cutting-Edge Treatment.
                         </p>
                         <h4 style={{color:"white"}}>Get the Personal care for your healthy living. </h4><br/>
                         <a href="/AppointmentBooking">
                         <button type="button" className="buttoncss">Book Appointment</button></a>
                    </center><br/><br/><br/>
                    <center>
                
               
                <div style={{width: "250px", height:"250px", borderRadius: "10px",border: "3px solid white", background:"white"}}className="pChildDiv">

                  <center><br/>
                    <a href="/AppointmentBooking">
                    <button className="abuttoncss">Book Appointment</button></a><br/>
                    <a href="/Appointmentview">
                    <button className="buttoncss">View Appointment </button></a><br/>
                    <a href="/Appointmentupdate">
                    <button className="abuttoncss">Update Appointment</button></a><br/>
                    <a href="/AppointmentDelete">
                    <button className="abuttoncss">Delete Appointment</button></a><br/>
                  </center>
                </div>

                <div style={{width:"60px", height:"220px"}} className="pChildDiv"></div>
                

                <div style={{width: "250px", height:"250px", borderRadius: "10px",border: "3px solid white", background:"white"}}className="pChildDiv">
                 <center><br/><br/>
                    <a href="/PatientProfile">
                    <button className="buttoncss">Profile View</button></a><br/>
                    <a href="/PatientUpdate">
                    <button className="buttoncss">Profile Update</button></a><br/>
                    <a href="/ProfileDelete">
                    <button className="buttoncss">Delete Profile</button></a><br/><br/>
                </center>
                </div>
                

                </center>

               </div> 

               {/* cards*/}
               <div className="cardpadding">
               <div><br/><br/><br/>
                <div style={{padding:"0px", borderRadius:"10px", border:"2px solid lightgry", width:"260px", height:"390px", padding:"10px",  boxShadow: "5px 5px 10px rgb(204, 203, 203) ", background:"white"}} className="cardChildDiv">
                    <img src={Doc1} width={"230px"} height={"200px"} /><br/><br/>
                    <div className="infocss">
                        <center>
                            <p>Name: Dr. P. Dhananjaya</p>
                            <p>Specialization: Orthopedic</p>
                            <p>Hospital: Care</p>
                        </center>
                    </div>
                </div>
                <div style={{width:"30px", height:"390px"}} className="cardChildDiv"></div>
                <div style={{padding:"0px", borderRadius:"10px", border:"2px solid white", width:"260px", height:"390px", padding:"10px",  boxShadow: "5px 5px 10px rgb(204, 203, 203)",background:"white"}} className="cardChildDiv">
                    <img src={Doc2} width={"230px"} height={"200px"} /><br/><br/>
                    <div className="infocss">
                        <center>
                            <p>Name: Dr. A. Swapna </p>
                            <p>Specialization: ENT</p>
                            <p>Hospital: Fernandez</p>
                        </center>
                    </div>
                </div>
                <div style={{width:"30px", height:"390px"}} className="cardChildDiv"></div>
                <div style={{padding:"0px", borderRadius:"10px", border:"2px solid white", width:"260px", height:"390px", padding:"10px",  boxShadow: "5px 5px 10px rgb(204, 203, 203)",background:"white"}} className="cardChildDiv">
                    <img src={Doc3} width={"230px"} height={"200px"} /><br/><br/>
                    <div className="infocss">
                        <center>
                            <p>Name: Dr. G. Varsha</p>
                            <p>Specialization: Neurologist</p>
                            <p>Hospital: Nims</p>
                        </center>
                    </div>
                </div>
                <div style={{width:"30px", height:"390px"}} className="cardChildDiv"></div>
                <div style={{padding:"0px", borderRadius:"10px", border:"2px solid white", width:"260px", height:"390px", padding:"10px",  boxShadow: "5px 5px 10px rgb(204, 203, 203)", background:"white"}} className="cardChildDiv">
                    <img src={Doc5} width={"230px"} height={"200px"} /><br/><br/>
                    <div className="infocss">
                        <center>
                            <p>Name: Dr. P. Dhananjaya</p>
                            <p>Specialization: Orthopedic</p>
                            <p>Hospital: Yashoda</p>
                        </center>
                    </div>
                </div><br/><br/><br/><br/><br/>
            </div>   
            </div>
            <center>
            <Dashboard2/><br/><br/></center>
            
            <center>
                <a href="/PatientLoginPage">
            <button style={{background:"black",color:"white",padding:"10px"}}>LogOut</button><br/><br/></a></center>
            

            </div>

        );
    }
}
export default PatientHomePage;