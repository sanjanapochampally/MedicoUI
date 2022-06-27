import React from "react";
import Doc from'./images/passwordpic.png';
class Invalied extends React.Component {
    render()
    {
        return(
            <div style={{height:"100vh", padding:"150px"}}>
                <center>
                    <img src={Doc} alt="Invalid credintals" width={"400px"} height={"400px"}/>
                </center>
            </div>
        );
    }
}
export default Invalied;