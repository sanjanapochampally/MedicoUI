import React from "react";
import './navbar.css';
import logo from'./images/Mlogopic.jpeg';
class Navbar extends React.Component {
    render()
    {
        return(
            <div className="maindiv"> 
              
                <a href="/">
                <img src={logo} alt="medicologo" width={"200px"} height={"55px"}/>
                </a>
           
                    <a href="/RegistrationPage">
                    <button style={{float:"Right", width:"100px", height:"50px", padding:"10px", border:"1px solid rgb(18, 18, 18)", background:"rgb(18, 18, 18)", color:"white"}} ><b>Register</b></button>
                    </a>
                    <a href="/LoginPage">
                    <button style={{float:"Right", width:"100px", height:"50px", padding:"10px", border:"1px solid rgb(18, 18, 18)", background:"rgb(18, 18, 18)", color:"white"}} ><b>Login</b></button>
                    </a>
                    
                    
            </div>
        );
    }
}
export default Navbar