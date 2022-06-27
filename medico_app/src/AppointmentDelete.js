import React from 'react'
import Del from'./images/profileDelete.gif';
class AppointmentDelete extends React.Component {
    render()
     {
        return(
            <center>
            <div>
                <img src={Del} />
                <p>Appointment Deleted</p>
                <a href="/AppointmentBook">
                <p>Cilck Here To Book Appointment Again</p>
                </a>
            </div>
            </center>

        );
     }

}
export default AppointmentDelete;