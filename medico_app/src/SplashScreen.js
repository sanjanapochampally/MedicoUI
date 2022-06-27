import React from "react";
import logo from'./images/Mlogopic.jpeg';
class SplashScreen extends React.Component{
    render()
    {
        return(
          <div style={{height:"100vh", width:"100%", background:"black", padding:"250px"}}>
            <center>
              <a href="/">  
              <img src={logo} alt="medicologo" width={"400px"} height={"100px"}/> 
              </a>
              </center>
          </div>
        );
    }
}
export default SplashScreen;