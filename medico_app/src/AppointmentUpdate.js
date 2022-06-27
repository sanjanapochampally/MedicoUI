import React from "react";
import login from './images/appointmentUpdate.png';
import './appointmentupdate.css';
import Doc from'./images/appUpdate.jpg';
class AppointmentUpdate extends React.Component {
    render()
    {
        return(
            <div className="auloginpageBackground" style={{padding:"160px",}}>

               <center>
                {/* main div */}
                <div className="aumaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"800px", }} className="auChildDiv">
                        <br/>
                        <img src={Doc} alt="doctor" className="audocimg"/>
                        <h1 style={{color:"rgb(46, 75, 87)"}}>Edit Your Appointment</h1><br/>
                        <form>
                            
                            <lable className="aupasswordstyle"><i class="fa-solid fa-bed"></i> Patient Name</lable>
                            <input type="text" className="aufeildwidth" required/><br/><br/>

                            <lable className="aupasswordstyle"><i class="fa-solid fa-user-doctor"></i> Doctor Name</lable>
                            <select className="aufeildwidth">
                                
                                <option>--select--</option>
                                <option>Dr. v. Ravi</option>
                                <option>Dr. P. Ashish Sreevatsav</option>
                                <option>Dr. k. Shiva Kumar</option>
                                <option>Dr. H. Padhma </option>
                             
                            </select><br/><br/>

                            <label htmlFor="Dob" className="audatestyle"><i class="fa-solid fa-calendar-days"></i> Date</label>
                            <input type="date" name="Dob" id="Dob"  className="aufeildwidth" required /><br/><br/>


                            <lable className="auemailstyle" htmlfor="password"><i class="fa-solid fa-clock"></i> Time</lable>
                            <select className="aufeildwidth">
                                
                                <option>--select--</option>
                                <option>9:30 am</option>
                                <option>10:00 am</option>
                                <option>10:30 am</option>
                                <option>11:00 am </option>
                                <option>11:30 am</option>
                                <option>12:00 am</option>

                            </select><br/><br/>

                            <label htmlFor="Dob" className="aureportstyle"><i class="fa-solid fa-calendar-days"></i>Reports</label>
                            <input type="type" name="Dob" id="Dob"  className="aufeildwidth" required /><br/><br/>

                            <label htmlFor="Dob" className="auamtstyle"><i class="fa-solid fa-calendar-days"></i> Amount Paid</label>
                            <input type="type" name="Dob" id="Dob"  className="aufeildwidth" required /><br/><br/>

                            <label htmlFor="Dob" className="aupaystyle"><i class="fa-solid fa-calendar-days"></i> PaymentID</label>
                            <input type="type" name="Dob" id="Dob"  className="aufeildwidth" required /><br/><br/>


                            <a href="/Appointmentview">
                            <button type="button" className="auloginstyle">Book</button>
                            </a>
                            <br/>

                           
                        </form>
                    </div>
                    {/* image div*/}
                    <div className="auChildDiv">
                        <center>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <img src={login} alt="doctor login pictor" className="auimgwidth"/>
                        </center>
                    </div>
               </div>
                 </center>
            </div>
        );
    }
}
export default AppointmentUpdate;