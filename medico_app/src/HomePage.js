import React from "react";
import './HomePage.css';
import Gif from'./images/HOMEgif2.gif';
import Doc1 from'./images/doctorProfileimg.jpg';
import Doc2 from'./images/doc2.jpg';
import Doc3 from'./images/doc3.jpg';
import Doc5 from'./images/doc5.jpg';
import HomeDashboard from "./HomeDashBoard";
class HomePage extends React.Component{
    render()
    {
        return(
            <div>
                <center>
                    <img src={Gif} width={"70%"} height={"600px"} />
                 </center><br/><br/>
               <div>  
               
                <div className="wellcomecss">
                    <center>
                        <br/><br/>
                         <h1>Welcome! to Medic'O </h1>
                         <p>
                            Looking for an appointment right at your destination. Get Confirmed
                            Appointment with Top Doctors and Surgeons in Hyderabad at Preferred
                            Date &amp; Time.
                            <br />
                            <br /> Get Confirmed Appointment with Experienced Doctors &amp; Surgeons.
                            Book Now! 12+ Centers of Excellence. Cutting-Edge Treatment.
                         </p>
                         <h4>Get the Personal care for your healthy living. </h4><br/>
                         <a href="/patientLoginPage">
                         <button type="button" className="buttoncss">Book Appointment</button></a>
                    </center>
                 </div>
               
              
                  
                </div>
                
                <center>
               
            <div ><br/><br/><br/>
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
               
                <HomeDashboard/>
                </center>
            </div>
        );
    }
}
export default HomePage;