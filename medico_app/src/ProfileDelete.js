import React from 'react'
import Del from'./images/profileDelete.gif';
class ProfileDelete extends React.Component {
    render()
     {
        return(
            
            <div>
                <center><br/><br/>
                <h1>Account Deleted</h1>
                <img src={Del}  width={"600px"} height={"500px"}/>
                
                <a href="/doctorRegistration">
                <p><b>Cilck Here To Register Again</b></p>
                </a>
                </center>
            </div>
            

        );
     }

}
export default ProfileDelete;