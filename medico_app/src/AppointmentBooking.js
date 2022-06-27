import React from "react";
import login from './images/appointmentBooking.jpg';
import './appointmentBooking.css';
import Doc from'./images/calender.jpeg';
class AppointmentBooking extends React.Component {
    render()
    {
        return(
            <div className="abloginpageBackground" style={{padding:"100px",}}>

               <center>
                
                {/* main div */}
                <div className="abmaindiv">
                    {/* form div */}
                    <div style={{padding:"3px", backgroundColor:"white",width:"400px",height:"730px", }} className="abChildDiv">
                        <br/><br/>
                        <img src={Doc} alt="doctor" className="abdocimg"/>
                        <h1 style={{color:"black"}}>Appointment Booking</h1><br/>
                        <form>
                            
                            <label className="abpasswordstyle"><i class="fa-solid fa-bed"></i> Patient Name</label>
                            <input type="text" className="abfeildwidth" required/><br/><br/>

                            <label className="abpasswordstyle"><i class="fa-solid fa-user-doctor"></i> Doctor Name</label>
                            <select className="abfeildwidth">
                                
                                <option>--select--</option>
                                <option>Dr. v. Ravi</option>
                                <option>Dr. P. Ashish Sreevatsav</option>
                                <option>Dr. k. Shiva Kumar</option>
                                <option>Dr. H. Padhma </option>
                             
                            </select><br/><br/>

                            <label htmlFor="Dob" className="abdatestyle"><i class="fa-solid fa-calendar-days"></i> Date</label>
                            <input type="date" name="Dob" id="Dob"  className="abfeildwidth" required /><br/><br/>


                            <label className="abemailstyle" htmlfor="password"><i class="fa-solid fa-clock"></i> Time</label>
                            <select className="abfeildwidth">
                                
                                <option>--select--</option>
                                <option>9:30 am</option>
                                <option>10:00 am</option>
                                <option>10:30 am</option>
                                <option>11:00 am </option>
                                <option>11:30 am</option>
                                <option>12:00 am</option>

                            </select><br/><br/>

                            <label htmlFor="Dob" className="abreportstyle"><i class="fa-solid fa-calendar-days"></i>Reports</label>
                            <input type="file" name="Dob" id="Dob"  className="abfeildwidth" required /><br/><br/><br/>

                            <label htmlFor="Dob" className="abdatestyle"><i class="fa-solid fa-calendar-days"></i> Date</label>
                            <select className="abfeildwidth">
                                
                                <option>--select--</option>
                                <option>Offline</option>
                                <option>Online</option>
                                
                            </select><br/><br/>

                            <a href="/Appointmentview">
                            <button type="button" className="abloginstyle">Book</button>
                            </a>
                            <br/>

                           
                        </form>
                    </div>
                    
               </div>
                 </center>
            </div>
        );
    }
}
export default AppointmentBooking;